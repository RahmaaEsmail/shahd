"use client";
import { useTranslation } from "react-i18next";
import { CalendarCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EmptyState from "./EmptyState";

const BOOKINGS = [
  {
    id: "B-2210",
    service: "Hair Therapy Session",
    date: "Jul 14, 2026",
    time: "3:00 PM",
    location: "Riyadh Clinic",
    status: "upcoming",
  },
  {
    id: "B-2187",
    service: "Weight Management Consultation",
    date: "Jun 20, 2026",
    time: "11:00 AM",
    location: "Riyadh Clinic",
    status: "completed",
  },
  {
    id: "B-2150",
    service: "Aesthetic Gynecology Follow-up",
    date: "May 30, 2026",
    time: "1:30 PM",
    location: "Jeddah Branch",
    status: "cancelled",
  },
];

const STATUS_STYLES = {
  upcoming: "bg-blue-50 text-blue-600 border-blue-200",
  completed: "bg-green-50 text-green-600 border-green-200",
  cancelled: "bg-red-50 text-red-500 border-red-200",
};

const STATUS_LABELS = { upcoming: "Upcoming", completed: "Completed", cancelled: "Cancelled" };

export default function BookingsPanel() {
  const { t } = useTranslation();

  if (BOOKINGS.length === 0) {
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
      {BOOKINGS.map((b) => (
        <div key={b.id} className="rounded-2xl border border-primary/15 bg-white px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <p className="font-poppins font-semibold text-text">{t(b.service)}</p>
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                STATUS_STYLES[b.status]
              )}
            >
              {t(STATUS_LABELS[b.status])}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-poppins text-sm text-text/60">
            <span className="flex items-center gap-1.5">
              <CalendarCheck size={15} className="text-primary" />
              {b.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-primary" />
              {b.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-primary" />
              {b.location}
            </span>
          </div>
          {b.status === "upcoming" && (
            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                {t("Reschedule")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-destructive text-destructive hover:bg-destructive/10"
              >
                {t("Cancel Booking")}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
