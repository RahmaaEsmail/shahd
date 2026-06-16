"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import BookingBanner from '@/components/pages/Booking/BookingBanner/BookingBanner';
import BookingAppointement from '@/components/pages/Booking/BookingAppointement/BookingAppointement';
import { useTranslation } from 'react-i18next';

const services = [
  {
    id:1,
    active_img:"/SHAHD-IMAGE/Booking/streamline-ultimate_hair-skin-bold.webp",
    inactive_img:"/SHAHD-IMAGE/Booking/1.webp",
    title: "Hair Transplant Consultation"
  },
  {
    id:2,
    inactive_img:"/SHAHD-IMAGE/Booking/healthicons_stomach.webp",
    active_img:"/SHAHD-IMAGE/Booking/4.webp",
    title:"Weight Management Program"
  },
  {
    id:3,
    inactive_img:"/SHAHD-IMAGE/Booking/ic_sharp-face-4.webp",
    active_img:"/SHAHD-IMAGE/Booking/3.webp",
    title:"Facial Aesthetic Treatment"
  },
  {
    id:4,
    inactive_img:"/SHAHD-IMAGE/Booking/Group.webp",
    active_img:"/SHAHD-IMAGE/Booking/5.webp",
    title:"PRP Therapy"
  },
  {
    id:5,
    inactive_img:"/SHAHD-IMAGE/Booking/streamline-ultimate_work-from-home-laptop-meeting-bold.webp",
    active_img:"/SHAHD-IMAGE/Booking/2.webp",
    title:"Online Consultation"
  }
];




export default function BookingPage() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(services[0]?.id);
  const [selectedDate, setSelectedDate] = useState("6");
  const [selectedTime, setSelectedTime] = useState("7:00 PM");



  return (
    <div className="">
      <BookingBanner />
      <BookingAppointement  services={services} selectedTime={selectedTime} setSelectedDate={setSelectedDate} setSelectedService={setSelectedService} setSelectedTime={setSelectedTime} selectedService={selectedService} selectedDate={selectedDate} />
    </div>
  );
}