"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser, logoutUser } from "@/hooks/auth/useCurrentUser";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const { t } = useTranslation();
  const router = useRouter();
  const user = useCurrentUser();

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user, router]);

  if (user === undefined) return null;

  const handleLogout = () => {
    logoutUser();
    Swal.fire({
      icon: "success",
      title: t("Success"),
      text: t("Logout"),
      timer: 1200,
      showConfirmButton: false,
    }).then(() => {
      router.push("/login");
    });
  };

  if (!user) return null;

  const initials = (user.name || "")
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";

  return (
    <div className="min-h-screen relative flex items-center justify-center py-16 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-no-repeat"
        style={{
          backgroundImage: `url("/SHAHD-IMAGE/Untitled design.png")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mt-20 z-10 w-full max-w-md"
      >
        <div className="bg-white backdrop-blur-xl border-[2px] border-primary p-8 md:p-10 rounded-[40px] shadow-[0_20px_50px_rgba(221,178,181,0.15)] flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-6 border-2 border-primary">
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-main">
              {initials}
            </AvatarFallback>
          </Avatar>

          <h1 className="text-primary font-main text-3xl mb-1 uppercase text-center">
            {user.name || t("My Profile")}
          </h1>

          <div className="w-full mt-8 space-y-4">
            {user.email && (
              <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-white/50 px-4 py-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="font-poppins text-sm text-text/80 break-all">
                  {user.email}
                </span>
              </div>
            )}

            {user.phone && (
              <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-white/50 px-4 py-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="font-poppins text-sm text-text/80">
                  {user.phone}
                </span>
              </div>
            )}

            {!user.email && !user.phone && (
              <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-white/50 px-4 py-3">
                <User size={18} className="text-primary shrink-0" />
                <span className="font-poppins text-sm text-text/80">
                  {t("My Profile")}
                </span>
              </div>
            )}
          </div>

          <Button
            onClick={handleLogout}
            className="w-full h-14 mt-10 rounded-2xl text-lg font-poppins font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            {t("Logout")}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
