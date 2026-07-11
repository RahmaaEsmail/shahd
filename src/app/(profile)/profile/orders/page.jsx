import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import OrdersPanel from "@/components/pages/ProfilePage/OrdersPanel";

export default function page() {
  return (
    <ProfileShell title="My Orders">
      <OrdersPanel />
    </ProfileShell>
  );
}
