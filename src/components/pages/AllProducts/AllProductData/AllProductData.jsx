import React from 'react'
import AllProductFilters from '../AllProductFilters/AllProductFilters'
import AllProductsGrid from '../AllProductsGrid/AllProductsGrid'

export default function AllProductData() {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[3.5fr_8.5fr] gap-6 main-container mb-5 mt-10'>
      <AllProductFilters />
      <AllProductsGrid />
    </div>
  )
}
