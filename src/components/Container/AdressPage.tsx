'use client';

import { Spacing } from '@components/Common/Spacing';
import { useRouter } from 'next/navigation';

export function AdressPage({ data }: any) {
  const router = useRouter();

  return (
    <div
      className="h-full flex justify-center items-center flex-col  px-10"
    // style={{ background: `url(/images/group-300.png) no-repeat center 160px` }}
    >
      <Spacing size={100} />
      <img src={'/images/group-300.png'} className='h-full' />
      <Spacing size={20} />
      <h1 className="text-main text-center text-2xl font-bold">{data.detail}</h1>
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
          onClick={() => router.push(`/vote/situation`)}
        >
          투표결과 보기
        </button>
      </div>
    </div>
  );
}
