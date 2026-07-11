"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { 
  ShoppingBag, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Loader2, 
  Coins 
} from "lucide-react";
import { useUserProfileOverview } from "@/hooks/profile/useProfile";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import Link from "next/link";

export default function OverviewPanel() {
  const { t } = useTranslation();
  const user = useCurrentUser();
  const { data: overviewRes, isLoading } = useUserProfileOverview(user?.user_id);

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center w-full">
        <Loader2 className="animate-spin text-primary" size={36} />
      </div>
    );
  }

  const data = overviewRes?.data || {};
  const orders = data.orders || { total: 0, total_spent: 0, recent: [] };
  const bookings = data.bookings || { total: 0, upcoming: 0, recent: [] };
  const summary = data.summary || { active_orders: 0, active_bookings: 0 };
  const profile = data.user || {};

  const stats = [
    {
      label: t("Total Spent"),
      value: `${orders.total_spent || 0} ${t("S.R")}`,
      icon: Coins,
      color: "bg-[#FDF8F5] border-[#F5E8E6] text-[#A68688]",
    },
    {
      label: t("Total Orders"),
      value: orders.total || 0,
      icon: ShoppingBag,
      color: "bg-[#F9F4F4] border-[#EFD4CE] text-[#A68688]",
    },
    {
      label: t("Total Bookings"),
      value: bookings.total || 0,
      icon: Calendar,
      color: "bg-[#FDF8F5] border-[#F5E8E6] text-[#A68688]",
    },
    {
      label: t("Active Bookings"),
      value: summary.active_bookings || 0,
      icon: Clock,
      color: "bg-[#F9F4F4] border-[#EFD4CE] text-[#A68688]",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome & Member Details */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl border border-primary/15 bg-linear-to-r from-[#FDF8F5] to-[#F5E8E6]">
        <div>
          <h2 className="font-main text-primary text-2xl uppercase">
            {t("Hello")}, {profile.name || user?.name || t("User")}!
          </h2>
          <p className="font-poppins text-sm text-[#6A6A6A] mt-1">
            {t("Welcome to your dashboard. Manage your orders and clinic consultations easily.")}
          </p>
        </div>
        {profile.member_since && (
          <div className="text-left md:text-right shrink-0">
            <p className="text-xs text-[#6A6A6A] font-poppins">{t("Member Since")}</p>
            <p className="font-poppins font-semibold text-primary text-sm mt-0.5">
              {profile.member_since.split(" ")[0]}
            </p>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${stat.color} flex flex-col justify-between h-28 shadow-xs`}
            >
              <div className="flex justify-between items-start">
                <span className="font-poppins text-xs font-medium text-text/60 truncate">{stat.label}</span>
                <span className="p-1.5 rounded-lg bg-white border border-primary/10">
                  <Icon size={16} />
                </span>
              </div>
              <p className="font-poppins text-2xl font-bold text-text mt-2">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Orders and Bookings Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="p-6 rounded-3xl border border-primary/15 bg-white shadow-xs min-w-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-main text-primary uppercase text-lg">{t("Recent Orders")}</h3>
            <Link href="/profile/orders" className="text-primary hover:underline text-xs flex items-center gap-0.5 font-poppins">
              {t("View All")} <ArrowUpRight size={14} />
            </Link>
          </div>
          {orders.recent && orders.recent.length > 0 ? (
            <div className="space-y-3">
              {orders.recent.slice(0, 3).map((order) => (
                <div key={order.id} className="flex justify-between items-center p-3 rounded-xl border border-primary/10 hover:bg-[#FDF8F5]/30 transition-colors">
                  <div>
                    <p className="font-poppins font-medium text-sm text-text">#{order.id}</p>
                    <p className="font-poppins text-xs text-text/50 mt-0.5">{order.created_at.split(" ")[0]}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-poppins text-sm font-semibold text-primary">{order.total_price} {t("S.R")}</p>
                    <p className="font-poppins text-xxs uppercase text-text/60 mt-0.5">{t(order.status)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text/50 font-poppins py-4 text-center">{t("No recent orders.")}</p>
          )}
        </div>

        {/* Recent Bookings */}
        <div className="p-6 rounded-3xl border border-primary/15 bg-white shadow-xs min-w-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-main text-primary uppercase text-lg">{t("Recent Bookings")}</h3>
            <Link href="/profile/bookings" className="text-primary hover:underline text-xs flex items-center gap-0.5 font-poppins">
              {t("View All")} <ArrowUpRight size={14} />
            </Link>
          </div>
          {bookings.recent && bookings.recent.length > 0 ? (
            <div className="space-y-3">
              {bookings.recent.slice(0, 3).map((b) => (
                <div key={b.id} className="flex justify-between items-center p-3 rounded-xl border border-primary/10 hover:bg-[#FDF8F5]/30 transition-colors">
                  <div className="min-w-0 flex-1 pr-2">
                    <p className="font-poppins font-medium text-sm text-text truncate">
                      {b.service_title_en || b.service || t("Session")}
                    </p>
                    <p className="font-poppins text-xs text-text/50 mt-0.5">
                      {b.booking_date} @ {b.booking_time_12h}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-poppins text-xxs uppercase px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary">
                      {t(b.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text/50 font-poppins py-4 text-center">{t("No recent bookings.")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
