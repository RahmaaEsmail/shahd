"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bell, Package, CalendarCheck, Tag, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EmptyState from "./EmptyState";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "order",
    title: "Order shipped",
    message: "Your order #10234 has been shipped and is on its way.",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    type: "booking",
    title: "Booking confirmed",
    message: "Your appointment on Jul 14 at 3:00 PM is confirmed.",
    time: "5h ago",
    unread: true,
  },
  {
    id: 3,
    type: "promo",
    title: "New offer for you",
    message: "Enjoy 20% off on all skincare products this week.",
    time: "1d ago",
    unread: false,
  },
  {
    id: 4,
    type: "order",
    title: "Order delivered",
    message: "Your order #10221 was delivered. Enjoy!",
    time: "3d ago",
    unread: false,
  },
];

const ICONS = { order: Package, booking: CalendarCheck, promo: Tag };

export default function NotificationsPanel() {
  const { t } = useTranslation();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));

  if (notifications.length === 0) {
    return (
      <EmptyState
        icon={BellOff}
        title={t("No notifications yet")}
        description={t("We'll let you know when something new arrives.")}
      />
    );
  }

  return (
    <div>
      {unreadCount > 0 && (
        <div className="flex justify-end mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={markAllRead}
            className="rounded-full border-primary text-primary hover:bg-primary/10"
          >
            {t("Mark all as read")}
          </Button>
        </div>
      )}
      <div className="space-y-3">
        {notifications.map((n) => {
          const Icon = ICONS[n.type] || Bell;
          return (
            <div
              key={n.id}
              className={cn(
                "flex items-start gap-4 rounded-2xl border px-4 py-4 transition-colors",
                n.unread ? "border-primary/30 bg-primary/5" : "border-primary/10 bg-white"
              )}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-poppins font-semibold text-text truncate">{t(n.title)}</p>
                  <span className="font-poppins text-xs text-text/50 shrink-0">{n.time}</span>
                </div>
                <p className="font-poppins text-sm text-text/70 mt-1">{t(n.message)}</p>
              </div>
              {n.unread && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
