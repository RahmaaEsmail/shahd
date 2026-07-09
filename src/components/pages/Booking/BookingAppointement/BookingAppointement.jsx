"use client";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export default function BookingAppointement({
  services,
  slots,
  dates,
  selectedService,
  setSelectedDate,
  selectedDate,
  selectedTime,
  setSelectedTime,
  setSelectedService,
  onBookNow,
  isBooking,
}) {
  const { t } = useTranslation();

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

  const servicesList = services || [];
  const datesList = dates || [];
  const slotsList = slots || [];

  const serviceStripRef = useRef(null);
  const serviceButtonRefs = useRef({});
  const hasCenteredInitialService = useRef(false);
  const scrollServices = (direction) => {
    serviceStripRef.current?.scrollBy({
      left: direction * 160,
      behavior: "smooth",
    });
  };

  // Center the pre-selected service (e.g. arriving from a service details
  // page) in the scroll strip once, on initial load only.
  useEffect(() => {
    if (hasCenteredInitialService.current || !selectedService) return;
    const button = serviceButtonRefs.current[selectedService];
    if (!button) return;

    button.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    hasCenteredInitialService.current = true;
  }, [selectedService, servicesList]);

  const dateStripRef = useRef(null);
  const scrollDates = (direction) => {
    dateStripRef.current?.scrollBy({
      left: direction * 140,
      behavior: "smooth",
    });
  };

  const handleDateSelect = (dateId) => {
    setSelectedDate(dateId);
    setSelectedTime(null);
  };

  const selectedDateItem = datesList.find((item) => item.id === selectedDate);
  const headerDate = selectedDateItem
    ? new Date(selectedDateItem.booking_date)
    : datesList[0]
      ? new Date(datesList[0].booking_date)
      : new Date();

  const selectedSlotItem = slotsList.find((slot) => slot.id === selectedTime);

  const isBookingReady = !!selectedService && !!selectedDate && !!selectedTime;

  const handleBookNowClick = () => {
    if (!isBookingReady || isBooking) return;
    onBookNow?.();
  };

  return (
    <motion.div initial="initial" animate="animate" className="w-full my-5">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <motion.h1
            {...fadeIn}
            className="text-2xl sm:text-3xl font-normal text-secondary uppercase mb-2 leading-tight"
          >
            {t("Book An Appointment")}
          </motion.h1>

          {/* Service Section */}
          <motion.div
            variants={fadeIn}
            className="mb-6 rounded-[25px] p-4 shadow-md bg-white border border-gray-50"
          >
            <h3 className="text-lg font-medium font-poppins mb-3 text-[#6A6A6A]">
              {t("Choose Service")}
            </h3>
            <div className="relative flex items-center">
              <button
                onClick={() => scrollServices(-1)}
                className="absolute left-0 z-10 p-1 bg-secondary rounded-full"
              >
                <ChevronLeft className="h-5 w-5 text-[#DDB2B5]" />
              </button>
              <div
                ref={serviceStripRef}
                className="flex flex-1 gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth px-7"
              >
                {servicesList.map((service) => (
                  <motion.button
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={service.id}
                    ref={(el) => {
                      serviceButtonRefs.current[service.id] = el;
                    }}
                    onClick={() => setSelectedService(service.id)}
                    className={`shrink-0 snap-start px-3 py-1.5 rounded-full border border-[#DDB2B5] transition-colors text-sm font-poppins flex items-center gap-2 whitespace-nowrap ${
                      selectedService === service.id
                        ? "bg-primary! text-white"
                        : "bg-white text-[#6A6A6A]"
                    }`}
                  >
                    {/* <img src={service?.image_url} className="w-4 h-4" alt="" /> */}
                    {service.title}
                  </motion.button>
                ))}
              </div>
              <button
                onClick={() => scrollServices(1)}
                className="absolute right-0 z-10 p-1 bg-secondary rounded-full"
              >
                <ChevronRight className="h-5 w-5 text-[#DDB2B5]" />
              </button>
            </div>
          </motion.div>

          {/* Date and Time Section */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            className="rounded-[25px] p-5 shadow-md bg-white border border-gray-50"
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#DADADA]">
              <h3 className="text-lg font-medium font-poppins text-[#6A6A6A]">
                {t("Choose Date And Time")}
              </h3>

              <div className="flex items-center gap-2 text-[#6A6A6A]">
                <CalendarDays className="h-5 w-5" />
                <span className="text-sm lg:text-base font-poppins font-medium whitespace-nowrap">
                  {monthNames[headerDate.getMonth()]} {headerDate.getFullYear()}
                </span>
              </div>
            </div>

            {/* Date Strip */}
            <div className="relative flex items-center mb-8">
              <button
                onClick={() => scrollDates(-1)}
                className="absolute left-0 z-10 p-1"
              >
                <ChevronLeft className="h-5 w-5 text-[#DDB2B5]" />
              </button>
              <div
                ref={dateStripRef}
                className="flex justify-start lg:justify-center flex-1 gap-3 overflow-x-auto no-scrollbar px-6 scroll-smooth"
              >
                {datesList.length === 0 ? (
                  <p className="text-sm text-[#6A6A6A] font-poppins py-2">
                    {t("No available dates")}
                  </p>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {datesList.map((item) => {
                      const dateObj = new Date(item.booking_date);
                      const isSelected = selectedDate === item.id;
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          key={item.id}
                          onClick={() => handleDateSelect(item.id)}
                          className={`flex flex-col font-poppins items-center justify-center min-w-[50px] cursor-pointer transition-all rounded-xl py-2 ${isSelected ? "bg-[#DDB2B5] text-white" : "text-[#6A6A6A]"}`}
                        >
                          <span className="text-[10px] uppercase font-bold">
                            {dayNames[dateObj.getDay()]}
                          </span>
                          <span className="text-xl font-semibold">
                            {dateObj.getDate()}
                          </span>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                )}
              </div>
              <button
                onClick={() => scrollDates(1)}
                className="absolute right-0 z-10 p-1"
              >
                <ChevronRight className="h-5 w-5 text-[#DDB2B5]" />
              </button>
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
              {!selectedDate ? (
                <p className="col-span-full text-sm text-[#6A6A6A] font-poppins">
                  {t("Select a date to see available times")}
                </p>
              ) : slotsList.length === 0 ? (
                <p className="col-span-full text-sm text-[#6A6A6A] font-poppins">
                  {t("No available times for this date")}
                </p>
              ) : (
                slotsList.map((slot) => (
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#fdf2f2" }}
                    whileTap={{ scale: 0.98 }}
                    key={slot.id}
                    onClick={() => setSelectedTime(slot.id)}
                    className={`py-2 rounded-full border border-[#DDB2B5] text-xs font-poppins transition-all ${
                      selectedTime === slot.id
                        ? "bg-[#DDB2B5]! text-white!"
                        : "bg-white text-[#6A6A6A]"
                    }`}
                  >
                    {slot.booking_time_12h}
                  </motion.button>
                ))
              )}
            </div>

            {/* Footer */}
            <motion.div
              layout
              className="bg-[#F9F4F4] rounded-xl p-3 flex flex-col md:flex-row items-center justify-between gap-3"
            >
              <p className="text-sm font-poppins font-semibold text-[#6A6A6A]">
                {selectedDateItem
                  ? `${new Date(selectedDateItem.booking_date).getDate()} ${monthNames[new Date(selectedDateItem.booking_date).getMonth()]} ${new Date(selectedDateItem.booking_date).getFullYear()}`
                  : t("Select Date")}{" "}
                / {selectedSlotItem?.booking_time_12h || t("Select Time")}
              </p>
              <motion.button
                onClick={handleBookNowClick}
                disabled={!isBookingReady || isBooking}
                whileHover={
                  isBookingReady && !isBooking
                    ? {
                        scale: 1.05,
                        boxShadow: "0px 10px 20px rgba(221, 178, 181, 0.4)",
                      }
                    : {}
                }
                whileTap={isBookingReady && !isBooking ? { scale: 0.95 } : {}}
                className={`w-full md:w-auto px-8 py-2.5 rounded-full font-medium text-sm uppercase transition-colors ${
                  isBookingReady && !isBooking
                    ? "bg-[#DDB2B5] text-white cursor-pointer"
                    : "bg-[#DDB2B5]/40 text-white cursor-not-allowed"
                }`}
              >
                {isBooking ? t("Booking...") : t("Book Now")}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="h-fit">
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="p-5 rounded-[25px] shadow-md bg-white border border-gray-50"
          >
            <h3 className="text-lg font-medium font-poppins mb-2 text-[#6A6A6A]">
              {t("About dr.shahd awad")}
            </h3>

            {/* INFINITE FLOATING IMAGE ANIMATION */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg"
            >
              <Image
                src="/SHAHD-IMAGE/Booking/image 23.webp"
                alt="Dr Shahd Awad"
                fill
                className="object-cover"
              />
            </motion.div>

            <p className="text-sm sm:text-base font-poppins font-normal text-[#414141] mb-3 leading-relaxed">
              {t("Booking Sidebar Desc")}
            </p>

            <h3 className="text-xl font-medium font-poppins mb-2 text-[#6A6A6A]">
              {t("Location")}
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-[220px] rounded-[30px] overflow-hidden border border-[#DADADA]"
            >
              <Image
                src="/SHAHD-IMAGE/Booking/a5d3d7e2272e5fea64d1a0495f2f4aa72abf6a43.webp"
                alt={t("Map Location")}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
