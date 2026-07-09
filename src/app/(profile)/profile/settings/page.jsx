import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import SettingsPanel from "@/components/pages/ProfilePage/SettingsPanel";

export default function SettingsPage() {
  return (
    <ProfileShell title="Settings">
      <SettingsPanel />
    </ProfileShell>
  );
}
