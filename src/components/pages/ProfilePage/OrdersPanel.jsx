"use client";
import { useTranslation } from "react-i18next";
import { Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EmptyState from "./EmptyState";

const ORDERS = [
  { id: "10241", date: "Jul 05, 2026", status: "processing", items: 3, total: 480 },
  { id: "10234", date: "Jun 28, 2026", status: "shipped", items: 1, total: 150 },
  { id: "10221", date: "Jun 12, 2026", status: "delivered", items: 2, total: 310 },
  { id: "10198", date: "May 30, 2026", status: "cancelled", items: 1, total: 95 },
];

const STATUS_STYLES = {
  processing: "bg-amber-50 text-amber-600 border-amber-200",
  shipped: "bg-blue-50 text-blue-600 border-blue-200",
  delivered: "bg-green-50 text-green-600 border-green-200",
  cancelled: "bg-red-50 text-red-500 border-red-200",
};

const STATUS_LABELS = {
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export default function OrdersPanel() {
  const { t } = useTranslation();

  if (ORDERS.length === 0) {
    return (
      <EmptyState
        icon={Package}
        title={t("No orders yet")}
        description={t("Looks like you haven't placed any orders. Start exploring our store.")}
        actionLabel={t("Browse Store")}
        actionHref="/store"
      />
    );
  }

  return (
    <div className="space-y-4">
      {ORDERS.map((order) => (
        <div
          key={order.id}
          className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-primary/15 bg-white px-5 py-4"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Package size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-poppins font-semibold text-text">
                {t("Order")} #{order.id}
              </p>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                  STATUS_STYLES[order.status]
                )}
              >
                {t(STATUS_LABELS[order.status])}
              </span>
            </div>
            <p className="font-poppins text-sm text-text/60 mt-1">
              {order.date} · {order.items} {t("items")}
            </p>
          </div>
          <div className="flex items-center gap-4 sm:shrink-0">
            <p className="font-poppins font-semibold text-primary">
              {order.total} {t("S.R")}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-primary text-primary hover:bg-primary/10 gap-1"
            >
              {t("View Details")} <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
