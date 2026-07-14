"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CalendarCheck, Clock, MapPin, Loader2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EmptyState from "./EmptyState";
import { useUserBookings } from "@/hooks/profile/useProfile";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useBookingDates, useBookingSlots } from "@/hooks/booking/useBooking";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

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

  // Postpone dialog states
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Available dates and slots
  const { data: datesData, isLoading: isLoadingDates } = useBookingDates();
  const { data: slotsData, isLoading: isLoadingSlots } = useBookingSlots(selectedDate);

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

  const monthNames = [
    t("January"),
    t("February"),
    t("March"),
    t("April"),
    t("May"),
    t("June"),
    t("July"),
    t("August"),
    t("September"),
    t("October"),
    t("November"),
    t("December"),
  ];

  const dayNames = [
    t("SUN"),
    t("MON"),
    t("TUE"),
    t("WED"),
    t("THU"),
    t("FRI"),
    t("SAT"),
  ];

  const handlePostponeClick = (booking) => {
    setSelectedBooking(booking);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const datesList = datesData?.data || [];
  const slotsList = slotsData?.data || [];
  const selectedDateItem = datesList.find((item) => item.id === selectedDate);
  const selectedSlotItem = slotsList.find((slot) => slot.id === selectedTime);

  const handleConfirmPostpone = () => {
    if (!selectedBooking || !selectedDate || !selectedTime) return;

    const dateItem = datesList.find((d) => d.id === selectedDate);
    const slotItem = slotsList.find((s) => s.id === selectedTime);

    if (!dateItem || !slotItem) return;

    const newDateStr = dateItem.booking_date;
    const newTimeStr = slotItem.booking_time_12h;

    const bookingId = selectedBooking.id || selectedBooking.booking_id;
    const serviceName =
      i18n.language === "ar"
        ? selectedBooking.service_title_ar
        : i18n.language === "sk"
        ? selectedBooking.service_title_sk
        : selectedBooking.service_title_en || selectedBooking.service || t("Session");

    const oldDate = selectedBooking.booking_date || selectedBooking.date || "";
    const oldTime = selectedBooking.booking_time_12h || selectedBooking.booking_time_24h || selectedBooking.time || "";

    const WHATSAPP_NUMBER = "201000000000";

    let text = "";
    if (i18n.language === "ar") {
      text = `مرحباً، أود تأجيل موعد الحجز الخاص بي.

تفاصيل الحجز الحالي:
- الخدمة: ${serviceName}
- التاريخ الحالي: ${oldDate}
- الوقت الحالي: ${oldTime}
- رقم الحجز: ${bookingId}

الموعد الجديد المطلوب:
- التاريخ: ${newDateStr}
- الوقت: ${newTimeStr}`;
    } else if (i18n.language === "sk") {
      text = `Dobrý deň, chcel(a) by som odložiť svoju rezerváciu.

Podrobnosti o aktuálnej rezervácii:
- Služba: ${serviceName}
- Aktuálny dátum: ${oldDate}
- Aktuálny čas: ${oldTime}
- ID rezervácie: ${bookingId}

Požadovaný nový termín:
- Dátum: ${newDateStr}
- Čas: ${newTimeStr}`;
    } else if (i18n.language === "de") {
      text = `Hallo, ich möchte meinen Termin verschieben.

Aktuelle Buchungsdetails:
- Dienstleistung: ${serviceName}
- Aktuelles Datum: ${oldDate}
- Aktuelle Uhrzeit: ${oldTime}
- Buchungs-ID: ${bookingId}

Gewünschter neuer Termin:
- Datum: ${newDateStr}
- Uhrzeit: ${newTimeStr}`;
    } else {
      text = `Hello, I would like to postpone my booking.

Current booking details:
- Service: ${serviceName}
- Current Date: ${oldDate}
- Current Time: ${oldTime}
- Booking ID: ${bookingId}

Requested new schedule:
- Date: ${newDateStr}
- Time: ${newTimeStr}`;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    handleCloseModal();
  };

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
            {(status === "pending" || status === "accepted") && (
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[#DDB2B5] text-primary hover:bg-primary/5 text-xs font-poppins font-medium cursor-pointer"
                  onClick={() => handlePostponeClick(b)}
                >
                  {t("Postpone Appointment")}
                </Button>
              </div>
            )}
          </div>
        );
      })}

      {/* Postpone Dialog */}
      <Dialog open={!!selectedBooking} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent className="max-w-md bg-white rounded-3xl p-6 font-poppins border border-[#DDB2B5]/20">
          <DialogHeader className="text-center sm:text-left mb-2">
            <DialogTitle className="text-xl font-semibold text-text">
              {t("Postpone Appointment")}
            </DialogTitle>
            <DialogDescription className="text-sm text-text/60 mt-1">
              {t("Select New Date & Time")}
            </DialogDescription>
          </DialogHeader>

          {/* Date Strip / Selection */}
          <div className="space-y-4 py-2">
            <div>
              <label className="text-sm font-medium text-[#6A6A6A] block mb-2">
                {t("Select Date")}
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
                {isLoadingDates ? (
                  <div className="flex justify-center w-full py-2">
                    <Loader2 className="animate-spin text-primary" size={20} />
                  </div>
                ) : datesList.length === 0 ? (
                  <p className="text-sm text-[#6A6A6A] font-poppins py-2">
                    {t("No available dates")}
                  </p>
                ) : (
                  datesList.map((item) => {
                    const dateObj = new Date(item.booking_date);
                    const isSelected = selectedDate === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSelectedDate(item.id);
                          setSelectedTime(null);
                        }}
                        type="button"
                        className={cn(
                          "flex flex-col font-poppins items-center justify-center min-w-[60px] py-2 px-3 rounded-xl border transition-all cursor-pointer",
                          isSelected
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-[#6A6A6A] border-[#DDB2B5]/30 hover:border-[#DDB2B5]"
                        )}
                      >
                        <span className="text-[10px] uppercase font-bold">
                          {dayNames[dateObj.getDay()]}
                        </span>
                        <span className="text-lg font-semibold">
                          {dateObj.getDate()}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="text-sm font-medium text-[#6A6A6A] block mb-2">
                {t("Select Time")}
              </label>
              <div className="grid grid-cols-3 gap-2 max-h-[150px] overflow-y-auto pr-1">
                {!selectedDate ? (
                  <p className="col-span-full text-xs text-[#6A6A6A] font-poppins text-center py-2">
                    {t("Select a date to see available times")}
                  </p>
                ) : isLoadingSlots ? (
                  <div className="col-span-full flex justify-center py-2">
                    <Loader2 className="animate-spin text-primary" size={18} />
                  </div>
                ) : slotsList.length === 0 ? (
                  <p className="col-span-full text-xs text-[#6A6A6A] font-poppins text-center py-2">
                    {t("No available times for this date")}
                  </p>
                ) : (
                  slotsList.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTime(slot.id)}
                      type="button"
                      className={cn(
                        "py-2 rounded-full border text-xs font-poppins transition-all cursor-pointer",
                        selectedTime === slot.id
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-[#6A6A6A] border-[#DDB2B5]/30 hover:border-[#DDB2B5] hover:bg-[#fdf2f2]"
                      )}
                    >
                      {slot.booking_time_12h}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Selection Summary */}
            {selectedDate && (
              <div className="bg-[#F9F4F4] rounded-xl p-3 flex items-center justify-center gap-2 text-center">
                <CalendarDays size={16} className="text-primary" />
                <p className="text-sm font-poppins font-semibold text-[#6A6A6A]">
                  {selectedDateItem
                    ? `${new Date(selectedDateItem.booking_date).getDate()} ${monthNames[new Date(selectedDateItem.booking_date).getMonth()]} ${new Date(selectedDateItem.booking_date).getFullYear()}`
                    : t("Select Date")}{" "}
                  / {selectedSlotItem?.booking_time_12h || t("Select Time")}
                </p>
              </div>
            )}
          </div>

          <DialogFooter className="flex flex-row justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={handleCloseModal}
              className="rounded-full border-gray-300 font-poppins text-xs font-medium cursor-pointer"
            >
              {t("Cancel")}
            </Button>
            <Button
              onClick={handleConfirmPostpone}
              disabled={!selectedDate || !selectedTime}
              className={cn(
                "rounded-full font-poppins text-xs font-medium cursor-pointer text-white",
                selectedDate && selectedTime
                  ? "bg-primary hover:bg-primary/95"
                  : "bg-primary/40 cursor-not-allowed"
              )}
            >
              {t("Confirm Postponement")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
