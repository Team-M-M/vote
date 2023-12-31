'use client';

import Link from 'next/link';
import { Spacing } from '../Spacing';
import { showToast } from 'lib/toast-message';
import { Vote } from '@components/Container/VoteListPage';
import { useRouter } from 'next/navigation';
import { useInsertionEffect, useLayoutEffect } from 'react';

export const VoteList = ({ data }: { data: Vote }) => {
  const router = useRouter();

  useLayoutEffect(() => {
    router.refresh();
  }, []);

  return (
    <>
      <Spacing size={30} />
      <Link
        href={data.active ? `/vote/${data.id}?title=${data.title}&majority=${data.style}` : ''}
        className={data.active ? Style.visible.class : Style.invisible.class}
        onClick={() =>
          !data.active &&
          showToast({ type: 'error', message: '이미 참여한 투표에요!', className: 'w-56 font-semibold' })
        }
        prefetch
      >
        <section>
          <p>{data.title} 투표</p>
          <p>{data.active ? Style.visible.title : Style.invisible.title}</p>
          <Spacing size={10} />
          <div className="text-base font-medium text-gray-500">
            <div className="flex">
              <p className="">투표기간 :&nbsp;</p>
              <div className="flex-col">
                <p>{data.start_at} ~</p>
                <p>{data.end_at}</p>
              </div>
            </div>
            <p>투표방법 : {data.content}</p>
          </div>
        </section>
      </Link>
    </>
  );
};

const Style = Object.freeze({
  visible: {
    class: 'block w-11/12 px-4 py-6 bg-white text-xl rounded-xl font-semibold text-gray-600 shadow-md',
    title: '투표에 참여해주세요.',
  },
  invisible: {
    class: 'block w-11/12 px-4 py-6 bg-zinc-300 text-xl rounded-xl font-semibold text-gray-600 shadow-md',
    title: '투표에 참여하셨습니다.',
  },
});
