import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Month names
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Day names
const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function BookingAppointement({ 
  services, 
  selectedService, 
  setSelectedDate, 
  selectedDate, 
  selectedTime, 
  setSelectedTime, 
  setSelectedService 
}) {
  const [currentMonth, setCurrentMonth] = useState(10); // November (0-based index)
  const [currentYear, setCurrentYear] = useState(2026);
  const [days, setDays] = useState([]);
  const [startDayIndex, setStartDayIndex] = useState(0); // Index of first day to show

  // Generate all days for current month and next month for scrolling
  useEffect(() => {
    generateAllDays();
  }, [currentMonth, currentYear]);

  // Reset start index when month changes
  useEffect(() => {
    setStartDayIndex(0);
    setSelectedDate(null);
  }, [currentMonth, currentYear]);

  const generateAllDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInNextMonth = new Date(currentYear, currentMonth + 2, 0).getDate();
    
    const allDays = [];
    
    // Add current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(currentYear, currentMonth, i);
      const dayName = dayNames[dayDate.getDay()];
      
      allDays.push({
        day: dayName,
        date: i.toString(),
        month: currentMonth,
        year: currentYear,
        fullDate: new Date(currentYear, currentMonth, i)
      });
    }
    
    // Add next month days (for scrolling)
    for (let i = 1; i <= daysInNextMonth; i++) {
      const dayDate = new Date(currentYear, currentMonth + 1, i);
      const dayName = dayNames[dayDate.getDay()];
      
      allDays.push({
        day: dayName,
        date: i.toString(),
        month: currentMonth + 1,
        year: currentYear,
        fullDate: new Date(currentYear, currentMonth + 1, i)
      });
    }
    
    setDays(allDays);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const scrollDaysLeft = () => {
    if (startDayIndex > 0) {
      setStartDayIndex(startDayIndex - 1);
    }
  };

  const scrollDaysRight = () => {
    if (startDayIndex + 9 < days.length) {
      setStartDayIndex(startDayIndex + 1);
    }
  };

  const handleDateSelect = (dayItem) => {
    // If the selected date is from next month, switch to that month
    if (dayItem.month !== currentMonth) {
      setCurrentMonth(dayItem.month);
      setCurrentYear(dayItem.year);
    }
    setSelectedDate(dayItem.date);
  };

  const handleBooking = () => {
    alert(`Booking Confirmed!\nService: ${services.find(s => s.id === selectedService)?.title}\nDate: ${selectedDate} ${monthNames[currentMonth]} ${currentYear}\nTime: ${selectedTime}`);
  };

  // Get current displayed days (9 days)
  const displayedDays = days.slice(startDayIndex, startDayIndex + 9);

  return (
    <div className="w-full my-5">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">

        {/* Left Section: Booking Form */}
        <div className="lg:col-span-2">
          {/* Header Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[59px] font-normal text-secondary uppercase mb-8 leading-tight">
            Book An Appointment
          </h1>

          {/* 1. Choose Service Section */}
          <div className="mb-8 rounded-[30px] p-5 sm:p-8 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.16)] bg-white">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium font-poppins mb-6 text-[#6A6A6A]">Choose Service</h3>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-2 lg:px-6 lg:py-2.5 rounded-full border border-[#DDB2B5] transition-all text-base lg:text-[22px] font-poppins font-normal flex items-center gap-3 ${selectedService === service.id
                    ? "bg-[#DDB2B5] text-white shadow-sm"
                    : "bg-white text-[#6A6A6A]"
                    }`}
                >
                  <img 
                    src={selectedService === service.id ? service?.active_img : service?.inactive_img} 
                    className="w-5 h-5 lg:w-6 lg:h-6" 
                    alt={service?.title} 
                  />
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Choose Date and Time Section */}
          <div className="rounded-[30px] p-5 sm:p-8 shadow-[0px_0px_11px_0px_rgba(0,0,0,0.16)] bg-white">
            {/* Date Header */}
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#DADADA]">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium font-poppins text-[#6A6A6A]">Choose Date And Time</h3>
              <div className="flex items-center gap-3 text-[#6A6A6A]">
                <CalendarDays className="h-5 w-5 lg:h-6 lg:w-6 text-[#6A6A6A]" />
                <span className="text-base lg:text-[22px] font-poppins font-normal whitespace-nowrap">{monthNames[currentMonth]} {currentYear}</span>
                <div className="flex flex-col -gap-1">
                  <ChevronRight 
                    onClick={goToPreviousMonth}
                    className="-rotate-90 h-4 w-4 lg:h-5 lg:w-5 text-[#6A6A6A] cursor-pointer hover:text-[#DDB2B5]" 
                  />
                  <ChevronRight 
                    onClick={goToNextMonth}
                    className="rotate-90 h-4 w-4 lg:h-5 lg:w-5 text-[#6A6A6A] cursor-pointer hover:text-[#DDB2B5]" 
                  />
                </div>
              </div>
            </div>

            {/* Date Selection Strip with Working Arrows */}
            <div className="relative flex items-center mb-10">
              <button 
                onClick={scrollDaysLeft}
                disabled={startDayIndex === 0}
                className={`absolute left-0 z-10 p-1 bg-white/80 rounded-full ${startDayIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8 text-[#DDB2B5]" />
              </button>
              
              <div className="flex justify-start lg:justify-center flex-1 gap-4 lg:gap-6 overflow-x-auto no-scrollbar px-8 lg:px-10">
                {displayedDays.map((item, index) => {
                  const isSelected = selectedDate === item.date && currentMonth === item.month;
                  const isFromNextMonth = item.month !== currentMonth;
                  
                  return (
                    <div
                      key={`${item.month}-${item.date}-${index}`}
                      onClick={() => handleDateSelect(item)}
                      className={`flex flex-col items-center justify-center min-w-[60px] lg:min-w-[70px] cursor-pointer transition-all rounded-lg py-2 ${
                        isSelected ? "relative" : ""
                      } ${isFromNextMonth ? 'opacity-50' : ''}`}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 bg-primary rounded-lg -m-1"></div>
                      )}
                      <span className={`text-base lg:text-[22px] font-normal font-poppins z-10 ${isSelected ? "text-white" : "text-[#6A6A6A]"}`}>
                        {item.day}
                      </span>
                      <span className={`text-2xl lg:text-[38px] font-normal font-poppins z-10 ${isSelected ? "text-white" : "text-[#6A6A6A]"}`}>
                        {item.date}
                      </span>
                    </div>
                  );
                })}
              </div>
 
              <button 
                onClick={scrollDaysRight}
                disabled={startDayIndex + 9 >= days.length}
                className={`absolute right-0 z-10 p-1 bg-white/80 rounded-full ${startDayIndex + 9 >= days.length ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8 text-[#DDB2B5]" />
              </button>
            </div>

            {/* Time Slot Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 mb-10">
              {["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"].map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 px-2 rounded-[34px] border border-[#DDB2B5] text-lg lg:text-[22px] font-poppins font-normal transition-all ${
                    selectedTime === time
                      ? "bg-[#DDB2B5] text-white"
                      : "bg-white text-[#6A6A6A]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Summary Footer Bar */}
            <div className="bg-[#F9F4F4] rounded-[12px] p-4 lg:p-0 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-lg lg:text-[22px] font-poppins font-semibold text-[#6A6A6A] lg:pl-4">
                {selectedDate || "6"} {monthNames[currentMonth]} {currentYear} / <span>{selectedTime || "7:00 PM"}</span>
              </p>
              <button
              style={{
                boxShadow: "4px 0px 25px 0px #5D688A"
              }}
                onClick={handleBooking}
                className="w-full md:w-auto px-10 lg:px-12 py-3 lg:py-4 bg-[#DDB2B5] text-white rounded-[24px] font-normal text-lg lg:text-[22px] uppercase transition-all hover:bg-[#DDB2B5]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: About Sidebar */}
        <div className="h-fit">
          <div className="p-6 lg:p-8 rounded-[30px] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.16)] bg-white">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium font-poppins mb-6 text-[#6A6A6A]">About dr.shahd awad</h3>
            <div className="relative w-full aspect-square rounded-[30px] overflow-hidden mb-8 shadow-sm mx-auto max-w-[320px] lg:max-w-none">
              <Image
                src="/images/Booking/image 23.png"
                alt="Dr Shahd Awad"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm sm:text-base font-poppins font-normal text-[#414141] mb-8 leading-relaxed">
              Dr. Shahd Awad is more than a cosmetic doctor — she’s a visionary who blends science, artistry, and compassion to create timeless beauty.
            </p>

            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium font-poppins mb-4 text-[#6A6A6A]">Location</h3>
            <div className="relative w-full h-[220px] lg:h-[320px] rounded-[30px] overflow-hidden border border-[#DADADA]">
              <Image
                src="/images/Booking/a5d3d7e2272e5fea64d1a0495f2f4aa72abf6a43.png"
                alt="Map Location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}