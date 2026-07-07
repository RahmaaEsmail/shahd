"use client";
import CoachingBanner from "@/components/pages/coaching/CoachingBanner/CoachingBanner";
import StoreFaq from "@/components/pages/storePage/StoreFaq/StoreFaq";
import CoachingAbout from "@/components/pages/coaching/CoachingAbout/CoachingAbout";
import CoachingExpert from "@/components/pages/coaching/CoachingExpert/CoachingExpert";
import { useCoaching } from "../../../hooks/coaching/useCoaching";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";

export default function CoachingClient() {
  const { data, isLoading } = useCoaching();
  const { i18n } = useTranslation();

  console.log("coaching data", data);

  if (isLoading) {
    return <Loading />;
  }

  const lang = i18n.language?.startsWith("ar")
    ? "ar"
    : i18n.language?.startsWith("sk")
      ? "sk"
      : "en";

  const dynamicFaqs = data?.data?.faqs;
  const mappedFaqs =
    dynamicFaqs && dynamicFaqs.length > 0
      ? dynamicFaqs.map((faq) => ({
          id: faq.id,
          question: faq.question,
          answer: faq.answer,
        }))
      : undefined;

  return (
    <div>
      <CoachingBanner data={data?.data?.coaching_banner} />
      <CoachingExpert data={data?.data?.coaching_guidance} />
      <CoachingAbout />
      <StoreFaq is_main={false} data={mappedFaqs} />
    </div>
  );
}
