"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';

const AestheticGynecologyMeetShahd = ({ data }) => {
    const {t, i18n} = useTranslation();
    const isRtl = i18n.language === 'ar';
    const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

    const title = data?.[`title_${lang}`] || data?.title_en || t("Compassionate Care");
    const subtitle = data?.[`subtitle_${lang}`] || data?.subtitle_en || t("Meet Dr Shahd");
    const description = data?.[`description_${lang}`] || data?.description_en || t("Meet Shahd Desc");
    const portraitImage = data?.image_url || 
      (data?.image ? (data.image.startsWith("http") ? data.image : `https://drshahdawad.com/ShahdAwad/uploads/aesthetic_gynecology/${data.image}`) : null) || 
      (data?.image ? (data.image.startsWith("http") ? data.image : `https://drshahdawad.com/ShahdAwad/uploads/aesthetic_gynecology_about/${data.image}`) : null) || 
      "/SHAHD-IMAGE/aethesic/d84af73b8acd014cfcef33e4a8101aa45f982ca2.webp";

    const services = [
        {
            title: "VAGINAL HEALTH",
            description: "Addressing dryness, discomfort, and overall tissue quality for better intimate wellness.",
            icon: "https://img.icons8.com/ios/100/ddb2b5/uterus.webp"
        },
        {
            title: "TISSUE REJUVENATION",
            description: "Enhancing structural integrity and aesthetics through advanced regenerative techniques.",
            icon: "https://img.icons8.com/ios/100/ddb2b5/syringe.webp"
        },
        {
            title: "FUNCTIONAL COMFORT",
            description: "Improving daily comfort and confidence with specialized aesthetic treatments.",
            icon: "https://img.icons8.com/ios/100/ddb2b5/health-calendar.webp"
        }
    ]

    return (
        <section
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.37) 0%, rgba(221, 178, 181, 0.37) 50%, rgba(255, 255, 255, 0.37) 100%)"
            }}
            className="relative overflow-hidden py-10 lg:py-0"
        >
            {/* Background Decorative Floral Elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <Image
                    src="/SHAHD-IMAGE/aethesic/4da119c7fe84a0b32cbc93f0c46b0bc055749c90.webp"
                    alt="Floral Background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Decorative Top Bar */}
            <div className='absolute rotate-180 -top-5 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
                <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
            </div>

            <div className="main-container relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side: Image of Dr. Shahd */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full flex justify-center lg:justify-start"
                    >
                        {/* Soft Glow Background for Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 rounded-full blur-3xl opacity-50" />

                        <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[525px] aspect-[525/733]">
                            <Image
                                src={portraitImage}
                                alt="Dr. Shahd Awad"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right side: Intro Text */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col space-y-3 text-center lg:text-start"
                    >
                        <span  className="text-secondary font-bold font-poppins tracking-wider text-sm lg:text-[27px] capitalize">
                            {subtitle}
                        </span>

                        <h2 className="text-3xl   text-primary leading-[1.2] lg:leading-[1.1]">
                            {title}
                        </h2>

                        <p className="text-[#414141] max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg tracking-[-0.3px] leading-[1.6] font-poppins">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Bottom Bar */}
            <div className='absolute -bottom-7 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
                <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
            </div>

             <div className='absolute top-0 rotate-180 left-0 right-0 z-20 w-full h-[53px] pointer-events-none'>
                <img src="/SHAHD-IMAGE/aethesic/Rectangle 24.webp" className='w-full h-full object-cover' alt="" />
            </div>
        </section>
    )
}

export default AestheticGynecologyMeetShahd