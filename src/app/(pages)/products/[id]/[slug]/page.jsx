// import React from 'react'
// import ProductDetailsBanner from '@/components/pages/ProductDetails/ProductDetailsBanner/ProductDetailsBanner'
// import ProductDetailsGrid from '@/components/pages/ProductDetails/ProductDetailsGrid/ProductDetailsGrid'
// import ProductDetailsIngredients from '@/components/pages/ProductDetails/ProductDetailsIngredients/ProductDetailsIngredients'
// import ProductDetailsUsage from '@/components/pages/ProductDetails/ProductDetailsUsage/ProductDetailsUsage'
// import ProductDetailsRoutine from '@/components/pages/ProductDetails/ProductDetailsRoutine/ProductDetailsRoutine'
// import ProductDetailsRealResult from '@/components/pages/ProductDetails/ProductDetailsRealResult/ProductDetailsRealResult'
// import ProductDetailsReviews from '@/components/pages/ProductDetails/ProductDetailsReviews/ProductDetailsReviews'
// import ProductDetailsBundles from '@/components/pages/ProductDetails/ProductDetailsBundles/ProductDetailsBundles'
// import ProductDetailsPartners from '@/components/pages/ProductDetails/ProductDetailsPartners/ProductDetailsPartners'

// import { productData } from '@/data/productFilters'
// import { slugify } from '@/lib/utils'

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const products = productData
//     .filter(p => p.id && p.name)
//     .map((product) => ({
//       id: String(product.id),
//       slug: slugify(product.name),
//     }));

//   const bundles = [
//     { id: "bundle-1", slug: slugify("12 days of dr.shahd advent calendar") },
//     { id: "bundle-2", slug: slugify("12 days of dr.shahd advent calendar") },
//     { id: "bundle-3", slug: slugify("12 days of dr.shahd advent calendar") },
//     { id: "bundle-4", slug: slugify("12 days of dr.shahd advent calendar") },
//   ];

//   return [...products, ...bundles];
// }

// export default async function ProductDetailsPage({ params }) {
//   const { id, slug } = await params;

//   return (
//     <div>
//       <ProductDetailsBanner />
//       <ProductDetailsGrid />
//       <ProductDetailsIngredients />
//       <ProductDetailsUsage />
//       <ProductDetailsRoutine/>
//       <ProductDetailsRealResult />
//       <ProductDetailsReviews />
//       <ProductDetailsBundles/>
//       <ProductDetailsPartners />
//     </div>
//   )
// }


import React from 'react'
import ProductDetailsBanner from '@/components/pages/ProductDetails/ProductDetailsBanner/ProductDetailsBanner'
import ProductDetailsGrid from '@/components/pages/ProductDetails/ProductDetailsGrid/ProductDetailsGrid'
import ProductDetailsIngredients from '@/components/pages/ProductDetails/ProductDetailsIngredients/ProductDetailsIngredients'
import ProductDetailsUsage from '@/components/pages/ProductDetails/ProductDetailsUsage/ProductDetailsUsage'
import ProductDetailsRoutine from '@/components/pages/ProductDetails/ProductDetailsRoutine/ProductDetailsRoutine'
import ProductDetailsRealResult from '@/components/pages/ProductDetails/ProductDetailsRealResult/ProductDetailsRealResult'
import ProductDetailsReviews from '@/components/pages/ProductDetails/ProductDetailsReviews/ProductDetailsReviews'
import ProductDetailsBundles from '@/components/pages/ProductDetails/ProductDetailsBundles/ProductDetailsBundles'
import ProductDetailsPartners from '@/components/pages/ProductDetails/ProductDetailsPartners/ProductDetailsPartners'

import { productData } from '@/data/productFilters'
import { slugify } from '@/lib/utils'

// Force Next.js to only allow paths generated in generateStaticParams
export const dynamicParams = false;

/**
 * For 'output: export', this function MUST return an array of objects
 * where each object contains EVERY dynamic segment in the route.
 * Path: /products/[id]/[slug]
 */
export async function generateStaticParams() {
  // 1. Process Products from your data file
  const products = productData
    .filter((p) => p.id && p.name) // Ensure data isn't missing
    .map((product) => ({
      id: String(product.id),
      slug: slugify(product.name),
    }));

  // 2. Process Manual Bundles
  const bundles = [
    { id: "bundle-1", name: "12 days of dr.shahd advent calendar" },
    { id: "bundle-2", name: "12 days of dr.shahd advent calendar" },
    { id: "bundle-3", name: "12 days of dr.shahd advent calendar" },
    { id: "bundle-4", name: "12 days of dr.shahd advent calendar" },
  ].map(b => ({
    id: b.id,
    slug: slugify(b.name)
  }));

  const allPaths = [...products, ...bundles];

  // Optional: Safety check to remove any accidental nulls/undefineds
  return allPaths.filter(path => path.id && path.slug);
}

/**
 * In Next.js 15, 'params' is a Promise and must be awaited.
 * If you are on Next.js 14, remove the 'await' and the 'async' keyword.
 */
export default async function ProductDetailsPage({ params }) {
  const { id, slug } = await params;

  return (
    <main>
      <ProductDetailsBanner id={id} slug={slug} />
      <ProductDetailsGrid />
      <ProductDetailsIngredients />
      <ProductDetailsUsage />
      <ProductDetailsRoutine />
      <ProductDetailsRealResult />
      <ProductDetailsReviews />
      <ProductDetailsBundles />
      <ProductDetailsPartners />
    </main>
  );
}