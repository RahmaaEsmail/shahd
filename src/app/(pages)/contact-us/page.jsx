"use client";

import { motion } from "framer-motion"; // Import motion
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import ContactBanner from "../../../components/pages/ContactUs/ContactBanner/ContactBanner";
import { useTranslation } from "react-i18next";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 , x : -20},
  visible: {
    opacity: 1,
    x:0,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ContactPage() {
  const { t } = useTranslation();

  const contactInfo = [
    { icon: MapPin, label: t("Clinic Location"), value: t("123 Beauty Boulevard, Suite 4\nDubai, United Arab Emirates") },
    { icon: Phone, label: t("Phone Number"), value: t("+971 50 123 4567") },
    { icon: Mail, label: t("Email Address"), value: t("hello@shahd-awad.com") },
    { icon: Clock, label: t("Working Hours"), value: t("Working Hours Value") },
  ];

  const socials = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Twitter, href: "#" },
  ];
  return (
    <div className="min-h-screen bg-[#fff9f7] font-sans overflow-x-hidden">
      
      {/* ── HERO BANNER ───────────────────────────────────────────────── */}
      <ContactBanner />

      {/* ── MAIN SECTION ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        
        {/* Section Header Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center mb-6"
        >
          <p className="text-base tracking-[4px] uppercase text-primary mb-2 font-bold">
            {t('Get in Touch')}
          </p>
          <h2 className="font-serif text-4xl font-light text-[#2d2020]">
            {t("We're Here")} <em className="italic text-primary">{t('For You')}</em>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-primary mx-auto mt-4 rounded-full" 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* ── LEFT: CONTACT INFO (Staggered Children) ──────────────── */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-6"
          >
            <Card className="border border-primary rounded-2xl shadow-sm bg-white overflow-hidden">
              <CardContent className="p-8">
                <motion.h3 variants={fadeInUp} className="font-serif text-2xl font-normal text-primary mb-2">
                  {t('Contact Information')}
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-sm text-[#a08080] leading-relaxed mb-7 font-medium">
                  {t('Visit us at our clinic or send us a message — we respond within 24 hours.')}
                </motion.p>

                <ul className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value }, idx) => (
                    <motion.li 
                      key={label} 
                      variants={fadeInUp}
                      className="flex items-start gap-4"
                    >
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm text-[#2d2020] leading-relaxed whitespace-pre-line">
                          {value}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <motion.div variants={fadeInUp} className="mt-7 pt-6 border-t border-primary/10">
                  <p className="text-[11px] tracking-[2px] uppercase text-primary font-bold mb-3">
                    {t('Follow Dr. Shahd')}
                  </p>
                  <div className="flex gap-2.5">
                    {socials.map(({ icon: Icon, href }, i) => (
                      <motion.a
                        whileHover={{ y: -3, scale: 1.1 }}
                        key={i}
                        href={href}
                        className="w-9 h-9 rounded-full bg-white border border-primary/50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── RIGHT: CONTACT FORM (Fade in from right) ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border border-primary rounded-2xl shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-normal text-primary mb-2">
                  {t('Send a Message')}
                </h3>
                <p className="text-sm text-[#a08080] leading-relaxed mb-7 font-medium">
                  {t('Fill out the form below and our team will get back to you soon.')}
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold">{t('First Name')}</label>
                      <Input placeholder={t("Your first name")} className="border-primary/20 bg-[#fff9f7] focus-visible:ring-primary rounded-xl text-sm h-12" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold">{t('Last Name')}</label>
                      <Input placeholder={t("Your last name")} className="border-primary/20 bg-[#fff9f7] focus-visible:ring-primary rounded-xl text-sm h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold">{t('Email Address')}</label>
                      <Input type="email" placeholder={t("your@email.com")} className="border-primary/20 bg-[#fff9f7] focus-visible:ring-primary rounded-xl text-sm h-12" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold">{t('Phone Number')}</label>
                      <Input type="tel" placeholder={t("+971 50 000 0000")} className="border-primary/20 bg-[#fff9f7] focus-visible:ring-primary rounded-xl text-sm h-12" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold">{t('Service of Interest')}</label>
                    <Select>
                      <SelectTrigger className="h-12 border-primary/20 bg-[#fff9f7] focus:ring-primary rounded-xl text-sm text-[#a08080]">
                        <SelectValue placeholder={t("Select a service...")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dermatology">{t('Dermatology Consultation')}</SelectItem>
                        <SelectItem value="aesthetic">{t('Aesthetic Treatments')}</SelectItem>
                        <SelectItem value="wellness">{t('Wellness Programs')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] tracking-[1.5px] uppercase text-primary font-bold">{t('Your Message')}</label>
                    <Textarea placeholder={t("Tell us how we can help you...")} rows={4} className="border-primary/20 bg-[#fff9f7] focus-visible:ring-primary rounded-xl text-sm resize-none" />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full rounded-full bg-primary hover:opacity-90 text-white text-xs tracking-[2px] uppercase font-bold py-7 transition-all shadow-lg shadow-primary/20">
                      {t('Send Message')}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}