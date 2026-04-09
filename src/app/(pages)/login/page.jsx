"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
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
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with decorative elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #fff9f7 0%, #ffffff 50%, #f3e5e6 100%)"
        }}
      >
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[40px] shadow-[0_20px_50px_rgba(221,178,181,0.15)] flex flex-col items-center">
          
          {/* Logo/Brand */}
          <motion.div variants={itemVariants} className="mb-8">
             <h2 className="text-secondary font-poppins font-bold text-2xl tracking-[0.2em] uppercase">
              Shahd
            </h2>
          </motion.div>

          {/* Header */}
          <div className="text-center mb-10">
            <motion.h1 
              variants={itemVariants}
              className="text-primary font-main text-5xl md:text-6xl mb-2 uppercase"
            >
              Welcome Back
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-text/60 font-poppins text-sm"
            >
              Enter your credentials to access your account
            </motion.p>
          </div>

          {/* Form */}
          <form className="w-full space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-primary font-poppins font-medium text-sm ml-1">Email Address</label>
              <Input 
                type="email" 
                placeholder="name@example.com"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-primary font-poppins font-medium text-sm ml-1">Password</label>
                <Link href="#" className="text-secondary font-poppins text-xs hover:underline decoration-secondary/30">
                  Forgot?
                </Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••"
                className="rounded-2xl border-primary/20 focus-visible:ring-primary/30 h-12 bg-white/50"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button 
                className="w-full h-14 rounded-2xl text-lg font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Sign In
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-text/60 font-poppins text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-bold hover:underline decoration-primary/30">
                Create Account
              </Link>
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Decorative stars/spots like in the banner */}
      <div className="absolute top-1/4 left-10 opacity-20 pointer-events-none animate-pulse">
        <Image src="/images/Services/Frame 1000005622.png" width={100} height={100} alt="" />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-20 pointer-events-none animate-pulse delay-700">
        <Image src="/images/Services/Frame 1000005621.png" width={150} height={150} alt="" />
      </div>
    </div>
  );
}
