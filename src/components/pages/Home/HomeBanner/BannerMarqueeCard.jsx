// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { slugify } from "../../../../lib/utils";

// export default function BannerMarqueeCard({ img, title, id }) {
//   const router = useRouter();
//   const handleNavigate = () => {
//     router.push(`/services/${id}/${slugify(title)}`);
//   };
//   return (
//     <div onClick={handleNavigate} className="flex gap-2! mx-3 items-center">
//       <Image
//         alt={title}
//         src={img}
//         width={150}
//         height={32}
//         className="rounded-[100px]"
//       />
//       <div className="border-2 cursor-pointer hover:bg-secondary hover:border-secondary hover:text-primary transition-all flex justify-center items-center text-base font-bold rounded-[100px] text-secondary p-[14px_24px] h-13 border-primary">
//         <p className="font-bold font-inter!">{title}</p>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { slugify } from "../../../../lib/utils";

export default function BannerMarqueeCard({ img, title, id }) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/services/${id}/${slugify(title)}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex gap-2! mx-3 items-center cursor-pointer h-13"
    >
      {/* Wrapper to control aspect ratio and full height matching */}
      <div className="relative h-full aspect-[150/32] shrink-0">
        <Image
          alt={title}
          src={img}
          fill
          className="rounded-[100px] object-cover"
        />
      </div>

      <div className="border-2 hover:bg-secondary hover:border-secondary hover:text-primary transition-all flex justify-center items-center text-base font-bold rounded-[100px] text-secondary p-[14px_24px] h-full border-primary">
        <p className="font-bold font-inter!">{title}</p>
      </div>
    </div>
  );
}
