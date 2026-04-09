"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Calendar, Lock, CheckCircle, X } from 'lucide-react';
import Image from 'next/image';

// Animation variants
const contentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  })
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }),
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98
  }
};

// Input field animation variants
const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + index * 0.05,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }),
  focus: {
    scale: 1.02,
    borderColor: "#DDB2B5",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
};

// Button animation variants
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

// Title animation variant
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1
    }
  }
};

export default function CartCheckout({ open, setOpen }) {
  const [paymentMethod, setPaymentMethod] = React.useState('card');
  const [processing, setProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Sample payment items from your image
  const paymentItems = [
    { id: 1, name: "Gentle Foaming Cleanser", price: 23.00 },
    { id: 2, name: "Moisturizing Cream", price: 23.00 },
    { id: 3, name: "Face Serum", price: 23.00 },
    { id: 4, name: "Eye Cream", price: 23.00 },
    { id: 5, name: "Sunscreen", price: 23.00 },
    { id: 6, name: "Toner", price: 23.00 },
    { id: 7, name: "Lip Balm", price: 23.00 },
    { id: 8, name: "Face Mask", price: 23.00 },
    { id: 9, name: "Cleansing Oil", price: 23.00 },
    { id: 10, name: "Exfoliator", price: 23.00 },
  ];

  const subtotal = paymentItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 23.00;
  const total = subtotal + shipping;

  const handlePayment = () => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      // Close dialog after success
      setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 2000);
    }, 2000);
  };

  const cards = [
    {
      id: 1,
      title: "Card",
      img: "/images/Cart/card1.svg",
    },
    {
      id: 2,
      title: "EPS",
      img: "/images/Cart/EPS.svg",
    },
    {
      id: 3,
      title: "Giropay",
      img: "/images/Cart/Giropay.svg",
    }
  ]

  const [activeCard, setActiveCard] = useState(1);

  return (
    <Dialog className="max-w-5xl!" open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl! p-4 overflow-hidden bg-white rounded-[32px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Content */}
          <div className="grid grid-cols-1 gap-6 p-6">
            {/* Right Side - Payment Form */}
            <div className="pl-2">
              <motion.h3 
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-[27px] font-bold text-secondary mb-4 font-poppins"
              >
                Payment Details
              </motion.h3>

              <motion.div 
                className='grid grid-cols-3 gap-3 mb-6'
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.2,
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {cards?.map((item, index) => (
                  <motion.div
                    onClick={() => setActiveCard(item?.id)}
                    key={item?.id}
                    custom={index}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      boxShadow: "0px 2px 4px 0px #00000012",
                      borderColor: activeCard == item?.id ? "#DDB2B5" : "#E0E0E0"
                    }}
                    className={`h-[64px] p-[10px_12px] rounded-[6px] border-2 cursor-pointer transition-colors duration-200 flex flex-col`}
                    animate={{
                      borderColor: activeCard == item?.id ? "#DDB2B5" : "#E0E0E0"
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image src={item?.img} alt={item?.title} width={16} height={16} />
                    </motion.div>
                    <motion.p 
                      className={`text-[13px] font-poppins font-normal`}
                      animate={{
                        color: activeCard == item?.id ? "#DDB2B5" : "#4F5B76"
                      }}
                    >
                      {item?.title}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>

              <div className='flex flex-col gap-2'>
                <motion.div 
                  className='flex flex-col gap-1'
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  <p className='text-secondary text-[13px] font-poppins'>Card number</p>
                  <motion.div
                    style={{
                      boxShadow: "0px 2px 4px 0px #00000012"
                    }}
                    className='flex border-2 h-[43px] rounded-[6px] p-[10px_12px] border-[#E0E0E0]'
                    whileHover={{ scale: 1.01 }}
                    animate={{
                      borderColor: focusedField === 'card' ? "#DDB2B5" : "#E0E0E0"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <input
                      placeholder='1234 1234 1234 1234'
                      onFocus={() => setFocusedField('card')}
                      onBlur={() => setFocusedField(null)}
                      className='border-none outline-none font-poppins w-full placeholder:text-[#A5ACB8] text-[#A5ACB8] text-[13px] font-semibold'
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image src="/images/Cart/banks.svg" alt="banks" width={108} height={16} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 mt-3.5 gap-3">
                <motion.div 
                  className='flex flex-col gap-2'
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  <div className='flex flex-col gap-1'>
                    <p className='text-[#4F5B76] text-[13px] font-poppins'>Expiry</p>
                    <motion.input
                      style={{
                        boxShadow: "0px 2px 4px 0px #00000012"
                      }}
                      onFocus={() => setFocusedField('expiry')}
                      onBlur={() => setFocusedField(null)}
                      placeholder='MM/YY'
                      className='flex border-2 h-[43px] rounded-[6px] p-[10px_12px] border-[#E0E0E0] font-poppins w-full placeholder:text-[#A5ACB8] text-[#A5ACB8] text-[13px] font-semibold transition-colors duration-200'
                      whileHover={{ scale: 1.01 }}
                      animate={{
                        borderColor: focusedField === 'expiry' ? "#DDB2B5" : "#E0E0E0"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className='flex flex-col gap-2'
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  <div className='flex flex-col gap-1'>
                    <p className='text-[#4F5B76] text-[13px] font-poppins'>CVC</p>
                    <motion.input
                      style={{
                        boxShadow: "0px 2px 4px 0px #00000012"
                      }}
                      onFocus={() => setFocusedField('cvc')}
                      onBlur={() => setFocusedField(null)}
                      placeholder='CVC'
                      className='flex border-2 h-[43px] rounded-[6px] p-[10px_12px] border-[#E0E0E0] font-poppins w-full placeholder:text-[#A5ACB8] text-[#A5ACB8] text-[13px] font-semibold transition-colors duration-200'
                      whileHover={{ scale: 1.01 }}
                      animate={{
                        borderColor: focusedField === 'cvc' ? "#DDB2B5" : "#E0E0E0"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 mt-3.5 gap-3">
                <motion.div 
                  className='flex flex-col gap-2'
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  <div className='flex flex-col gap-1'>
                    <p className='text-[#4F5B76] text-[13px] font-poppins'>Country</p>
                    <motion.select
                      style={{
                        boxShadow: "0px 2px 4px 0px #00000012"
                      }}
                      onFocus={() => setFocusedField('country')}
                      onBlur={() => setFocusedField(null)}
                      className='flex border-2 h-[43px] rounded-[6px] p-[10px_12px] border-[#E0E0E0] font-poppins w-full text-[#A5ACB8] text-[13px] font-semibold transition-colors duration-200'
                      whileHover={{ scale: 1.01 }}
                      animate={{
                        borderColor: focusedField === 'country' ? "#DDB2B5" : "#E0E0E0"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <option>United States</option>
                    </motion.select>
                  </div>
                </motion.div>

                <motion.div 
                  className='flex flex-col gap-2'
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                >
                  <div className='flex flex-col gap-1'>
                    <p className='text-[#4F5B76] text-[13px] font-poppins'>Postal code</p>
                    <motion.input
                      style={{
                        boxShadow: "0px 2px 4px 0px #00000012"
                      }}
                      onFocus={() => setFocusedField('postal')}
                      onBlur={() => setFocusedField(null)}
                      placeholder='90210'
                      className='flex border-2 h-[43px] rounded-[6px] p-[10px_12px] border-[#E0E0E0] font-poppins w-full placeholder:text-[#A5ACB8] text-[#A5ACB8] text-[13px] font-semibold transition-colors duration-200'
                      whileHover={{ scale: 1.01 }}
                      animate={{
                        borderColor: focusedField === 'postal' ? "#DDB2B5" : "#E0E0E0"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                style={{
                  backgroundImage: "url('/images/Cart/Rectangle 20.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                className="w-[183px] flex items-center justify-center ms-auto text-[24px] font-normal h-[47px] rounded-full text-white mt-4"
                onClick={handlePayment}
              >
                <motion.span
                  animate={processing ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  {processing ? "○" : "Pay Now"}
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}