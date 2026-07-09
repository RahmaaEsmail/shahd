"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { MapPin, ShoppingBag, Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useCart } from "@/hooks/cart/useCart";
import { useCheckout } from "@/hooks/checkout/useCheckout";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import Loading from "@/app/loading";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const paymentMethods = [
  { id: "card", label: "Credit / Debit Card" },
  { id: "cash", label: "Cash on Delivery" },
];

export default function CheckoutClient() {
  const { t } = useTranslation();
  const router = useRouter();
  const user = useCurrentUser();
  const { data: cartData, isLoading: isLoadingCart } = useCart(user?.user_id);
  const { mutate: checkout, isPending: isCheckingOut } = useCheckout();

  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", notes: "" });
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: prev.name || user?.name || "",
        phone: prev.phone || user?.phone || "",
      }));
    }
  }, [user]);

  const items = Array.isArray(cartData?.data)
    ? cartData.data
    : cartData?.data?.items || [];

  const subtotal = items.reduce(
    (sum, item) => sum + (Number(item?.price) || 0) * (Number(item?.quantity) || 1),
    0,
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address || !form.city) {
      Swal.fire({
        icon: "error",
        title: t("Error"),
        text: t("Please fill in all required fields"),
        confirmButtonColor: "#DDB2B5",
      });
      return;
    }

    checkout(
      {
        user_id: user.user_id,
        name: form.name,
        phone: form.phone,
        address: form.address,
        city: form.city,
        notes: form.notes,
        payment_method: paymentMethod,
        items: items.map((item) => ({
          product_id: item?.product_id ?? item?.id,
          quantity: Number(item?.quantity) || 1,
        })),
        total: subtotal,
      },
      {
        onSuccess: (res) => {
          if (res?.status === "success") {
            Swal.fire({
              icon: "success",
              title: t("Order Placed!"),
              text: res?.message || t("Your order has been placed successfully."),
              confirmButtonColor: "#DDB2B5",
            }).then(() => router.push("/profile/orders"));
          } else {
            Swal.fire({
              icon: "error",
              title: t("Checkout Failed"),
              text: res?.message || t("Something went wrong, please try again."),
              confirmButtonColor: "#DDB2B5",
            });
          }
        },
        onError: (error) => {
          Swal.fire({
            icon: "error",
            title: t("Checkout Failed"),
            text:
              error?.response?.data?.message ||
              t("Something went wrong, please try again."),
            confirmButtonColor: "#DDB2B5",
          });
        },
      },
    );
  };

  if (user === undefined || (user && isLoadingCart)) {
    return <Loading />;
  }

  if (!user) {
    return <Loading />;
  }

  if (items.length === 0) {
    return (
      <div className="main-container px-4 py-24 flex flex-col items-center text-center gap-4 min-h-[60vh] justify-center">
        <div className="w-16 h-16 rounded-full bg-[#F9F4F4] flex items-center justify-center">
          <ShoppingBag className="text-primary" size={28} />
        </div>
        <h2 className="text-2xl font-normal text-secondary uppercase">
          {t("Your cart is empty")}
        </h2>
        <p className="text-[#6A6A6A] font-poppins max-w-md">
          {t("Add items to your cart before checking out.")}
        </p>
        <Link
          href="/store"
          className="mt-2 px-8 py-3 rounded-full text-white font-poppins bg-linear-to-r from-[#DDB2B5] to-[#EFD4CE]"
        >
          {t("explore the services")}
        </Link>
      </div>
    );
  }

  return (
    <div className="main-container px-4 py-30 sm:py-34">
      <Breadcrumb
        items={[
          { label: t("Home"), href: "/" },
          { label: t("My Cart"), href: "/cart" },
          { label: t("Checkout") },
        ]}
      />

      <motion.h1
        {...fadeIn}
        className="text-2xl sm:text-3xl font-normal text-secondary uppercase mt-6 mb-8 leading-tight"
      >
        {t("Checkout")}
      </motion.h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping & Payment */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="rounded-[25px] p-5 shadow-md bg-white border border-gray-50"
          >
            <div className="flex items-center gap-2 mb-4 text-[#6A6A6A]">
              <MapPin size={20} />
              <h3 className="text-lg font-medium font-poppins">
                {t("Shipping Details")}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-poppins text-[#6A6A6A]">
                  {t("Full Name")}
                </label>
                <Input name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-poppins text-[#6A6A6A]">
                  {t("Phone Number")}
                </label>
                <Input name="phone" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-sm font-poppins text-[#6A6A6A]">
                  {t("Address")}
                </label>
                <Input name="address" value={form.address} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-poppins text-[#6A6A6A]">
                  {t("City")}
                </label>
                <Input name="city" value={form.city} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-sm font-poppins text-[#6A6A6A]">
                  {t("Notes")} ({t("optional")})
                </label>
                <Input name="notes" value={form.notes} onChange={handleChange} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="rounded-[25px] p-5 shadow-md bg-white border border-gray-50"
          >
            <div className="flex items-center gap-2 mb-4 text-[#6A6A6A]">
              <Truck size={20} />
              <h3 className="text-lg font-medium font-poppins">
                {t("Payment Method")}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  type="button"
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`rounded-full py-2.5 px-4 border font-poppins text-sm transition-colors ${
                    paymentMethod === method.id
                      ? "bg-primary! text-white border-primary"
                      : "bg-white text-[#6A6A6A] border-[#DDB2B5]"
                  }`}
                >
                  {t(method.label)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Order Summary */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="h-fit rounded-[25px] p-5 shadow-md bg-white border border-gray-50 flex flex-col gap-4 font-poppins"
        >
          <h3 className="text-lg font-medium text-[#6A6A6A] border-b-2 border-primary pb-3">
            {t("Order Summary")}
          </h3>

          <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-1">
            {items.map((item, idx) => {
              const name = item?.product_name || item?.name || item?.title || t("Product");
              const quantity = Number(item?.quantity) || 1;
              const price = Number(item?.price) || 0;
              return (
                <div
                  key={item?.cart_id ?? item?.id ?? idx}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-[#414141] truncate max-w-[60%]">
                    {name} <span className="text-[#6A6A6A]">x{quantity}</span>
                  </span>
                  <span className="font-semibold text-primary">
                    {(price * quantity).toFixed(2)} {t("S.R")}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-[#DADADA] uppercase">
            <span className="text-md font-bold text-primary">{t("Total")}</span>
            <span className="text-md font-semibold text-[#414141]">
              {subtotal.toFixed(2)} {t("S.R")}
            </span>
          </div>

          <Button
            type="submit"
            disabled={isCheckingOut}
            className="w-full h-12 rounded-full text-base font-poppins font-medium"
          >
            {isCheckingOut ? t("Placing Order...") : t("Place Order")}
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
