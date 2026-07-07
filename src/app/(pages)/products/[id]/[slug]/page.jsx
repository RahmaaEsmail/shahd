import React from "react";
import { productData } from "@/data/productFilters";
import { slugify } from "@/lib/utils";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
  const products = productData
    .filter((p) => p.id && p.name)
    .map((product) => ({
      id: String(product.id),
      slug: slugify(product.name),
    }));

  const bundles = [
    { id: "bundle-1", name: "12 days of dr.shahd advent calendar" },
    { id: "bundle-2", name: "12 days of dr.shahd advent calendar" },
    { id: "bundle-3", name: "12 days of dr.shahd advent calendar" },
    { id: "bundle-4", name: "12 days of dr.shahd advent calendar" },
  ].map((b) => ({
    id: b.id,
    slug: slugify(b.name),
  }));

  const allPaths = [...products, ...bundles];
  return allPaths.filter((path) => path.id && path.slug);
}

export default async function ProductDetailsPage({ params }) {
  const { id, slug } = await params;
  return <ProductDetailsClient id={id} slug={slug} />;
}
