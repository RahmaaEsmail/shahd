"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmptyState({ icon: Icon, title, description, actionLabel, actionHref }) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-9 h-9 text-primary" />
      </div>
      <h3 className="font-main text-primary uppercase text-xl mb-2">{title}</h3>
      <p className="font-poppins text-text/60 max-w-sm mb-6">{description}</p>
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button className="rounded-full px-8 h-11">{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}
