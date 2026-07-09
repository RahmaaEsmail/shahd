import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import BookingsPanel from "@/components/pages/ProfilePage/BookingsPanel";

export default function BookingsPage() {
  return (
    <ProfileShell title="My Bookings">
      <BookingsPanel />
    </ProfileShell>
  );
}
