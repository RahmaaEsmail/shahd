import PackagesClient from "./PackagesClient";
import { Suspense } from "react";
import Loading from "../../loading";

export default function PackagesPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PackagesClient />
    </Suspense>
  );
}
