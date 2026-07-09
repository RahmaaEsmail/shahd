import { Suspense } from "react";
import BookingClient from "./BookingClient";
import Loading from "../../loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <BookingClient />
    </Suspense>
  );
}
