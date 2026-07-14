// "use client";
// import React, { useState } from 'react'
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Check } from 'lucide-react';
// import { cn } from '../../../../lib/utils';

// export default function PlanCard({ shouldScale, plan  , setHoveredCard , index }) {
//   return (
//     <motion.div
//       key={plan.id}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false }}
//       transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
//       onHoverStart={() => setHoveredCard(plan.id)}
//       onHoverEnd={() => setHoveredCard(null)}
//       style={shouldScale ? { boxShadow: "0px 0px 150px 10px #F7A5A5" } : {}}
//       className={cn(
//         'bg-white p-8 border rounded-[30px] border-[#FEF2F2] shadow-2xl relative transition-all duration-300',
//         shouldScale && 'scale-100 md:scale-105 ring-2 ring-[#DDB2B5] shadow-[#DDB2B5]/20',
//         !shouldScale && 'scale-100'
//       )}
//     >
//       {/* Plan Name */}
//       <div className="flex gap-4 items-center mb-4">
//         <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
//           <Image src={plan.img} fill alt={plan.name} className="object-contain" />
//         </div>
//         <h3 className='text-text text-xl md:text-2xl lg:text-[32px] font-normal leading-tight'>{plan.name}</h3>
//       </div>

//       {/* Price */}
//       <div className='mb-6 flex items-baseline gap-2'>
//         <span className='text-[#2D2D2D] text-3xl md:text-4xl lg:text-[40px] font-poppins font-semibold'>{plan.price}</span>
//         <span className='text-[#9A9A9A] text-lg md:text-2xl font-normal font-poppins uppercase tracking-wider'>USD</span>
//       </div>

//       {/* Description */}
//       <p className='text-[#9A9A9A] text-sm md:text-base font-poppins lowercase mb-6 leading-relaxed'>
//         {plan.description}
//       </p>

//       {/* Features List */}
//       <ul className='space-y-4 mb-8 flex-1'>
//         {plan.features.map((feature, idx) => (
//           <li key={idx} className='flex items-start gap-3'>
//             <div className='bg-[#DDB2B5] w-5 h-5 md:w-6 md:h-6 rounded-full flex shrink-0 justify-center items-center mt-0.5'>
//               <Check color="#fff" size={14} className='font-bold' />
//             </div>
//             <span className='text-[#2D2D2D] text-sm md:text-base font-normal font-poppins leading-tight'>{feature}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Get Started Button */}
//       <button className={cn(
//         'w-full text-xl md:text-2xl lg:text-[32px] text-white py-4 rounded-full font-medium transition-all duration-300 uppercase tracking-wide',
//         shouldScale
//           ? 'bg-[#DDB2B5] hover:bg-[#c9a0a3] shadow-lg shadow-[#DDB2B5]/30'
//           : 'bg-white text-primary hover:bg-primary hover:text-white border border-primary'
//       )}>
//         GET STARTED
//       </button>
//     </motion.div>
//   )
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { apiInstance } from "@/api/apiInstance";
import { userEndPoints } from "@/api/userEndPoints";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useRouter } from "next/navigation";
import { config } from "@/api/config";

export default function PlanCard({ shouldScale, plan, setHoveredCard, index }) {
  const { t } = useTranslation();
  const router = useRouter();

  const handleSubscribe = async () => {
    const user = localStorage.getItem(config.localStorageUserData)
      ? JSON.parse(localStorage.getItem(config.localStorageUserData))
      : {};
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: t("Login Required"),
        text: t("Please login first to subscribe to a plan."),
        showCancelButton: true,
        confirmButtonText: t("Login"),
        cancelButtonText: t("Cancel"),
        confirmButtonColor: "#DDB2B5",
        cancelButtonColor: "#7189a2",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
      return;
    }

    Swal.fire({
      title: t("Confirm Subscription"),
      text: `${t("Are you sure you want to subscribe to")} ${plan.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: t("Yes, Subscribe"),
      cancelButtonText: t("Cancel"),
      confirmButtonColor: "#DDB2B5",
      cancelButtonColor: "#7189a2",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.showLoading();
        try {
          const payload = {
            user_id: user?.user_id || user?.id || 1,
            plan_id: plan.id,
          };
          const response = await apiInstance.post(
            userEndPoints.subscribe_plan,
            payload,
          );

          Swal.fire({
            icon: "success",
            title: t("Subscribed Successfully"),
            text:
              response.data?.message ||
              t("You have successfully subscribed to the plan."),
            confirmButtonColor: "#DDB2B5",
          });
        } catch (error) {
          console.error("Subscription error:", error);
          Swal.fire({
            icon: "error",
            title: t("Subscription Failed"),
            text:
              error?.response?.data?.message ||
              error?.message ||
              t("An error occurred during subscription."),
            confirmButtonColor: "#7189a2",
          });
        }
      }
    });
  };

  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      onHoverStart={() => setHoveredCard(plan.id)}
      onHoverEnd={() => setHoveredCard(null)}
      style={shouldScale ? { boxShadow: "0px 0px 150px 10px #F7A5A5" } : {}}
      className={cn(
        // Reduced padding on mobile (p-5) to save space, keeping p-8 for desktop
        "bg-white p-5  border rounded-[24px] md:rounded-[30px] border-[#FEF2F2] shadow-2xl relative transition-all duration-300 flex flex-col justify-between h-full",
        shouldScale &&
          "scale-100 md:scale-105 ring-2 ring-[#DDB2B5] shadow-[#DDB2B5]/20 z-10",
        !shouldScale && "scale-100",
      )}
    >
      {/* Plan Name */}
      <div className="flex gap-3  items-center mb-3">
        <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
          <Image
            src={plan.img}
            fill
            alt={plan.name}
            className="object-contain"
          />
        </div>
        <h3 className="text-text text-lg md:text-2xl  font-normal leading-tight">
          {plan.name}
        </h3>
        {plan.popular && (
          <div className="bg-secondary text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full">
            {t("Popular")}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-baseline gap-1.5 md:gap-2">
          <span className="text-[#2D2D2D] text-2xl md:text-4xl font-poppins font-semibold">
            {plan.price}
          </span>
          <span className="text-[#9A9A9A] text-sm md:text-xl font-normal font-poppins uppercase tracking-wider">
            {plan.currency}
          </span>
        </div>
        {plan.num_of_sessions > 0 && (
          <div className="bg-[#DDB2B5]/20 text-[#af7f73] text-xs md:text-sm px-3 py-1 rounded-full font-poppins font-medium">
            {plan.num_of_sessions} {t("sessions")}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-[#9A9A9A] text-xs md:text-base font-poppins lowercase mb-3 leading-relaxed">
        {plan.description}
      </p>

      {/* Features List */}
      <ul className="space-y-2  mb-4 flex-1">
        {plan?.services_data?.map((feature, idx) => (
          <li key={feature?.id} className="flex items-start gap-2.5 md:gap-3">
            <div className="bg-[#DDB2B5] w-4 h-4 md:w-6 md:h-6 rounded-full flex shrink-0 justify-center items-center mt-0.5">
              <Check color="#fff" size={10} className="md:hidden" />
              <Check
                color="#fff"
                size={14}
                className="hidden md:block font-bold"
              />
            </div>
            <span className="text-[#2D2D2D] text-xs md:text-base font-normal font-poppins leading-tight">
              {feature?.title}
            </span>
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <button
        onClick={handleSubscribe}
        className={cn(
          // Adjusted padding and font size for mobile
          "w-full text-base md:text-2xl lg:text-[26px] text-white py-3 rounded-full font-medium transition-all duration-300 uppercase tracking-wide",
          shouldScale
            ? "bg-[#DDB2B5] hover:bg-[#c9a0a3] shadow-lg shadow-[#DDB2B5]/30"
            : "bg-white text-primary hover:bg-primary hover:text-white border border-primary",
        )}
      >
        {t("Choose Plan")}
      </button>
    </motion.div>
  );
}
