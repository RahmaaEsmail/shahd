"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import BookingBanner from '@/components/pages/Booking/BookingBanner/BookingBanner';
import BookingAppointement from '@/components/pages/Booking/BookingAppointement/BookingAppointement';

const services = [
  {
    id:1,
    active_img:"/images/Booking/streamline-ultimate_hair-skin-bold.svg",
    inactive_img:"/images/Booking/1.svg",
    title:"Hair Transplant Consultation"
  },
  {
    id:2,
    inactive_img:"/images/Booking/healthicons_stomach.svg",
    active_img:"/images/Booking/4.svg",
    title:"Weight Management Program"
  },
  {
    id:3,
    inactive_img:"/images/Booking/ic_sharp-face-4.svg",
    active_img:"/images/Booking/3.svg",
    title:"Facial Aesthetic Treatment"
  },
  {
    id:4,
    inactive_img:"/images/Booking/Group.svg",
    active_img:"/images/Booking/5.svg",
    title:"PRP Therapy"
  },
  {
    id:5,
    inactive_img:"/images/Booking/streamline-ultimate_work-from-home-laptop-meeting-bold.svg",
    active_img:"/images/Booking/2.svg",
    title:"Online Consultation"
  }
];




export default function BookingPage() {
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