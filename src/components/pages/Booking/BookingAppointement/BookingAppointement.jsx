// // import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
// // import Image from 'next/image';
// // import React, { useState, useEffect } from 'react';

// // // Month names
// // const monthNames = [
// //   "January", "February", "March", "April", "May", "June",
// //   "July", "August", "September", "October", "November", "December"
// // ];

// // // Day names
// // const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// // export default function BookingAppointement({ 
// //   services, 
// //   selectedService, 
// //   setSelectedDate, 
// //   selectedDate, 
// //   selectedTime, 
// //   setSelectedTime, 
// //   setSelectedService 
// // }) {
// //   const [currentMonth, setCurrentMonth] = useState(10); // November (0-based index)
// //   const [currentYear, setCurrentYear] = useState(2026);
// //   const [days, setDays] = useState([]);
// //   const [startDayIndex, setStartDayIndex] = useState(0); // Index of first day to show

// //   // Generate all days for current month and next month for scrolling
// //   useEffect(() => {
// //     generateAllDays();
// //   }, [currentMonth, currentYear]);

// //   // Reset start index when month changes
// //   useEffect(() => {
// //     setStartDayIndex(0);
// //     setSelectedDate(null);
// //   }, [currentMonth, currentYear]);

// //   const generateAllDays = () => {
// //     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
// //     const daysInNextMonth = new Date(currentYear, currentMonth + 2, 0).getDate();

// //     const allDays = [];

// //     // Add current month days
// //     for (let i = 1; i <= daysInMonth; i++) {
// //       const dayDate = new Date(currentYear, currentMonth, i);
// //       const dayName = dayNames[dayDate.getDay()];

// //       allDays.push({
// //         day: dayName,
// //         date: i.toString(),
// //         month: currentMonth,
// //         year: currentYear,
// //         fullDate: new Date(currentYear, currentMonth, i)
// //       });
// //     }

// //     // Add next month days (for scrolling)
// //     for (let i = 1; i <= daysInNextMonth; i++) {
// //       const dayDate = new Date(currentYear, currentMonth + 1, i);
// //       const dayName = dayNames[dayDate.getDay()];

// //       allDays.push({
// //         day: dayName,
// //         date: i.toString(),
// //         month: currentMonth + 1,
// //         year: currentYear,
// //         fullDate: new Date(currentYear, currentMonth + 1, i)
// //       });
// //     }

// //     setDays(allDays);
// //   };

// //   const goToPreviousMonth = () => {
// //     if (currentMonth === 0) {
// //       setCurrentMonth(11);
// //       setCurrentYear(currentYear - 1);
// //     } else {
// //       setCurrentMonth(currentMonth - 1);
// //     }
// //   };

// //   const goToNextMonth = () => {
// //     if (currentMonth === 11) {
// //       setCurrentMonth(0);
// //       setCurrentYear(currentYear + 1);
// //     } else {
// //       setCurrentMonth(currentMonth + 1);
// //     }
// //   };

// //   const scrollDaysLeft = () => {
// //     if (startDayIndex > 0) {
// //       setStartDayIndex(startDayIndex - 1);
// //     }
// //   };

// //   const scrollDaysRight = () => {
// //     if (startDayIndex + 9 < days.length) {
// //       setStartDayIndex(startDayIndex + 1);
// //     }
// //   };

// //   const handleDateSelect = (dayItem) => {
// //     // If the selected date is from next month, switch to that month
// //     if (dayItem.month !== currentMonth) {
// //       setCurrentMonth(dayItem.month);
// //       setCurrentYear(dayItem.year);
// //     }
// //     setSelectedDate(dayItem.date);
// //   };

// //   const handleBooking = () => {
// //     alert(`Booking Confirmed!\nService: ${services.find(s => s.id === selectedService)?.title}\nDate: ${selectedDate} ${monthNames[currentMonth]} ${currentYear}\nTime: ${selectedTime}`);
// //   };

// //   // Get current displayed days (9 days)
// //   const displayedDays = days.slice(startDayIndex, startDayIndex + 9);

// //   return (
// //     <div className="w-full my-5">
// //       <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">

// //         {/* Left Section: Booking Form */}
// //         <div className="lg:col-span-2">
// //           {/* Header Title */}
// //           <h1 className="text-3xl sm:text-4xl  font-normal text-secondary uppercase mb-8 leading-tight">
// //             Book An Appointment
// //           </h1>

// //           {/* 1. Choose Service Section */}
// //           <div className="mb-8 rounded-[30px] p-5  shadow-[0px_0px_11px_0px_rgba(0,0,0,0.16)] bg-white">
// //             <h3 className="text-xl sm:text-2xl  font-medium font-poppins mb-2 text-[#6A6A6A]">Choose Service</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {services.map((service) => (
// //                 <button
// //                   key={service.id}
// //                   onClick={() => setSelectedService(service.id)}
// //                   className={`px-4 py-2  rounded-full border border-[#DDB2B5] transition-all text-base lg:text-[22px] font-poppins font-normal flex items-center gap-3 ${selectedService === service.id
// //                     ? "bg-[#DDB2B5] text-white shadow-sm"
// //                     : "bg-white text-[#6A6A6A]"
// //                     }`}
// //                 >
// //                   <img 
// //                     src={selectedService === service.id ? service?.active_img : service?.inactive_img} 
// //                     className="w-5 h-5 lg:w-6 lg:h-6" 
// //                     alt={service?.title} 
// //                   />
// //                   {service.title}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* 2. Choose Date and Time Section */}
// //           <div className="rounded-[30px] p-5 sm:p-8 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.16)] bg-white">
// //             {/* Date Header */}
// //             <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#DADADA]">
// //               <h3 className="text-xl sm:text-2xl font-medium font-poppins text-[#6A6A6A]">Choose Date And Time</h3>
// //               <div className="flex items-center gap-3 text-[#6A6A6A]">
// //                 <CalendarDays className="h-5 w-5 lg:h-6 lg:w-6 text-[#6A6A6A]" />
// //                 <span className="text-base lg:text-[22px] font-poppins font-normal whitespace-nowrap">{monthNames[currentMonth]} {currentYear}</span>
// //                 <div className="flex flex-col -gap-1">
// //                   <ChevronRight 
// //                     onClick={goToPreviousMonth}
// //                     className="-rotate-90 h-4 w-4 lg:h-5 lg:w-5 text-[#6A6A6A] cursor-pointer hover:text-[#DDB2B5]" 
// //                   />
// //                   <ChevronRight 
// //                     onClick={goToNextMonth}
// //                     className="rotate-90 h-4 w-4 lg:h-5 lg:w-5 text-[#6A6A6A] cursor-pointer hover:text-[#DDB2B5]" 
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Date Selection Strip with Working Arrows */}
// //             <div className="relative flex items-center mb-10">
// //               <button 
// //                 onClick={scrollDaysLeft}
// //                 disabled={startDayIndex === 0}
// //                 className={`absolute left-0 z-10 p-1 bg-white/80 rounded-full ${startDayIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
// //               >
// //                 <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8 text-[#DDB2B5]" />
// //               </button>

// //               <div className="flex justify-start lg:justify-center flex-1 gap-4 lg:gap-6 overflow-x-auto no-scrollbar px-8 lg:px-10">
// //                 {displayedDays.map((item, index) => {
// //                   const isSelected = selectedDate === item.date && currentMonth === item.month;
// //                   const isFromNextMonth = item.month !== currentMonth;

// //                   return (
// //                     <div
// //                       key={`${item.month}-${item.date}-${index}`}
// //                       onClick={() => handleDateSelect(item)}
// //                       className={`flex flex-col items-center justify-center min-w-[60px] lg:min-w-[70px] cursor-pointer transition-all rounded-lg py-2 ${
// //                         isSelected ? "relative" : ""
// //                       } ${isFromNextMonth ? 'opacity-50' : ''}`}
// //                     >
// //                       {isSelected && (
// //                         <div className="absolute inset-0 bg-primary rounded-lg -m-1"></div>
// //                       )}
// //                       <span className={`text-base lg:text-[22px] font-normal font-poppins z-10 ${isSelected ? "text-white" : "text-[#6A6A6A]"}`}>
// //                         {item.day}
// //                       </span>
// //                       <span className={`text-2xl lg:text-[38px] font-normal font-poppins z-10 ${isSelected ? "text-white" : "text-[#6A6A6A]"}`}>
// //                         {item.date}
// //                       </span>
// //                     </div>
// //                   );
// //                 })}
// //               </div>

// //               <button 
// //                 onClick={scrollDaysRight}
// //                 disabled={startDayIndex + 9 >= days.length}
// //                 className={`absolute right-0 z-10 p-1 bg-white/80 rounded-full ${startDayIndex + 9 >= days.length ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
// //               >
// //                 <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8 text-[#DDB2B5]" />
// //               </button>
// //             </div>

// //             {/* Time Slot Grid */}
// //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 mb-10">
// //               {["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"].map((time, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => setSelectedTime(time)}
// //                   className={`py-2.5 px-2 rounded-[34px] border border-[#DDB2B5] text-lg lg:text-[22px] font-poppins font-normal transition-all ${
// //                     selectedTime === time
// //                       ? "bg-[#DDB2B5] text-white"
// //                       : "bg-white text-[#6A6A6A]"
// //                   }`}
// //                 >
// //                   {time}
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Summary Footer Bar */}
// //             <div className="bg-[#F9F4F4] rounded-[12px] p-4 lg:p-0 flex flex-col md:flex-row items-center justify-between gap-4">
// //               <p className="text-lg lg:text-[22px] font-poppins font-semibold text-[#6A6A6A] lg:pl-4">
// //                 {selectedDate || "6"} {monthNames[currentMonth]} {currentYear} / <span>{selectedTime || "7:00 PM"}</span>
// //               </p>
// //               <button
// //               style={{
// //                 boxShadow: "4px 0px 25px 0px #5D688A"
// //               }}
// //                 onClick={handleBooking}
// //                 className="w-full md:w-auto px-10 lg:px-12 py-3 lg:py-4 bg-[#DDB2B5] text-white rounded-[24px] font-normal text-lg lg:text-[22px] uppercase transition-all hover:bg-[#DDB2B5]"
// //               >
// //                 Book Now
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Section: About Sidebar */}
// //         <div className="h-fit">
// //           <div className="p-6 lg:p-8 rounded-[30px] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.16)] bg-white">
// //             <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium font-poppins mb-6 text-[#6A6A6A]">About dr.shahd awad</h3>
// //             <div className="relative w-full aspect-square rounded-[30px] overflow-hidden mb-8 shadow-sm mx-auto max-w-[320px] lg:max-w-none">
// //               <Image
// //                 src="/SHAHD-IMAGE/Booking/image 23.webp"
// //                 alt="Dr Shahd Awad"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>

// //             <p className="text-sm sm:text-base font-poppins font-normal text-[#414141] mb-8 leading-relaxed">
// //               Dr. Shahd Awad is more than a cosmetic doctor — she’s a visionary who blends science, artistry, and compassion to create timeless beauty.
// //             </p>

// //             <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium font-poppins mb-4 text-[#6A6A6A]">Location</h3>
// //             <div className="relative w-full h-[220px] lg:h-[320px] rounded-[30px] overflow-hidden border border-[#DADADA]">
// //               <Image
// //                 src="/SHAHD-IMAGE/Booking/a5d3d7e2272e5fea64d1a0495f2f4aa72abf6a43.webp"
// //                 alt="Map Location"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { Calendar } from "@/components/ui/calendar"; // Shadcn Calendar
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // Shadcn Popover
// import {motion} from 'framer-motion';

// const monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// export default function BookingAppointement({ 
//   services, 
//   selectedService, 
//   setSelectedDate, 
//   selectedDate, 
//   selectedTime, 
//   setSelectedTime, 
//   setSelectedService 
// }) {
//   // Initialize with current date or selectedDate
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [days, setDays] = useState([]);
//   const [startDayIndex, setStartDayIndex] = useState(0);

//   useEffect(() => {
//     generateAllDays();
//   }, [currentMonth, currentYear]);

//   const generateAllDays = () => {
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     const daysInNextMonth = new Date(currentYear, currentMonth + 2, 0).getDate();
//     const allDays = [];

//     for (let i = 1; i <= daysInMonth; i++) {
//       const dayDate = new Date(currentYear, currentMonth, i);
//       allDays.push({
//         day: dayNames[dayDate.getDay()],
//         date: i.toString(),
//         month: currentMonth,
//         year: currentYear,
//         fullDate: dayDate
//       });
//     }

//     for (let i = 1; i <= daysInNextMonth; i++) {
//       const dayDate = new Date(currentYear, currentMonth + 1, i);
//       allDays.push({
//         day: dayNames[dayDate.getDay()],
//         date: i.toString(),
//         month: currentMonth + 1,
//         year: currentYear,
//         fullDate: dayDate
//       });
//     }
//     setDays(allDays);
//   };

//   // Logic to handle full calendar selection
//   const handleFullCalendarSelect = (date) => {
//     if (!date) return;
//     setCurrentMonth(date.getMonth());
//     setCurrentYear(date.getFullYear());
//     setSelectedDate(date.getDate().toString());

//     // Reset the horizontal strip to start near the selected date
//     setStartDayIndex(0); 
//   };

//   const scrollDaysLeft = () => startDayIndex > 0 && setStartDayIndex(startDayIndex - 1);
//   const scrollDaysRight = () => startDayIndex + 9 < days.length && setStartDayIndex(startDayIndex + 1);

//   const displayedDays = days.slice(startDayIndex, startDayIndex + 12);

//   return (
//     <div className="w-full my-5">
//       <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
//         <div className="lg:col-span-2">
//           <h1 className="text-2xl sm:text-3xl font-normal text-secondary uppercase mb-2 leading-tight">
//             Book An Appointment
//           </h1>

//           {/* Service Section */}
//           <div className="mb-6 rounded-[25px] p-4 shadow-md bg-white border border-gray-50">
//             <h3 className="text-lg font-medium font-poppins mb-3 text-[#6A6A6A]">Choose Service</h3>
//             <div className="flex flex-wrap gap-2">
//               {services.map((service) => (
//                 <button
//                   key={service.id}
//                   onClick={() => setSelectedService(service.id)}
//                   className={`px-3 py-1.5 rounded-full border border-[#DDB2B5] transition-all text-sm font-poppins flex items-center gap-2 ${
//                     selectedService === service.id ? "bg-[#DDB2B5] text-white" : "bg-white text-[#6A6A6A]"
//                   }`}
//                 >
//                   <img src={selectedService === service.id ? service?.active_img : service?.inactive_img} className="w-4 h-4" alt="" />
//                   {service.title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Date and Time Section */}
//           <div className="rounded-[25px] p-5 shadow-md bg-white border border-gray-50">
//             <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#DADADA]">
//               <h3 className="text-lg font-medium font-poppins text-[#6A6A6A]">Choose Date And Time</h3>

//               {/* SHADCN POPOVER CALENDAR */}
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <div className="flex items-center gap-2 text-[#6A6A6A] cursor-pointer hover:text-[#DDB2B5] transition-colors">
//                     <CalendarDays className="h-5 w-5" />
//                     <span className="text-sm lg:text-base font-poppins font-medium">
//                       {monthNames[currentMonth]} {currentYear}
//                     </span>
//                   </div>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="end">
//                   <Calendar
//                     mode="single"
//                     selected={new Date(currentYear, currentMonth, parseInt(selectedDate || 1))}
//                     onSelect={handleFullCalendarSelect}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Date Strip */}
//             <div className="relative flex items-center mb-8">
//               <button onClick={scrollDaysLeft} className="absolute left-0 z-10 p-1"><ChevronLeft className="h-5 w-5 text-[#DDB2B5]" /></button>
//               <div className="flex justify-start lg:justify-center  flex-1 gap-3 overflow-x-auto no-scrollbar px-6">
//                 {displayedDays.map((item, index) => {
//                   const isSelected = selectedDate === item.date && currentMonth === item.month;
//                   return (
//                     <div
//                       key={index}
//                       onClick={() => {setSelectedDate(item.date); if(item.month !== currentMonth) setCurrentMonth(item.month)}}
//                       className={`flex flex-col font-poppins items-center justify-center min-w-[50px] cursor-pointer transition-all rounded-xl py-2 ${isSelected ? "bg-[#DDB2B5] text-white" : "text-[#6A6A6A]"}`}
//                     >
//                       <span className="text-[10px] uppercase font-bold">{item.day}</span>
//                       <span className="text-xl font-semibold">{item.date}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//               <button onClick={scrollDaysRight} className="absolute right-0 z-10 p-1"><ChevronRight className="h-5 w-5 text-[#DDB2B5]" /></button>
//             </div>

//             {/* Time Slots */}
//             <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
//               {["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map((time) => (
//                 <button
//                   key={time}
//                   onClick={() => setSelectedTime(time)}
//                   className={`py-2 rounded-full border border-[#DDB2B5] text-xs font-poppins transition-all ${
//                     selectedTime === time ? "bg-[#DDB2B5] text-white" : "bg-white text-[#6A6A6A]"
//                   }`}
//                 >
//                   {time}
//                 </button>
//               ))}
//             </div>

//             {/* Footer */}
//             <div className="bg-[#F9F4F4] rounded-xl p-3 flex flex-col md:flex-row items-center justify-between gap-3">
//               <p className="text-sm font-poppins font-semibold text-[#6A6A6A]">
//                 {selectedDate || "Select Date"} {monthNames[currentMonth]} {currentYear} / {selectedTime || "Select Time"}
//               </p>
//               <button
//                 onClick={() => alert("Booking...")}
//                 className="w-full md:w-auto px-8 py-2.5 bg-[#DDB2B5] text-white rounded-full font-medium text-sm uppercase shadow-lg"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>



// {/* Sidebar */}
// <div className="h-fit">
//   <div className="p-5 rounded-[25px] shadow-md bg-white border border-gray-50">
//     <h3 className="text-lg font-medium font-poppins mb-2 text-[#6A6A6A]">About dr.shahd awad</h3>

//     {/* 2. Wrap Image in motion.div for entry animation */}
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 group"
//     >
//       <motion.div
//         whileHover={{ scale: 1.05 }} // Subtle zoom on hover
//         transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
//         className="w-full h-full"
//       >
//         <Image 
//           src="/SHAHD-IMAGE/Booking/image 23.webp" 
//           alt="Dr Shahd Awad" 
//           fill 
//           className="object-cover" 
//           priority
//         />
//       </motion.div>

//       {/* 3. Optional: Add a soft glassmorphism overlay on hover */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 1 }}
//         className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity"
//       />
//     </motion.div>

//     <motion.p 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.3 }}
//       className="text-sm sm:text-base font-poppins font-normal text-[#414141] mb-3 leading-relaxed"
//     >
//       Dr. Shahd Awad is more than a cosmetic doctor — she’s a visionary who blends science, artistry, and compassion to create timeless beauty.
//     </motion.p>

//     <h3 className="text-xl sm:text-2xl font-medium font-poppins mb-2 text-[#6A6A6A]">Location</h3>
//     <motion.div 
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       className="relative w-full h-[220px] rounded-[30px] overflow-hidden border border-[#DADADA]"
//     >
//       <Image
//         src="/SHAHD-IMAGE/Booking/a5d3d7e2272e5fea64d1a0495f2f4aa72abf6a43.webp"
//         alt="Map Location"
//         fill
//         className="object-cover"
//       />
//     </motion.div>
//   </div>
// </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

// Removed global constants to move them inside the component for translation

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function BookingAppointement({
  services,
  selectedService,
  setSelectedDate,
  selectedDate,
  selectedTime,
  setSelectedTime,
  setSelectedService
}) {
  const { t } = useTranslation();

  const monthNames = [
    t("January"), t("February"), t("March"), t("April"), t("May"), t("June"),
    t("July"), t("August"), t("September"), t("October"), t("November"), t("December")
  ];

  const dayNames = [t('SUN'), t('MON'), t('TUE'), t('WED'), t('THU'), t('FRI'), t('SAT')];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);
  const [startDayIndex, setStartDayIndex] = useState(0);

  useEffect(() => {
    generateAllDays();
  }, [currentMonth, currentYear]);

  const generateAllDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInNextMonth = new Date(currentYear, currentMonth + 2, 0).getDate();
    const allDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(currentYear, currentMonth, i);
      allDays.push({
        day: dayNames[dayDate.getDay()],
        date: i.toString(),
        month: currentMonth,
        year: currentYear,
        fullDate: dayDate
      });
    }

    for (let i = 1; i <= daysInNextMonth; i++) {
      const dayDate = new Date(currentYear, currentMonth + 1, i);
      allDays.push({
        day: dayNames[dayDate.getDay()],
        date: i.toString(),
        month: currentMonth + 1,
        year: currentYear,
        fullDate: dayDate
      });
    }
    setDays(allDays);
  };

  const handleFullCalendarSelect = (date) => {
    if (!date) return;
    setCurrentMonth(date.getMonth());
    setCurrentYear(date.getFullYear());
    setSelectedDate(date.getDate().toString());
    setStartDayIndex(0);
  };

  const scrollDaysLeft = () => startDayIndex > 0 && setStartDayIndex(startDayIndex - 1);
  const scrollDaysRight = () => startDayIndex + 9 < days.length && setStartDayIndex(startDayIndex + 1);

  const displayedDays = days.slice(startDayIndex, startDayIndex + 12);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="w-full my-5"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">

        {/* Left Section */}
        <div className="lg:col-span-2">
          <motion.h1 {...fadeIn} className="text-2xl sm:text-3xl font-normal text-secondary uppercase mb-2 leading-tight">
            {t("Book An Appointment")}
          </motion.h1>

          {/* Service Section */}
          <motion.div
            variants={fadeIn}
            className="mb-6 rounded-[25px] p-4 shadow-md bg-white border border-gray-50"
          >
            <h3 className="text-lg font-medium font-poppins mb-3 text-[#6A6A6A]">{t("Choose Service")}</h3>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-3 py-1.5 rounded-full border border-[#DDB2B5] transition-colors text-sm font-poppins flex items-center gap-2 ${selectedService === service.id ? "bg-primary! text-white" : "bg-white text-[#6A6A6A]"
                    }`}
                >
                  <img src={selectedService === service.id ? service?.active_img : service?.inactive_img} className="w-4 h-4" alt="" />
                  {t(service.title)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Date and Time Section */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            className="rounded-[25px] p-5 shadow-md bg-white border border-gray-50"
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#DADADA]">
              <h3 className="text-lg font-medium font-poppins text-[#6A6A6A]">{t("Choose Date And Time")}</h3>

              <Popover>
                <PopoverTrigger asChild>
                  <motion.div whileHover={{ x: 3 }} className="flex items-center gap-2 text-[#6A6A6A] cursor-pointer transition-colors">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-sm lg:text-base font-poppins font-medium">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                  </motion.div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={new Date(currentYear, currentMonth, parseInt(selectedDate || 1))}
                    onSelect={handleFullCalendarSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Date Strip */}
            <div className="relative flex items-center mb-8">
              <button onClick={scrollDaysLeft} className="absolute left-0 z-10 p-1"><ChevronLeft className="h-5 w-5 text-[#DDB2B5]" /></button>
              <div className="flex justify-start lg:justify-center flex-1 gap-3 overflow-x-auto no-scrollbar px-6">
                <AnimatePresence mode='popLayout'>
                  {displayedDays.map((item, index) => {
                    const isSelected = selectedDate === item.date && currentMonth === item.month;
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={`${item.month}-${item.date}`}
                        onClick={() => { setSelectedDate(item.date); if (item.month !== currentMonth) setCurrentMonth(item.month) }}
                        className={`flex flex-col font-poppins items-center justify-center min-w-[50px] cursor-pointer transition-all rounded-xl py-2 ${isSelected ? "bg-[#DDB2B5] text-white" : "text-[#6A6A6A]"}`}
                      >
                        <span className="text-[10px] uppercase font-bold">{item.day}</span>
                        <span className="text-xl font-semibold">{item.date}</span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              <button onClick={scrollDaysRight} className="absolute right-0 z-10 p-1"><ChevronRight className="h-5 w-5 text-[#DDB2B5]" /></button>
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
              {["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map((time) => (
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#fdf2f2" }}
                  whileTap={{ scale: 0.98 }}
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 rounded-full border border-[#DDB2B5] text-xs font-poppins transition-all ${selectedTime === time ? "bg-[#DDB2B5] text-white" : "bg-white text-[#6A6A6A]"
                    }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              layout
              className="bg-[#F9F4F4] rounded-xl p-3 flex flex-col md:flex-row items-center justify-between gap-3"
            >
              <p className="text-sm font-poppins font-semibold text-[#6A6A6A]">
                {selectedDate || t("Select Date")} {monthNames[currentMonth]} {currentYear} / {selectedTime || t("Select Time")}
              </p>
              <motion.button
                onClick={() =>
                  Swal.fire({
                    title: t("Appointment Booked!"),
                    text: t("Your appointment has been booked successfully."),
                    icon: "success",
                    confirmButtonText: t("Done"),
                    confirmButtonColor: "#DDB2B5",
                    background: "#ffffff",
                    color: "#414141",
                    customClass: {
                      popup: "rounded-[25px] font-poppins",
                      confirmButton: "font-poppins",
                    },
                  })
                }
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(221, 178, 181, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-2.5 bg-[#DDB2B5] text-white rounded-full font-medium text-sm uppercase"
              >
                {t("Book Now")}
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
            <h3 className="text-lg font-medium font-poppins mb-2 text-[#6A6A6A]">{t("About dr.shahd awad")}</h3>

            {/* INFINITE FLOATING IMAGE ANIMATION */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
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

            <h3 className="text-xl font-medium font-poppins mb-2 text-[#6A6A6A]">{t("Location")}</h3>
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