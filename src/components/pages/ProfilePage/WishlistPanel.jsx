"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { HeartOff, Loader2 } from "lucide-react";
import StoreProductCard from "@/components/pages/storePage/StoreProducts/StoreProductCard";
import EmptyState from "./EmptyState";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { useGetProducts } from "@/hooks/products/useProducts";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

export default function WishlistPanel() {
  const { t } = useTranslation();
  const user = useCurrentUser();
  const { data: wishlistData, isLoading: isWishlistLoading } = useWishlist(user?.user_id);
  const { data: productsData, isLoading: isProductsLoading } = useGetProducts();

  if (isWishlistLoading || isProductsLoading) {
    return (
      <div className="py-20 flex justify-center items-center w-full">
        <Loader2 className="animate-spin text-primary" size={36} />
      </div>
    );
  }

  const rawWishlistItems = Array.isArray(wishlistData?.data)
    ? wishlistData.data
    : wishlistData?.data?.items || [];

  const productsList = productsData?.data || [];

  const wishlistItems = rawWishlistItems
    .map((wishlistItem) => {
      if (wishlistItem.name || wishlistItem.title) return wishlistItem;
      const productDetail = productsList.find((p) => p.id == wishlistItem.product_id);
      return productDetail;
    })
    .filter((item) => item !== undefined && item !== null);

  if (wishlistItems.length === 0) {
    return (
      <EmptyState
        icon={HeartOff}
        title={t("Your Wishlist is Empty")}
        description={t("Save items you love and find them here anytime.")}
        actionLabel={t("Browse Store")}
        actionHref="/store"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {wishlistItems.map((product) => (
        <StoreProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
