"use client";

import AestheticGynecologyBanner from "../../../components/pages/AestheticGynecology/AestheticGynecologyBanner/AestheticGynecologyBanner";
import AestheticGynecologyMeetShahd from "../../../components/pages/AestheticGynecology/AestheticGynecologyMeetShahd/AestheticGynecologyMeetShahd";
import AestheticGynecologyBooking from "../../../components/pages/AestheticGynecology/AestheticGynecologyBooking/AestheticGynecologyBooking";
import AboutAestheticGynecolory from "../../../components/pages/AestheticGynecology/AboutAestheticGynecolory/AboutAestheticGynecolory";
import AestheticGynecoloryTreatments from "../../../components/pages/AestheticGynecology/AestheticGynecoloryTreatments/AestheticGynecoloryTreatments";
import AestheticGynecologyGuide from "../../../components/pages/AestheticGynecology/AestheticGynecologyGuide/AestheticGynecologyGuide";
import StoreFaq from "../../../components/pages/storePage/StoreFaq/StoreFaq";
import AestheticGynecologyTestimonial from "../../../components/pages/AestheticGynecology/AestheticGynecologyTestimonial/AestheticGynecologyTestimonial";
import { useAethetic } from "../../../hooks/aethetic/useAethetic";
import Loading from "../../loading";
import { useTranslation } from "react-i18next";

export default function page() {
  const { data, isLoading } = useAethetic();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : i18n.language?.startsWith("sk") ? "sk" : "en";

  if (isLoading) {
    return <Loading />;
  }

  console.log("Aethetic data", data);

  const resolvedFaqs = data?.data?.aesthetic_gynecology_faq
    ? data.data.aesthetic_gynecology_faq.map(faq => ({
        id: faq.id,
        question: faq[`question_${lang}`] || faq.question_en,
        answer: faq[`answer_${lang}`] || faq.answer_en,
      }))
    : undefined;

  return (
    <div>
      <AestheticGynecologyBanner data={data?.data?.aesthetic_gynecology_banner} />
      <AestheticGynecologyMeetShahd data={data?.data?.aesthetic_gynecology_about} />
      <AboutAestheticGynecolory />
      <AestheticGynecoloryTreatments />
      <AestheticGynecologyGuide data={data?.data?.aesthetic_gynecology_journey} />
      <AestheticGynecologyTestimonial />
      <AestheticGynecologyBooking />
      <StoreFaq is_main={true} data={resolvedFaqs} />
    </div>
  );
}
