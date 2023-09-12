'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const wd = window as any;
    const url = `${pathname}?${searchParams}`;
    console.log(url, 'change url :::');
    wd.gtag('config', 'G-JXSHQE9ZM3', {
      page_path: wd.location.pathname,
    });
  }, [pathname, searchParams]);

  return null;
}

//! 페이지 접속 조회  https://developers.google.com/analytics/devguides/collection/gtagjs/pages

//! 페이지 이벤트 조회  https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = (
//   action: Gtag.EventNames,
//   { event_category, event_label, value }: Gtag.EventParams,
// ) => {
//   window.gtag('event', action, {
//     event_category,
//     event_label,
//     value,
//   });
// };
