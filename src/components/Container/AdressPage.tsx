'use client';

import { useRouter } from 'next/navigation';

export function AdressPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center flex-col  px-10" style={{ background: `url(/images/group-300.png) no-repeat center 160px` }}>
      <div className="h-[90px]"></div>
      <h1 className="text-main text-center text-2xl font-bold">하남 미사 푸르지오시티 A동</h1>
      <div className="h-[20px]"></div>
      <div className="text-2xl">
        <h2 className="font-semibold text-gray-500">
          안녕하세요.{'\u00A0'}
          <strong className="text-main px-2">노기정님!</strong>
        </h2>
      </div>
      <div className="h-[60px]"></div>
      <div className="w-full">
        <button
          id="main_btn"
          className="bg-main w-full rounded-lg text-white text-base font-semibold px-4 py-3"
          onClick={() => router.push(`${location.pathname}/vote`)}
        >
          투표하러 가기
        </button>
      </div>
      <div className="h-[10px]"></div>
      <div className="w-full">
        <button
          id="main_btn"
          className="bg-main w-full rounded-lg text-white text-base font-semibold px-4 py-3"
          onClick={() => router.push(`${location.pathname}/situation`)}
        >
          투표결과 보기
        </button>
      </div>
    </div>
  );
}
