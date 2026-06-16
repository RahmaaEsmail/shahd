"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
}


import { useTranslation } from 'react-i18next';

export default function CourseCard({ item, index }) {
  const { t } = useTranslation();

  return (
    <motion.div
      key={item?.id}
      custom={index}
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: "0.3" }}
      className='flex flex-col gap-2 group'
    >
      {/* Image Container with Parallax */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className='relative overflow-hidden rounded-[32px]'
      >
        <Image
          src={item?.image}
          alt={t(item?.titleKey)}
          height={440}
          width={380}
          className='object-cover w-full! rounded-[32px] transition-transform duration-700 group-hover:scale-110'
        />

        {/* Image Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='absolute inset-0 bg-linear-to-t from-secondary/60 to-transparent rounded-[32px]'
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className='bg-white/60 backdrop-blur-lg rounded-[24px] p-4 border border-white hover:border-white transition-all duration-300'
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-primary font-medium text-xl  font-poppins mb-2'
        >
          {t(item?.titleKey)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-[#414141] tracking-[-0.3px] font-medium text-base  leading-6 font-poppins mb-3'
        >
          {t(item?.descKey)}
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant='secondary'
            className={"text-white p-[20px_32px]  rounded-full text-lg font-normal! flex justify-center items-center w-full shadow-lg shadow-secondary/30 hover:shadow-xl transition-all"}
          >
            {t('Enroll in the Masterclass')}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
