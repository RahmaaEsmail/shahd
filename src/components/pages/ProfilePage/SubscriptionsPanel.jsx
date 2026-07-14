"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { CreditCard, Loader2, Calendar, Progress, Play, CheckCircle2, UserCheck, AlertTriangle } from "lucide-react";
import EmptyState from "./EmptyState";
import { useUserSubscriptions } from "@/hooks/profile/useProfile";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Swal from "sweetalert2";

const STATUS_STYLES = {
  pending: "bg-amber-50 text-amber-600 border-amber-200",
  active: "bg-green-50 text-green-600 border-green-200",
  completed: "bg-blue-50 text-blue-600 border-blue-200",
  expired: "bg-red-50 text-red-500 border-red-200",
};

const PAYMENT_STATUS_STYLES = {
  paid: "bg-green-100 text-green-700",
  unpaid: "bg-red-100 text-red-700",
  refunded: "bg-gray-100 text-gray-700",
};

export default function SubscriptionsPanel() {
  const { t, i18n } = useTranslation();
  const user = useCurrentUser();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  const { data: subscriptionData, isLoading } = useUserSubscriptions(user?.user_id || user?.id);

  const handlePay = (sub) => {
    const planName =
      lang === "ar"
        ? sub.plan_name_ar || sub.plan_name_en
        : lang === "sk"
        ? sub.plan_name_sk || sub.plan_name_en
        : sub.plan_name_en;

    Swal.fire({
      title: t("Pay for Subscription"),
      text: `${t("Are you sure you want to pay")} €${sub.amount_paid} ${t("for")} ${planName}?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: t("Proceed to Payment"),
      cancelButtonText: t("Cancel"),
      confirmButtonColor: "#DDB2B5",
      cancelButtonColor: "#7189a2",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: t("Processing Payment"),
          html: t("Please wait while we process your payment..."),
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: t("Payment Completed"),
            text: t("Your payment has been successfully recorded. The clinic will review and activate your subscription shortly."),
            confirmButtonColor: "#DDB2B5",
          });
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center w-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const subscriptions = Array.isArray(subscriptionData?.data?.subscriptions)
    ? subscriptionData.data.subscriptions
    : [];

  if (subscriptions.length === 0) {
    return (
      <EmptyState
        icon={CreditCard}
        title={t("No subscriptions yet")}
        description={t("Subscribe to a package to see your subscription plans here.")}
        actionLabel={t("View Packages")}
        actionHref="/packages"
      />
    );
  }

  return (
    <div className="space-y-6 w-full">
      <div className="grid grid-cols-1 gap-6">
        {subscriptions.map((sub) => {
          // Resolve plan name & description based on active language
          const planName =
            lang === "ar"
              ? sub.plan_name_ar || sub.plan_name_en
              : lang === "sk"
              ? sub.plan_name_sk || sub.plan_name_en
              : sub.plan_name_en;

          const planDesc =
            lang === "ar"
              ? sub.plan_description_ar || sub.plan_description_en
              : lang === "sk"
              ? sub.plan_description_sk || sub.plan_description_en
              : sub.plan_description_en;

          // Sessions usage percentage
          const totalSessions = Number(sub.sessions_total) || 0;
          const usedSessions = Number(sub.sessions_used) || 0;
          const remainingSessions = Number(sub.sessions_remaining) || 0;
          const sessionPercent = totalSessions > 0 ? (usedSessions / totalSessions) * 100 : 0;

          // Resolve image
          const planImg =
            sub.plan_image_url ||
            (sub.plan_image
              ? sub.plan_image.startsWith("http")
                ? sub.plan_image
                : `https://drshahdawad.com/ShahdAwad/uploads/pricing/${sub.plan_image}`
              : null) ||
            "/SHAHD-IMAGE/Services/151784f3bce476935cf0d7f6c8fd712a8563af4a.webp";

          return (
            <div
              key={sub.id}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              {/* Plan Thumbnail */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                <Image
                  src={planImg}
                  fill
                  className="object-cover"
                  alt={planName}
                />
              </div>

              {/* Sub Details */}
              <div className="flex-1 min-w-0 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg md:text-xl font-poppins font-semibold text-text truncate">
                    {planName}
                  </h3>

                  {/* Status badge */}
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-poppins font-medium border capitalize",
                      STATUS_STYLES[sub.status] || "bg-gray-50 text-gray-600 border-gray-200"
                    )}
                  >
                    {t(sub.status || "pending")}
                  </span>

                  {/* Payment Status badge */}
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-poppins font-medium capitalize",
                      PAYMENT_STATUS_STYLES[sub.payment_status] || "bg-gray-100 text-gray-700"
                    )}
                  >
                    {t(sub.payment_status || "unpaid")}
                  </span>
                </div>

                {planDesc && (
                  <p className="text-sm text-gray-500 font-poppins line-clamp-2">
                    {planDesc}
                  </p>
                )}

                {/* Date Grid info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-poppins text-gray-500 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#af7f73]" />
                    <span>
                      {t("Start Date")}: <strong className="text-text">{sub.start_date}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#af7f73]" />
                    <span>
                      {t("End Date")}: <strong className="text-text">{sub.end_date}</strong>
                    </span>
                  </div>
                  {sub.days_remaining > 0 && (
                    <div className="flex items-center gap-2">
                      <Clock className="text-[#af7f73]" size={14} />
                      <span>
                        {t("Days Remaining")}: <strong className="text-text">{sub.days_remaining}</strong>
                      </span>
                    </div>
                  )}
                </div>

                {/* Sessions progress bar */}
                {totalSessions > 0 && (
                  <div className="space-y-1.5 pt-2 max-w-md">
                    <div className="flex items-center justify-between text-xs font-poppins">
                      <span className="text-gray-500 font-medium">
                        {t("Sessions Usage")}
                      </span>
                      <span className="text-text font-semibold">
                        {usedSessions} / {totalSessions} {t("Used")} ({remainingSessions} {t("Remaining")})
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{ width: `${sessionPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Price Tag Info */}
              <div className="flex flex-col items-start md:items-end flex-shrink-0 md:pl-4 gap-2">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-2xl font-poppins font-bold text-primary">
                    €{sub.amount_paid}
                  </span>
                  <span className="text-xs text-gray-400 font-poppins uppercase tracking-wider">
                    {t(sub.plan_billing_cycle || "monthly")}
                  </span>
                </div>
                {sub.payment_status === "unpaid" && (
                  <button
                    onClick={() => handlePay(sub)}
                    className="px-5 py-2 bg-[#DDB2B5] text-white hover:bg-[#c9a0a3] rounded-full text-xs font-poppins font-medium transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    {t("Pay Now")}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
