import React from 'react'
import BookBanner from '@/components/pages/bookPage/BookBanner/BookBanner'
import BookAbout from '@/components/pages/bookPage/BookAbout/BookAbout'
import BookWrite from '@/components/pages/bookPage/BookWrite/BookWrite'
import BookAuthor from '@/components/pages/bookPage/BookAuthor/BookAuthor'

export default function Page() {
  return (
    <div className='min-h-screen overflow-x-hidden relative w-full'>
      {/* Background Image Layer */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: "url('/SHAHD-IMAGE/Book/Untitled design - 2026-04-18T152652.350.png')",
          // backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          opacity: 0.2
        }}
      />

      {/* Content wrapper */}
      <div className='relative z-10 main-container mx-auto px-4 py-12 lg:py-20'>
        <div className='mt-10'>
          <BookBanner />
          <BookAbout />
          <BookWrite />
          <BookAuthor />
        </div>
      </div>
    </div>
  )
}