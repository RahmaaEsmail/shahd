"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { Mail, Bell, MessageSquare, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useProfileData, useUpdateProfile } from "@/hooks/profile/useProfile";

function Toggle({ checked, onChange, label, description, icon: Icon }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-primary/15 bg-white px-4 py-4">
      <div className="flex items-start gap-3 min-w-0">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon size={16} />
        </span>
        <div className="min-w-0">
          <p className="font-poppins font-medium text-text text-sm">{label}</p>
          <p className="font-poppins text-xs text-text/60 mt-0.5">{description}</p>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200",
          checked ? "bg-primary" : "bg-gray-200"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
}

export default function SettingsPanel() {
  const { t } = useTranslation();
  const user = useCurrentUser();
  const { data: profileResponse, isLoading } = useProfileData(user?.user_id);
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();

  const profile = profileResponse?.data || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.name || user?.name || "");
      setEmail(profile.email || user?.email || "");
      setPhone(profile.phone || user?.phone || "");
    }
  }, [profileResponse, user]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (isUpdating) return;
    updateProfile({
      user_id: user?.user_id,
      name,
      email,
      phone,
    });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (isUpdating) return;
    if (newPassword !== confirmPassword) {
      Swal.fire({ icon: "error", title: t("Error"), text: t("Passwords do not match") });
      return;
    }
    updateProfile(
      {
        user_id: user?.user_id,
        password: newPassword,
      },
      {
        onSuccess: (res) => {
          if (res?.status === "success") {
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
          }
        },
      }
    );
  };

  const handleDeleteAccount = () => {
    Swal.fire({
      icon: "warning",
      title: t("Delete Account"),
      text: t("This action is permanent and cannot be undone."),
      showCancelButton: true,
      confirmButtonText: t("Delete Account"),
      cancelButtonText: t("Cancel"),
      confirmButtonColor: "#ef4444",
    });
  };

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center w-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Personal Information */}
      <section>
        <h2 className="font-poppins font-semibold text-text mb-4">{t("Personal Information")}</h2>
        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-poppins text-xs text-text/60">{t("Full Name")}</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl h-11" />
            </div>
            <div className="space-y-1.5">
              <label className="font-poppins text-xs text-text/60">{t("Email Address")}</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl h-11 pl-9"
                />
              </div>
            </div>
          </div>
          <div className="space-y-1.5 sm:max-w-[calc(50%-0.5rem)]">
            <label className="font-poppins text-xs text-text/60">{t("Phone Number")}</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-xl h-11" />
          </div>
          <Button type="submit" className="rounded-full px-8 h-11 mt-2">
            {t("Save Changes")}
          </Button>
        </form>
      </section>

      {/* Change Password */}
      <section className="pt-8 border-t border-primary/15">
        <h2 className="font-poppins font-semibold text-text mb-4">{t("Change Password")}</h2>
        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-poppins text-xs text-text/60">{t("Current Password")}</label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="rounded-xl h-11"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-poppins text-xs text-text/60">{t("New Password")}</label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="rounded-xl h-11"
              />
            </div>
          </div>
          <div className="space-y-1.5 sm:max-w-[calc(50%-0.5rem)]">
            <label className="font-poppins text-xs text-text/60">{t("Confirm New Password")}</label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-xl h-11"
            />
          </div>
          <Button type="submit" className="rounded-full px-8 h-11 mt-2">
            {t("Update Password")}
          </Button>
        </form>
      </section>

      {/* Preferences */}
      {/* <section className="pt-8 border-t border-primary/15">
        <h2 className="font-poppins font-semibold text-text mb-4">{t("Preferences")}</h2>
        <div className="space-y-3">
          <Toggle
            icon={Bell}
            checked={emailNotifications}
            onChange={setEmailNotifications}
            label={t("Email Notifications")}
            description={t("Receive updates about orders, bookings and offers.")}
          />
          <Toggle
            icon={MessageSquare}
            checked={smsNotifications}
            onChange={setSmsNotifications}
            label={t("SMS Notifications")}
            description={t("Get text alerts for booking reminders.")}
          />
        </div>
      </section> */}

      {/* Danger Zone */}
      {/* <section className="pt-8 border-t border-red-100">
        <h2 className="font-poppins font-semibold text-red-500 mb-4">{t("Danger Zone")}</h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-red-200 bg-red-50/50 px-5 py-4">
          <div>
            <p className="font-poppins font-medium text-text text-sm">{t("Delete Account")}</p>
            <p className="font-poppins text-xs text-text/60 mt-0.5">
              {t("This action is permanent and cannot be undone.")}
            </p>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDeleteAccount}
            className="rounded-full gap-1.5 shrink-0"
          >
            <Trash2 size={14} />
            {t("Delete Account")}
          </Button>
        </div>
      </section> */}
    </div>
  );
}
