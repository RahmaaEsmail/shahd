"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ProfileSidebar from "./ProfileSidebar";
import { toast } from "sonner";

export default function ProfileShell({ title, children }) {
  const { t } = useTranslation();
  const router = useRouter();
  const user = useCurrentUser();

  useEffect(() => {
    if (user === null) {
      toast.error(t ? t("Please login first.") : "Please login first.");
      router.replace("/login");
    }
  }, [user, router, t]);

  if (!user) return null;

  const initials =
    (user.name || "")
      .trim()
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U";

  return (
    <div className="min-h-screen relative py-16 px-4 sm:px-6">
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
        className="relative z-10 mt-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6"
      >
        <div className="bg-white border-[2px] border-primary rounded-[32px] p-5 shadow-[0_20px_50px_rgba(221,178,181,0.15)] lg:h-fit lg:sticky lg:top-24">
          <div className="flex items-center gap-3 px-2 pb-4 mb-2 border-b border-primary/15">
            <Avatar className="h-12 w-12 border-2 border-primary shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary font-main text-lg">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="font-main text-primary uppercase text-sm leading-tight truncate">
                {user.name || t("My Profile")}
              </p>
              {user.email && (
                <p className="font-poppins text-xs text-text/60 truncate">{user.email}</p>
              )}
            </div>
          </div>
          <ProfileSidebar />
        </div>

        <div className="bg-white border-[2px] border-primary p-6 md:p-10 rounded-[40px] shadow-[0_20px_50px_rgba(221,178,181,0.15)] min-w-0">
          {title && (
            <h1 className="font-main text-primary uppercase text-2xl md:text-3xl mb-8">
              {t(title)}
            </h1>
          )}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
