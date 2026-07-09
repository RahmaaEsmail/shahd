"use client";
import { useTranslation } from "react-i18next";
import { HeartOff } from "lucide-react";
import useWishlistStore from "@/zustandStore/WishlistStore";
import StoreProductCard from "@/components/pages/storePage/StoreProducts/StoreProductCard";
import EmptyState from "./EmptyState";

export default function WishlistPanel() {
  const { t } = useTranslation();
  const { wishlist } = useWishlistStore();

  if (wishlist.length === 0) {
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
      {wishlist.map((product) => (
        <StoreProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
