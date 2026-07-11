import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import NotificationsPanel from "@/components/pages/ProfilePage/NotificationsPanel";

export default function page() {
  return (
    <ProfileShell title="Notifications">
      <NotificationsPanel />
    </ProfileShell>
  );
}
