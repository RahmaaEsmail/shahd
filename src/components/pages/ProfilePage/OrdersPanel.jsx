"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Package, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EmptyState from "./EmptyState";
import { useUserOrders } from "@/hooks/profile/useProfile";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const STATUS_STYLES = {
  pending: "bg-amber-50 text-amber-600 border-amber-200",
  in_progress: "bg-blue-50 text-blue-600 border-blue-200",
  confirmed: "bg-purple-50 text-purple-600 border-purple-200",
  completed: "bg-green-50 text-green-600 border-green-200",
  cancelled: "bg-red-50 text-red-500 border-red-200",
};

const STATUS_LABELS = {
  pending: "Pending",
  in_progress: "In Progress",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
};

export default function OrdersPanel() {
  const { t, i18n } = useTranslation();
  const user = useCurrentUser();
  const { data: ordersData, isLoading } = useUserOrders(user?.user_id);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrder = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center w-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const rawOrders = Array.isArray(ordersData)
    ? ordersData
    : Array.isArray(ordersData?.data)
      ? ordersData.data
      : ordersData?.data?.orders || [];

  if (rawOrders.length === 0) {
    return (
      <EmptyState
        icon={Package}
        title={t("No orders yet")}
        description={t(
          "Looks like you haven't placed any orders. Start exploring our store.",
        )}
        actionLabel={t("Browse Store")}
        actionHref="/store"
      />
    );
  }

  return (
    <div className="space-y-4">
      {rawOrders.map((order) => {
        const orderId = order?.id || order?.order_id;
        const total = order?.total_price || order?.total || 0;
        const itemsCount = order?.items_count || order?.items?.length || 0;
        const date = order?.created_at ? order.created_at.split(" ")[0] : "";
        const status = order?.status || "pending";

        return (
          <div
            key={orderId}
            className="rounded-[24px] border border-primary/15 bg-white overflow-hidden shadow-[0_4px_20px_rgba(221,178,181,0.05)] transition-all duration-300"
          >
            {/* Header/Summary Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Package size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-poppins font-semibold text-text">
                    {t("Order")} #{orderId}
                  </p>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-xs font-medium font-poppins",
                      STATUS_STYLES[status] ||
                        "bg-gray-50 text-gray-600 border-gray-200",
                    )}
                  >
                    {t(STATUS_LABELS[status] || status)}
                  </span>
                </div>
                <p className="font-poppins text-sm text-text/60 mt-1">
                  {date} · {itemsCount} {t("items")}
                </p>
              </div>
              <div className="flex items-center gap-4 sm:shrink-0 justify-between sm:justify-end">
                <p className="font-poppins font-semibold text-primary">
                  {total} {t("S.R")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleOrder(orderId)}
                  className="rounded-full border-primary text-primary hover:bg-primary/10 gap-1 cursor-pointer"
                >
                  {expandedOrderId === orderId
                    ? t("Hide Details")
                    : t("View Details")}{" "}
                  <ChevronRight
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      expandedOrderId === orderId && "rotate-90",
                    )}
                  />
                </Button>
              </div>
            </div>

            {/* Detailed Items Dropdown */}
            {expandedOrderId === orderId && (
              <div className="bg-[#FDF8F5] border-t border-primary/10 px-5 py-4 space-y-3">
                <p className="font-poppins font-semibold text-primary text-xs uppercase tracking-wider mb-2">
                  {t("Order Items")}
                </p>
                <div className="divide-y divide-primary/10">
                  {order.items && order.items.length > 0 ? (
                    order.items.map((item) => {
                      const itemTitle =
                        item.product?.[`title_${lang}`] ||
                        item.product?.title_en ||
                        item.product?.title_ar ||
                        t("Product");
                      const itemImage =
                        item.product?.main_image ||
                        "/SHAHD-IMAGE/Cart/Rectangle 43.webp";
                      const itemSize = item.unit || "";

                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
                        >
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-primary/10 shrink-0">
                            <img
                              src={itemImage}
                              alt={itemTitle}
                              className="object-contain w-full h-full p-1"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-poppins text-sm font-medium text-text truncate">
                              {itemTitle}
                            </p>
                            <p className="font-poppins text-xs text-text/60 mt-0.5">
                              {itemSize && `${t("Size")}: ${itemSize} · `}
                              {t("Quantity")}: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-poppins text-sm font-semibold text-primary">
                              {item.total_price ||
                                item.unit_price * item.quantity}{" "}
                              {t("S.R")}
                            </p>
                            <p className="font-poppins text-xs text-text/40">
                              {item.unit_price} {t("S.R")} / {t("unit")}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-text/40 py-2">
                      {t("No items found in this order.")}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
