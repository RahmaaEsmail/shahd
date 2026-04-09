import Link from 'next/link';
import React from 'react';



export const Breadcrumb = ({ items }) => {
  return (
    <div
      className="flex gap-2 sm:gap-3 md:gap-6 items-center justify-start md:justify-center w-fit uppercase min-h-[44px] md:min-h-[76px] p-2 px-4 md:p-[20px_40px] rounded-full mx-auto border border-white/10 overflow-x-auto hide-scrollbar max-w-[calc(100vw-2rem)]"
      style={{
        background: "rgba(255, 255, 255, 0.126)",
        backdropFilter: "blur(9.24px)",
        WebkitBackdropFilter: "blur(9.24px)",
        boxShadow: `
          inset -0.12px -0.06px 9.24px 0px rgba(255, 255, 255, 0.15),
          0.1px 0.05px 12px -8px rgba(0, 0, 0, 0.15),
          0.6px 0.3px 48px -12px rgba(0, 0, 0, 0.15)
        `,
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className="text-sm sm:text-base md:text-2xl text-[#E1A1A1] font-bold font-poppins border-b md:border-b-2 border-[#E1A1A1] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-sm sm:text-base md:text-2xl font-medium font-poppins text-white whitespace-nowrap">
              {item.label}
            </span>
          )}

          {/* Render separator if not the last item */}
          {index < items.length - 1 && (
            <span className="text-lg md:text-4xl font-light text-white">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};