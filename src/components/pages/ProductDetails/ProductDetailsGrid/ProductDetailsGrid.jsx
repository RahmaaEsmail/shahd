import React from 'react'
import ProductDetailsImages from './ProductDetailsImages/ProductDetailsImages'
import ProductDetailsContent from './ProductDetailsContent/ProductDetailsContent'

export default function ProductDetailsGrid() {
  return (
    <div className='main-container'>
      <div className='grid grid-cols-1 lg:grid-cols-[3.5fr_8.5fr] overflow-hidden gap-8 lg:gap-12 mt-6 md:mt-10'>
        <ProductDetailsImages/>
        <ProductDetailsContent/>
      </div>
    </div>
  )
}
