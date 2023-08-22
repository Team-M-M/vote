'use client';

import { Spacing } from '@components/Common/Spacing';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AdressPage({ data }: any) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/vote`);
    router.prefetch(`/vote/situation`);
  }, [router]);

  return (
    <div className="h-full flex justify-center items-center flex-col  px-10">
      <Spacing size={100} />
      <img src={'/images/group-300.png'} className="h-full" loading="lazy" alt="배경이미지" />
      <Spacing size={20} />
      <h1 className="text-main text-center text-2xl font-bold">{data.address}</h1>
      <Spacing size={20} />
      <div className="text-2xl">
        <h2 className="font-semibold text-gray-500">
          안녕하세요.{'\u00A0'}
          <strong className="text-main px-2">{data.name}님!</strong>
        </h2>
      </div>
      <Spacing size={60} />
      <div className="w-full">
        <button
          id="main_btn"
          className="bg-main w-full rounded-lg text-white text-base font-semibold px-4 py-3"
          onClick={() => router.push(`/vote`)}
        >
          투표하러 가기
        </button>
      </div>
      <Spacing size={10} />
      <div className="w-full">
        <button
          id="main_btn"
          className="bg-main w-full rounded-lg text-white text-base font-semibold px-4 py-3"
          onClick={() => router.push(`https://www.vote24.co.kr/page/00-service-intro/03-misa.html`)}
        >
          투표안내 보기
        </button>
      </div>
    </div>
  );
}
