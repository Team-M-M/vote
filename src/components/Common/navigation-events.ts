'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styledConsole from '@utils/console/styledConsole';
// import path from 'path';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const wd = window as any;
    const url = `${pathname}${searchParams}`;
    console.log(pathname, searchParams.toString());
    styledConsole({ data: url, topic: 'url', title: 'change url :::', topicColor: 'tomato' });
    wd.gtag('config', 'G-JXSHQE9ZM3', {
      page_path: wd.location.pathname,
    });
    if (searchParams.toString().includes('title')) {
      AnalyticEvent({ action: 'view', category: 'a_link', label: EventObj.title });
    } else {
      AnalyticEvent({ action: 'view', category: 'a_link', label: EventObj[pathname as keyof typeof EventObj] });
    }
  }, [pathname, searchParams]);

  return null;
}

//! 페이지 접속 조회  https://developers.google.com/analytics/devguides/collection/gtagjs/pages

//! 페이지 이벤트 조회  https://developers.google.com/analytics/devguides/collection/gtagjs/events

export const AnalyticEvent = ({ action, category, label }: any) => {
  const wd = window as any;
  return wd.gtag('event', action, {
    event_category: category,
    event_label: label,
    // value: value,
  });
};

const EventObj = {
  '/': '메인 페이지',
  '/auth/': '로그인 페이지',
  '/my-page/': '마이 페이지',
  '/vote/': '투표 리스트 페이지',
  title: '투표 상세 페이지',
};
