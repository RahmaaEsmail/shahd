"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useLogin, useCheckEmail } from "@/hooks/auth/useAuth";
import VerifyEmailModal from "@/components/shared/VerifyEmailModal";
import ResetPasswordModal from "@/components/shared/ResetPasswordModal";
import Swal from "sweetalert2";
import { config } from "@/api/config";
import { AUTH_CHANGE_EVENT } from "@/hooks/auth/useCurrentUser";

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const loginMutation = useLogin();

  const checkEmailMutation = useCheckEmail();
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [isResetOpen, setIsResetOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Please fill in all fields"),
      });
      return;
    }

    loginMutation.mutate(formData, {
      onSuccess: (data) => {
        if (data.status === "success") {
          const token = data?.token || data?.data?.token || data?.data;
          const user = data?.user || data?.data?.user || data?.data;

          localStorage.setItem(
            config.localStorageTokenName,
            typeof token === "string" ? token : "dummy-token",
          );
          localStorage.setItem(
            config.localStorageUserData,
            JSON.stringify(user),
          );
          window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));

          Swal.fire({
            icon: "success",
            title: t("Success"),
            text: t("Login successful!"),
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            router.push("/");
          });
        } else {
          const msg = data.message || "";
          if (
            msg.toLowerCase().includes("verify") ||
            msg.toLowerCase().includes("unverified") ||
            msg.toLowerCase().includes("activate") ||
            msg.toLowerCase().includes("activation")
          ) {
            setVerifyEmail(formData.email);
            checkEmailMutation.mutate({ email: formData.email });
            setIsVerifyOpen(true);
            Swal.fire({
              icon: "warning",
              title: t("Verification Required"),
              text: t(
                "Please verify your email before logging in. A code has been sent.",
              ),
              timer: 3000,
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: t("Error"),
              text: data.message || t("Login failed"),
            });
          }
        }
      },
      onError: (error) => {
        Swal.fire({
          icon: "error",
          title: t("Error"),
          text:
            error?.response?.data?.message ||
            error?.message ||
            t("Something went wrong"),
        });
      },
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6  lg:px-8 overflow-hidden">
      {/* Background with decorative elements */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-no-repeat"
        style={{
          backgroundImage: `url("/SHAHD-IMAGE/Untitled design.png")`,
        }}
      />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mt-20 z-10 w-full max-w-md"
      >
        <div className="bg-white backdrop-blur-xl border-[2px] border-primary  p-8 md:p-10 rounded-[40px] shadow-[0_20px_50px_rgba(221,178,181,0.15)] flex flex-col items-center">
          {/* Logo/Brand */}
          <motion.div variants={itemVariants} className="mb-8">
            <img
              src="/SHAHD-IMAGE/6 (1).webp"
              className="aspect-auto p-3 rounded-full  border-primary"
            />
          </motion.div>

          {/* Header */}
          <div className="text-center mb-10">
            <motion.h1
              variants={itemVariants}
              className="text-primary font-main text-4xl  mb-2 uppercase"
            >
              {t("Welcome Back")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-text/60 font-poppins text-sm"
            >
              {t("Enter your credentials to access your account")}
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">
                {t("Email Address")}
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("name@example.com")}
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-primary font-poppins font-medium text-sm ml-1">
                  {t("Password")}
                </label>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsResetOpen(true);
                  }}
                  className="text-secondary font-poppins text-xs hover:underline decoration-secondary/30"
                >
                  {t("Forgot?")}
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 font-poppins text-primary h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full h-14 rounded-2xl text-lg font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                {loginMutation.isPending ? t("Signing In...") : t("Sign In")}
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-text/60 font-poppins text-sm">
              {t("Don't have an account?")}{" "}
              <Link
                href="/signup"
                className="text-primary font-bold hover:underline decoration-primary/30"
              >
                {t("Create Account")}
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <VerifyEmailModal
        isOpen={isVerifyOpen}
        email={verifyEmail}
        onClose={() => setIsVerifyOpen(false)}
        onSuccess={() => {
          setIsVerifyOpen(false);
          Swal.fire({
            icon: "success",
            title: t("Success"),
            text: t("Email verified successfully! You can now log in."),
          });
        }}
      />

      <ResetPasswordModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onSuccess={() => {
          setIsResetOpen(false);
        }}
      />
    </div>
  );
}
