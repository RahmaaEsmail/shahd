"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "react-i18next";

export default function SignupPage() {
  const { t } = useTranslation();
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
    backgroundImage: `url("/SHAHD-IMAGE/Untitled design.png")`
  }}
>
  {/* <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" /> */}
</div>

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
            <img src="/SHAHD-IMAGE/6 (1).webp" className="aspect-auto p-3 rounded-full  border-primary" />
          </motion.div>

          {/* Header */}
          <div className="text-center mb-10">
            <motion.h1
              variants={itemVariants}
              className="text-primary font-main text-4xl mb-2 uppercase"
            >
              {t('Start Your Journey')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-text/60 font-poppins text-sm"
            >
              {t('Sign up to unlock personalized aesthetic treatments')}
            </motion.p>
          </div>

          {/* Form */}
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <motion.div variants={itemVariants} className="space-y-2 md:col-span-1">
              <label className="text-primary font-poppins font-medium text-sm ml-1">{t('Full Name')}</label>
              <Input
                type="text"
                placeholder={t('Jane Doe')}
                className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 md:col-span-1">
              <label className="text-primary font-poppins font-medium text-sm ml-1">{t('Email Address')}</label>
              <Input
                type="email"
                placeholder="jane@example.com"
                className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2 md:col-span-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">{t('phone Number')}</label>
              <Input
                type="phone"
                placeholder="+20 112 123 4567"
                className="rounded-2xl font-poppins border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">{t('Password')}</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">{t('Confirm Password')}</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 md:col-span-2">
              <Button
                className="w-full h-14 rounded-2xl text-lg font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                {t('Create Account')}
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-text/60 font-poppins text-sm">
              {t('Already have an account?')}{" "}
              <Link href="/login" className="text-primary font-bold hover:underline decoration-primary/30">
                {t('Sign In')}
              </Link>
            </p>
          </motion.div>

        </div>
      </motion.div>     
    </div>
  );
}
