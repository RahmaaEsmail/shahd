import React from "react";
import { service_data } from "@/data/serviceData";
import { slugify } from "@/lib/utils";
import ServiceDetailsClient from "./ServiceDetailsClient";

export async function generateStaticParams() {
  return service_data.map((service) => ({
    id: service.id.toString(),
    slug: slugify(service.title) || "eyes-brows",
  }));
}

export default async function ServiceDetailsPage({ params }) {
  const { id, slug } = await params;
  return <ServiceDetailsClient id={id} slug={slug} />;
}
