import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import WishlistPanel from "@/components/pages/ProfilePage/WishlistPanel";

export default function WishlistPage() {
  return (
    <ProfileShell title="My Wishlist">
      <WishlistPanel />
    </ProfileShell>
  );
}
