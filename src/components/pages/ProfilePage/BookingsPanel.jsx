"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { CalendarCheck, Clock, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EmptyState from "./EmptyState";
import { useUserBookings } from "@/hooks/profile/useProfile";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const STATUS_STYLES = {
  pending: "bg-amber-50 text-amber-600 border-amber-200",
  accepted: "bg-green-50 text-green-600 border-green-200",
  rejected: "bg-red-50 text-red-500 border-red-200",
  cancelled: "bg-red-50 text-red-500 border-red-200",
  completed: "bg-blue-50 text-blue-600 border-blue-200",
};

const STATUS_LABELS = {
  pending: "Pending",
  accepted: "Accepted",
  rejected: "Rejected",
  cancelled: "Cancelled",
  completed: "Completed",
};

export default function BookingsPanel() {
  const { t, i18n } = useTranslation();
  const user = useCurrentUser();
  const { data: bookingsData, isLoading } = useUserBookings(user?.user_id);

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center w-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const rawBookings = Array.isArray(bookingsData)
    ? bookingsData
    : Array.isArray(bookingsData?.data)
    ? bookingsData.data
    : bookingsData?.data?.bookings || [];

  if (rawBookings.length === 0) {
    return (
      <EmptyState
        icon={CalendarCheck}
        title={t("No bookings yet")}
        description={t("Book a session and it will show up here.")}
        actionLabel={t("Book Now")}
        actionHref="/booking"
      />
    );
  }

  return (
    <div className="space-y-4">
      {rawBookings.map((b) => {
        const id = b.id || b.booking_id;
        const serviceName =
          i18n.language === "ar"
            ? b.service_title_ar
            : i18n.language === "sk"
            ? b.service_title_sk
            : b.service_title_en || b.service || t("Session");
        const date = b.booking_date || b.date || "";
        const time = b.booking_time_12h || b.booking_time_24h || b.time || "";
        const location = b.location || "Online";
        const status = b.status || "pending";

        return (
          <div key={id} className="rounded-2xl border border-primary/15 bg-white px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <p className="font-poppins font-semibold text-text">{serviceName}</p>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase",
                  STATUS_STYLES[status] || "bg-gray-50 text-gray-600 border-gray-200"
                )}
              >
                {t(STATUS_LABELS[status] || status)}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-poppins text-sm text-text/60">
              <span className="flex items-center gap-1.5">
                <CalendarCheck size={15} className="text-primary" />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-primary" />
                {time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-primary" />
                {location}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
