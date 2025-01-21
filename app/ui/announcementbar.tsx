"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const marqueeItems = [
  {
    text: "WAREHOUSE SALE IS LIVE!",
    link: "#",
    linkText: "30% off 2+ cases. No code needed",
  },
  {
    text: "FREE SHIPPING ON ORDERS OVER $40.00",
  },
  {
    text: "WAREHOUSE SALE IS LIVE!",
    link: "#",
    linkText: "30% off 2+ cases. No code needed",
  },
  {
    text: "FREE SHIPPING ON ORDERS OVER $40.00",
  },
  {
    text: "WAREHOUSE SALE IS LIVE!",
    link: "#",
    linkText: "30% off 2+ cases. No code needed",
  },
  {
    text: "FREE SHIPPING ON ORDERS OVER $40.00",
  },
  {
    text: "WAREHOUSE SALE IS LIVE!",
    link: "#",
    linkText: "30% off 2+ cases. No code needed",
  },
  {
    text: "FREE SHIPPING ON ORDERS OVER $40.00",
  },
];

const AnnouncementBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className={` ${isHomePage ? 'bg-transparent' : "bg-black"} border-t-[1px] z-[99] relative border-b-[1px] border-white overflow-hidden`}>
      <div className='flex'>
        <Marquee />
      </div>
    </div>
  );
}

const Marquee = () => {
  return (
    <div className="marquee-block flex gap-12 py-1" style={{ animationDuration: "50s" }}>
      {marqueeItems.map((item, index) => (
        <span className='flex gap-12 flex-nowrap text-white whitespace-nowrap text-sm font-[SpaceMono-reg]' key={index}>
          <strong>{item.text}</strong>
          {item.link && (
            <Link
              href={item.link}
              tabIndex={-1}
              title={item.linkText}
              data-page-transition="internal"
              className="underline" // Optional: Add underline for links
            >
              {item.linkText}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

export default AnnouncementBar;
