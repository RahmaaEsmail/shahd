import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import SubscriptionsPanel from "@/components/pages/ProfilePage/SubscriptionsPanel";

export default function SubscriptionsPage() {
  return (
    <ProfileShell title="My Subscriptions">
      <SubscriptionsPanel />
    </ProfileShell>
  );
}
