"use client";
import React from "react";
import ProfileShell from "@/components/pages/ProfilePage/ProfileShell";
import OverviewPanel from "@/components/pages/ProfilePage/OverviewPanel";

export default function ProfilePage() {
  return (
    <ProfileShell title="Overview">
      <OverviewPanel />
    </ProfileShell>
  );
}
