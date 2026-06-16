"use client";
import React from 'react';
import FavoriteBanner from '@/components/pages/FavoritePage/FavoriteBanner';
import FavoriteGrid from '@/components/pages/FavoritePage/FavoriteGrid';

export default function FavoritePage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7]">
      {/* Editorial Banner */}
      <FavoriteBanner />

      {/* Favorites Collection Grid */}
      <FavoriteGrid />
    </main>
  );
}
