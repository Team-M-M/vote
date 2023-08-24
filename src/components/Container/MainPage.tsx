'use client';

import { Spacing } from '@components/Common/Spacing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MainContainer = ({ user }: { user: boolean }) => {
  const router = useRouter();

  useEffect(() => {
    user ? router.prefetch('/my-page') : router.prefetch('/auth');
  }, [user, router]);

  return (
    <main className="bg-main h-full">
      <section className="flex flex-col items-center justify-center py-24 px-3" translate="no">
        <Spacing size={120} />
        <h1 className="text-xl text-yellow-300 font-bold">세상의 모든 투표를 모았다.</h1>
        <h2 className="hidden">전자 투표 앱</h2>
        <Spacing size={10} />
        <p className="text-lg">
          최프로님<sup className="text-2xl">2</sup>
        </p>
        <div className="w-full flex justify-center items-center">
          <span className="text-white font-bold text-8xl pr-1">V</span>
          <Image
            src={'/images/logo.png'}
            alt="logo"
            width={80}
            height={80}
            className="pr-1"
            loading="lazy"
            placeholder="empty"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8uAkAAjoBdVljJRcAAAAASUVORK5CYII="
          />
          <span className="text-white font-bold text-8xl pr-1">T</span>
          <span className="text-white font-bold text-8xl">E</span>
        </div>
        <Spacing size={190} />
        <button
          className={`border-[2px] w-11/12 rounded-xl border-white text-white hover:text-yellow-300 hover:border-yellow-300 hover:scale-90
          font-semibold text-2xl px-4 py-3 scale-100`}
          onClick={() => (user ? router.push('/my-page') : router.push('/auth'))}
        >
          이용하기
        </button>
      </section>
    </main>
  );
};

export default MainContainer;
