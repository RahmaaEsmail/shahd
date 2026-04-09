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
          backgroundImage: "url('/images/book/bg-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2
        }}
      />

      {/* Content wrapper */}
      <div className='relative z-10 main-container mx-auto px-4 py-12 lg:py-20'>
        <div className='mt-10 lg:mt-24 space-y-20 lg:space-y-40'>
          <BookBanner />
          <BookAbout />
          <BookWrite />
          <BookAuthor />
        </div>
      </div>
    </div>
  )
}