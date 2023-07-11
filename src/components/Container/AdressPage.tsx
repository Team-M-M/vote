'use client';
import { BackHeader } from '@components/Common/Header/backHead';
import { useRouter } from 'next/navigation';

export function AdressPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center flex-col  px-10">
      <h1 className="text-main text-center text-2xl font-bold">하남 미사 푸르지오시티 A동</h1>
      <div className="h-[40px]"></div>
      <div className="text-2xl">
        <h2 className="font-semibold text-gray-500">
          안녕하세요.{'\u00A0'}
          <strong className="text-main px-2">노기정님!</strong>
        </h2>
      </div>
      <div className="h-[40px]"></div>
      <div className="py-3 w-full">
        <button
          className="bg-main w-full rounded-lg text-white font-semibold px-4 py-4"
          onClick={() => router.push(`${location.pathname}/vote`)}
        >
          투표하로 가기
        </button>
      </div>
      <div className="py-3 w-full">
        <button
          className="bg-main w-full rounded-lg text-white font-semibold px-4 py-4"
          onClick={() => router.push(`${location.pathname}/situation`)}
        >
          투표결과 보기
        </button>
      </div>
    </div>
  );
}
