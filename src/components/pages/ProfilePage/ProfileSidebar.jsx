"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { User, ShoppingBag, Heart, CalendarCheck, Bell, Settings, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/profile", label: "Overview", icon: User },
  { href: "/profile/orders", label: "My Orders", icon: ShoppingBag },
  { href: "/profile/wishlist", label: "My Wishlist", icon: Heart },
  { href: "/profile/bookings", label: "My Bookings", icon: CalendarCheck },
  { href: "/profile/notification", label: "Notifications", icon: Bell },
  { href: "/profile/subscriptions", label: "My Subscriptions", icon: CreditCard },
  { href: "/profile/settings", label: "Settings", icon: Settings },
];

export default function ProfileSidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = href === "/profile" ? pathname === "/profile" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className="relative shrink-0 lg:shrink lg:w-full">
            {isActive && (
              <motion.span
                layoutId="profileNavActive"
                className="absolute inset-0 bg-primary rounded-2xl"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 flex items-center gap-3 whitespace-nowrap rounded-2xl px-4 py-3 font-poppins text-sm font-medium transition-colors duration-200",
                isActive ? "text-white" : "text-text/70 hover:bg-primary/10 hover:text-primary"
              )}
            >
              <Icon size={18} className="shrink-0" />
              {t(label)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
