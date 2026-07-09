"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, KeyRound, Mail, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  useResetPassRequest,
  useVerifiedCodeForget,
  useResetPassUpdate,
} from "@/hooks/auth/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

export default function ResetPasswordModal({ isOpen, onClose, onSuccess }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1); // 1: Send Request, 2: Verify & Update
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const requestMutation = useResetPassRequest();
  const verifyCodeForgetMutation = useVerifiedCodeForget();
  const updatePasswordMutation = useResetPassUpdate();

  const handleSendRequest = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Please enter your email address"),
      });
      return;
    }

    requestMutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          if (data.status === "success" || data.status === 200) {
            Swal.fire({
              icon: "success",
              title: t("Success"),
              text:
                data?.message || t("A reset code has been sent to your email."),
              timer: 1500,
              showConfirmButton: false,
            }).then(() => {
              setStep(2);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: t("Error"),
              text: data.message || t("Failed to send reset code"),
            });
          }
        },
        onError: (err) => {
          Swal.fire({
            icon: "error",
            title: t("Error"),
            text:
              err?.response?.data?.message ||
              err?.message ||
              t("Something went wrong"),
          });
        },
      },
    );
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!code || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Please fill in all fields"),
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Passwords do not match"),
      });
      return;
    }

    // Step 1: Verify the forget password code
    verifyCodeForgetMutation.mutate(
      { email, code },
      {
        onSuccess: (data) => {
          if (data.status === "success") {
            // Step 2: Update the password
            updatePasswordMutation.mutate(
              { email, password, code },
              {
                onSuccess: (res) => {
                  if (res.status == "success") {
                    Swal.fire({
                      icon: "success",
                      title: t("Success"),
                      text:
                        res.message ||
                        t("Password has been reset successfully!"),
                      timer: 2000,
                      showConfirmButton: false,
                    }).then(() => {
                      if (onSuccess) onSuccess();
                      handleClose();
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: t("Error"),
                      text: res.message || t("Failed to update password"),
                    });
                  }
                },
                onError: (err) => {
                  Swal.fire({
                    icon: "error",
                    title: t("Error"),
                    text:
                      err?.response?.data?.message ||
                      err?.message ||
                      t("Something went wrong"),
                  });
                },
              },
            );
          } else {
            Swal.fire({
              icon: "error",
              title: t("Error"),
              text: data.message || t("Invalid verification code"),
            });
          }
        },
        onError: (err) => {
          Swal.fire({
            icon: "error",
            title: t("Error"),
            text:
              err?.response?.data?.message ||
              err?.message ||
              t("Something went wrong"),
          });
        },
      },
    );
  };

  const handleClose = () => {
    setStep(1);
    setEmail("");
    setCode("");
    setPassword("");
    setConfirmPassword("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999999999! flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative bg-white backdrop-blur-2xl border border-primary max-h-[85vh] overflow-y-auto rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl p-8 sm:p-10 flex flex-col items-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-primary/5 hover:bg-primary text-[#4D3E3F] hover:text-white p-2 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-105 cursor-pointer flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div className="w-16! h-16! p-4! rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <KeyRound size={26} />
            </div>

            {/* Header */}
            <h2 className="text-2xl font-normal text-primary text-center mb-2 uppercase font-main">
              {t("Reset Password")}
            </h2>
            <p className="text-sm text-text/70 text-center font-poppins font-light leading-relaxed mb-8">
              {step === 1
                ? t(
                    "Enter your email address to receive a password reset verification code.",
                  )
                : t(
                    "Enter the reset code sent to your email along with your new password.",
                  )}
            </p>

            {step === 1 ? (
              /* Step 1: Send Request */
              <form onSubmit={handleSendRequest} className="w-full space-y-6">
                <div className="space-y-2">
                  <label className="text-primary font-poppins font-medium text-xs ml-1 flex items-center gap-1.5 uppercase tracking-wider">
                    <Mail size={14} />
                    {t("Email Address")}
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={requestMutation.isPending}
                  className="w-full h-12 rounded-2xl text-base font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  {requestMutation.isPending
                    ? t("Sending...")
                    : t("Send Reset Code")}
                </Button>
              </form>
            ) : (
              /* Step 2: Verify & Update Password */
              <form onSubmit={handleResetPassword} className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="text-primary font-poppins font-medium text-sm ml-1 block uppercase tracking-wider">
                    {t("Reset Code")}
                  </label>
                  <Input
                    type="text"
                    maxLength={6}
                    value={code}
                    onChange={(e) =>
                      setCode(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    placeholder="123456"
                    className="rounded-2xl font-poppins border-primary focus-visible:ring-primary/30 h-12 bg-white/50 text-center text-xl font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-primary font-poppins font-medium text-sm ml-1 flex items-center gap-1.5 uppercase tracking-wider">
                    <Lock size={14} />
                    {t("New Password")}
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="rounded-2xl border-primary focus-visible:ring-primary/30 h-12 bg-white font-poppins"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-primary font-poppins font-medium text-sm ml-1 flex items-center gap-1.5 uppercase tracking-wider">
                    <Lock size={14} />
                    {t("Confirm New Password")}
                  </label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="rounded-2xl border-primary focus-visible:ring-primary/30 h-12 bg-white font-poppins"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={
                    verifyCodeForgetMutation.isPending ||
                    updatePasswordMutation.isPending
                  }
                  className="w-full h-12 rounded-2xl text-base font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform mt-4"
                >
                  {verifyCodeForgetMutation.isPending ||
                  updatePasswordMutation.isPending
                    ? t("Resetting Password...")
                    : t("Reset Password")}
                </Button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs text-primary/70 font-poppins font-medium hover:underline mt-2 block"
                >
                  {t("Back to Step 1")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
