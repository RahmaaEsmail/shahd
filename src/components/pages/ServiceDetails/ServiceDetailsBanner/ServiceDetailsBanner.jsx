"use client";
import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb } from "../../../shared/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Service" },
  { label: "Service Details" },
];

export default function ServiceDetailsBanner({ title, data }) {
  console.log("service banner details", data);
  const bgImg = React.useMemo(() => {
    const banner = data?.service_banner || data?.data?.service_banner || data;
    if (banner?.image_url) return banner.image_url;
    if (banner?.image) {
      if (banner.image.startsWith("http")) return banner.image;
      if (banner.image.startsWith("service_banner")) {
        return `https://drshahdawad.com/ShahdAwad/uploads/services/${banner.image}`;
      }
      return `https://drshahdawad.com/ShahdAwad/uploads/${banner.image}`;
    }
    return "/SHAHD-IMAGE/service-details/service details.webp";
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[90vh] flex justify-center items-center py-20 px-4"
      style={{
        background: `url('${bgImg}')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Subtle overlay animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="text-4xl  font-normal leading-[1.1] text-white mb-6 md:mb-8"
        >
          {data?.service_banner?.title ||
            data?.data?.service_banner?.title ||
            title}
        </motion.h1>

        {/* Breadcrumb animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
          }}
        >
          <Breadcrumb items={breadcrumbItems} />
        </motion.div>
      </div>
    </motion.div>
  );
}
