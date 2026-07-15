"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import BookingBanner from "@/components/pages/Booking/BookingBanner/BookingBanner";
import BookingAppointement from "@/components/pages/Booking/BookingAppointement/BookingAppointement";
import {
  useBookingBanner,
  useBookingDates,
  useBookingServices,
  useBookingSlots,
  useCreateBooking,
} from "../../../hooks/booking/useBooking";
import Loading from "../../loading";
import { config } from "../../../api/config";

export default function BookingClient() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedServiceId = searchParams.get("service_id");

  const [selectedService, setSelectedService] = useState(null);
  // selectedDate holds the id of the chosen entry from booking_dates
  const [selectedDate, setSelectedDate] = useState(null);
  // selectedTime holds the id of the chosen slot from booking_slots
  const [selectedTime, setSelectedTime] = useState(null);

  const { data: bookin_banner, isLoading: is_loading_banner } =
    useBookingBanner();
  const { data: booking_services, isLoading: is_loading_services } =
    useBookingServices();
  const { data: booking_dates, isLoading: is_loading_dates } =
    useBookingDates();
  const { data: booking_slots, isLoading: is_loading_slots } =
    useBookingSlots(selectedDate);
  const { mutateAsync: createBooking, isPending: is_booking } =
    useCreateBooking();

  useEffect(() => {
    if (selectedService || !booking_services?.data?.length) return;

    const matchedService = preselectedServiceId
      ? booking_services.data.find(
          (service) => String(service.id) === String(preselectedServiceId),
        )
      : null;

    setSelectedService((matchedService || booking_services.data[0]).id);
  }, [booking_services, selectedService, preselectedServiceId]);

  if (is_loading_banner || is_loading_services || is_loading_dates) {
    return <Loading />;
  }

  // Reusable helper alert config to keep code DRY (Don't Repeat Yourself)
  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: t("Done"),
      confirmButtonColor: "#DDB2B5",
      background: "#ffffff",
      color: "#414141",
      customClass: {
        popup: "rounded-[25px] font-poppins",
        confirmButton: "font-poppins",
      },
    });
    setSelectedTime(null);
  };

  const handleRedirectToCheckout = (gateway) => {
    if (!gateway?.checkout_url) return;
    const form = document.createElement("form");
    form.method = (gateway.method || "POST").toUpperCase();
    form.action = gateway.checkout_url;

    const params = gateway.required_params || {};
    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = params[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  const handleBookNow = async () => {
    // 1. Safely extract local storage string
    const userDataStr = localStorage.getItem(config.localStorageUserData);

    // 2. Direct guest user check before parsing
    if (!userDataStr) {
      router.push("/login");
      return;
    }

    const userData = JSON.parse(userDataStr);

    try {
      await createBooking(
        {
          service_id: selectedService,
          slot_id: selectedTime,
          user_id: userData?.user_id,
          location: "online",
        },
        {
          onSuccess: (res) => {
            if (res?.status === "success") {
              showAlert(
                t("Appointment Booked!"),
                res?.message ||
                  t("Your appointment has been booked successfully."),
                "success",
              );
            } else {
              const gateway = res?.payment_gateway || res?.data?.payment_gateway;
              if (res?.code === "SUBSCRIPTION_REQUIRED" && gateway?.checkout_url) {
                Swal.fire({
                  icon: "warning",
                  title: t("Subscription Required"),
                  text: res?.message || t("You don't have an active subscription that covers this service."),
                  showCancelButton: true,
                  confirmButtonText: t("Proceed to Payment"),
                  cancelButtonText: t("Cancel"),
                  confirmButtonColor: "#DDB2B5",
                  cancelButtonColor: "#7189a2",
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleRedirectToCheckout(gateway);
                  }
                });
              } else {
                showAlert(
                  t("Booking Failed"),
                  res?.message || t("Something went wrong, please try again."),
                  "error",
                );
              }
            }
          },
          onError: (error) => {
            const resData = error?.response?.data;
            const gateway = resData?.payment_gateway || resData?.data?.payment_gateway;
            if (resData?.code === "SUBSCRIPTION_REQUIRED" && gateway?.checkout_url) {
              Swal.fire({
                icon: "warning",
                title: t("Subscription Required"),
                text: resData?.message || t("You don't have an active subscription that covers this service."),
                showCancelButton: true,
                confirmButtonText: t("Proceed to Payment"),
                cancelButtonText: t("Cancel"),
                confirmButtonColor: "#DDB2B5",
                cancelButtonColor: "#7189a2",
              }).then((result) => {
                if (result.isConfirmed) {
                  handleRedirectToCheckout(gateway);
                }
              });
            } else {
              showAlert(
                t("Booking Failed"),
                error?.response?.data?.message ||
                  t("Something went wrong, please try again."),
                "error",
              );
            }
          },
        },
      );
    } catch (error) {
      const resData = error?.response?.data;
      const gateway = resData?.payment_gateway || resData?.data?.payment_gateway;
      if (resData?.code === "SUBSCRIPTION_REQUIRED" && gateway?.checkout_url) {
        Swal.fire({
          icon: "warning",
          title: t("Subscription Required"),
          text: resData?.message || t("You don't have an active subscription that covers this service."),
          showCancelButton: true,
          confirmButtonText: t("Proceed to Payment"),
          cancelButtonText: t("Cancel"),
          confirmButtonColor: "#DDB2B5",
          cancelButtonColor: "#7189a2",
        }).then((result) => {
          if (result.isConfirmed) {
            handleRedirectToCheckout(gateway);
          }
        });
      } else {
        showAlert(
          t("Booking Failed"),
          error?.response?.data?.message ||
            t("Something went wrong, please try again."),
          "error",
        );
      }
    }
  };

  return (
    <div className="">
      <BookingBanner data={bookin_banner?.data} />
      <BookingAppointement
        services={booking_services?.data}
        slots={booking_slots?.data}
        isLoadingSlots={is_loading_slots}
        dates={booking_dates?.data}
        selectedTime={selectedTime}
        setSelectedDate={setSelectedDate}
        setSelectedService={setSelectedService}
        setSelectedTime={setSelectedTime}
        selectedService={selectedService}
        selectedDate={selectedDate}
        onBookNow={handleBookNow}
        isBooking={is_booking}
      />
    </div>
  );
}
