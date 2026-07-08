"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useVerifiedCode, useCheckEmail } from "@/hooks/auth/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

export default function VerifyEmailModal({ isOpen, email, onClose, onSuccess }) {
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  
  const verifyMutation = useVerifiedCode();
  const resendMutation = useCheckEmail();

  const handleVerify = (e) => {
    e.preventDefault();

    if (!code || code.length < 4) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Please enter a valid verification code"),
      });
      return;
    }

    verifyMutation.mutate(
      { email, code },
      {
        onSuccess: (data) => {
          if (data.status === "success") {
            Swal.fire({
              icon: "success",
              title: t("Success"),
              text: data.message || t("Email verified successfully!"),
              timer: 2000,
              showConfirmButton: false,
            }).then(() => {
              if (onSuccess) onSuccess();
            });
          } else {
            Swal.fire({
              icon: "error",
              title: t("Error"),
              text: data.message || t("Verification failed. Please check the code."),
            });
          }
        },
        onError: (err) => {
          Swal.fire({
            icon: "error",
            title: t("Error"),
            text: err?.response?.data?.message || err?.message || t("Something went wrong"),
          });
        },
      }
    );
  };

  const handleResend = () => {
    resendMutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          if (data.status === "success" || data.status === 200) {
            Swal.fire({
              icon: "success",
              title: t("Success"),
              text: t("Verification code resent to your email."),
              timer: 1500,
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: t("Error"),
              text: data.message || t("Resend failed. Please try again later."),
            });
          }
        },
        onError: (err) => {
          Swal.fire({
            icon: "error",
            title: t("Error"),
            text: err?.response?.data?.message || err?.message || t("Something went wrong"),
          });
        },
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999999999! flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto">
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative bg-white/95 backdrop-blur-2xl border border-primary/30 rounded-[32px] max-w-md w-full overflow-hidden shadow-2xl p-8 sm:p-10 flex flex-col items-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-primary/5 hover:bg-primary text-[#4D3E3F] hover:text-white p-2 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-105 cursor-pointer flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <ShieldCheck size={36} />
            </div>

            {/* Header */}
            <h2 className="text-2xl font-normal text-primary text-center mb-2 uppercase font-main">
              {t("Verify Your Email")}
            </h2>
            <p className="text-sm text-text/70 text-center font-poppins font-light leading-relaxed mb-8">
              {t("We have sent a verification code to")}{" "}
              <strong className="text-primary font-medium">{email}</strong>.{" "}
              {t("Please enter it below to confirm your account.")}
            </p>

            {/* Form */}
            <form onSubmit={handleVerify} className="w-full space-y-6">
              <div className="space-y-2">
                <label className="text-primary font-poppins font-medium text-xs ml-1 block text-center uppercase tracking-wider">
                  {t("Verification Code")}
                </label>
                <Input
                  type="text"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="123456"
                  className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-14 bg-white/50 text-center text-2xl font-bold tracking-[8px] placeholder:tracking-[2px]"
                />
              </div>

              <Button
                type="submit"
                disabled={verifyMutation.isPending}
                className="w-full h-12 rounded-2xl text-base font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                {verifyMutation.isPending ? t("Verifying...") : t("Verify Email")}
              </Button>
            </form>

            {/* Resend Actions */}
            <div className="mt-8 text-center">
              <p className="text-text/60 font-poppins text-xs">
                {t("Didn't receive the code?")}{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendMutation.isPending}
                  className="text-primary font-bold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resendMutation.isPending ? t("Resending...") : t("Resend Code")}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
