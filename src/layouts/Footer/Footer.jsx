"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Youtube,
  Twitter,
  Instagram,
  MessageCircle,
  ArrowRight,
  SendHorizontal
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const socialIcons = [
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "No: 58 A, East Madison Street, Baltimore, MD, USA 4508",
  },
  {
    icon: Phone,
    text: "+001 23456789",
  },
  {
    icon: Mail,
    text: "sirpi@example.com",
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer 
    id="main-footer"
    className="relative w-full mt-5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/SHAHD-IMAGE/Footer/footer.webp')" }}
      />

      {/* Pink Overlay - #DDB2B5 at 15% opacity */}
      <div className="absolute inset-0 bg-white/15" />
      {/* <div className="absolute inset-0 bg-primary/25" /> */}

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative z-10  mx-auto pt-4 flex flex-col"
      >
        {/* Top Section - Header */}
        <motion.div
          variants={itemVariants}
          initial={"initial"}
          whileInView={"visible"}
          viewport={{ once: false }}
          className="flex flex-col lg:flex-row container mx-auto px-6 lg:px-12 justify-between items-start lg:items-center py-5 border-b-4 border-white/80 gap-6"
        >
          <motion.h2
            variants={fadeInLeft}
            initial={"initial"}
            whileInView={"visible"}
            viewport={{ once: false }}
            className="text-secondary uppercase text-3xl  font-normal tracking-wide"
          >
            {t("Let's Connect")}
          </motion.h2>

          <motion.div
          onClick={() => router.push(`/contact-us`)}
            initial={"initial"}
            whileInView={"visible"}
            viewport={{ once: false }}
            variants={fadeInRight}>
            <Button
              variant="secondary"
              className="rounded-full bg-secondary hover:bg-[#5a7a89] text-white px-5 py-5 text-lg md:text-xl font-normal transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("Contact Us")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="flex-1  px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[6fr_2fr_2fr_4fr] gap-12 py-6">
          {/* Column 1 - Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              variants={scaleIn}
              className="text-primary text-lg md:text-2xl  font-normal uppercase tracking-wide"
            >
              {t("Dr. Shahd Awad Clinic")}
            </motion.h3>

            <p className="text-primary tracking-[-1px]  text-lg md:text-xl font-normal font-poppins leading-relaxed">
              {t("Premium aesthetic care combining dermatology, advanced treatments, and personalized wellness — empowering your natural glow.")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-[#5a7a89] transition-colors duration-300 shadow-md"
                  aria-label={t(social.label)}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-primary text-2xl  font-normal uppercase tracking-[-0.4px]">
              {t("Quick Links")}
            </h4>

            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link
                    href={link.href}
                    className="text-primary text-lg font-semibold font-inter transition-all duration-300 cursor-pointer  hover:translate-x-1 inline-block"
                  >
                    {t(link.label)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-primary text-2xl  font-normal uppercase tracking-[-0.4px]">
              {t("Contact Info")}
            </h4>

            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="flex items-start cursor-pointer gap-3 group"
                >
                  <info.icon className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-primary text-lg font-semibold font-poppins transition-all duration-300  hover:translate-x-1 inline-block">
                    {t(info.text)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-primary text-2xl font-normal uppercase tracking-[-0.4px]">
              {t("Newsletter")}
            </h4>

            <p className="text-primary font-poppins  text-lg font-semibold">
              {t("Get In Touch")}
            </p>

            <form onSubmit={handleSubmit} className="relative">
              <div className="relative  flex items-center">
                <Input
                  type="email"
                  placeholder={t("Your Email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/69! border-0 text-base font-medium font-poppins h-16 rounded-full p-[30px_24px] text-primary! placeholder:text-primary focus-visible:ring-primary focus-visible:ring-2"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 w-10 h-10 rounded-full flex items-center justify-center text-primary transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <SendHorizontal className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial={"initial"}
          whileInView={"visible"}
          viewport={{ once: false }}
          className="border-t bg-secondary text-white border-secondary p-6 px-10! mb-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center md:text-left">
            <p className="text-white font-inter text-lg  font-normal tracking-[-0.4px]">
              {t("© 2025 Shahd Clinic.Wedesigntech.")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                href="/privacy-policy"
                className="text-white font-inter text-lg  font-medium tracking-[-0.4px]"
              >
                {t("Privacy Policy")}
              </Link>
              <Link
                href="/terms-conditions"
                className="text-white font-inter text-lg  font-medium tracking-[-0.4px]"
              >
                {t("Terms & Conditions")}
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}