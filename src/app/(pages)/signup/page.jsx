"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useRegister, useCheckEmail } from "@/hooks/auth/useAuth";
import Swal from "sweetalert2";
import VerifyEmailModal from "@/components/shared/VerifyEmailModal";
import Toast from "@/components/shared/Toast";

export default function SignupPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const registerMutation = useRegister();
  const checkEmailMutation = useCheckEmail();

  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Please fill in all fields"),
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Passwords do not match"),
      });
      return;
    }

    const { name, email, phone, password } = formData;

    checkEmailMutation.mutate(
      { email },
      {
        onSuccess: (checkData) => {
          if (checkData.status === "success") {
            setToastMessage(
              checkData.message || t("Verification code sent to your email."),
            );
            setShowToast(true);
            setVerifyEmail(email);
            setIsVerifyOpen(true);
          } else {
            Swal.fire({
              icon: "error",
              title: t("Error"),
              text: checkData.message || t("Email check failed"),
            });
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
      },
    );
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
    <div className="min-h-screen relative flex items-center justify-center py-16 px-4 sm:px-6 overflow-hidden">
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
        className="relative z-10 mt-20 w-full max-w-lg"
      >
        <div className="bg-white backdrop-blur-xl border-[2px] border-primary p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(221,178,181,0.15)] flex flex-col items-center">
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
              className="text-primary font-main text-4xl mb-2 uppercase"
            >
              {t("Start Your Journey")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-text/60 font-poppins text-sm"
            >
              {t("Sign up to unlock personalized aesthetic treatments")}
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">
                {t("Full Name")}
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("Jane Doe")}
                className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">
                {t("Email Address")}
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">
                {t("phone Number")}
              </label>
              <Input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0120398243"
                className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">
                {t("Password")}
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">
                {t("Confirm Password")}
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 md:col-span-2">
              <Button
                type="submit"
                disabled={
                  registerMutation.isPending || checkEmailMutation.isPending
                }
                className="w-full h-14 rounded-2xl text-lg font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                {checkEmailMutation.isPending
                  ? t("Checking Email...")
                  : registerMutation.isPending
                    ? t("Creating Account...")
                    : t("Create Account")}
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-text/60 font-poppins text-sm">
              {t("Already have an account?")}{" "}
              <Link
                href="/login"
                className="text-primary font-bold hover:underline decoration-primary/30"
              >
                {t("Sign In")}
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
          const { name, email, phone, password } = formData;
          registerMutation.mutate(
            { name, email, phone, password },
            {
              onSuccess: (regData) => {
                if (regData.status === "success") {
                  Swal.fire({
                    icon: "success",
                    title: t("Success"),
                    text: t("Registration successful! Please sign in."),
                    timer: 2000,
                    showConfirmButton: false,
                  }).then(() => {
                    setIsVerifyOpen(false);
                    router.push("/login");
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: t("Error"),
                    text: regData.message || t("Registration failed"),
                  });
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
            },
          );
        }}
      />

      <Toast
        show={showToast}
        message={toastMessage}
        type="success"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
