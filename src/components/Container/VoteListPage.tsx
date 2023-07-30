import { Spacing } from '@components/Common/Spacing';
import Link from 'next/link';

type Vote = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  partner: string;
  start_at: string;
  end_at: string;
  active: boolean;
};

interface Props {
  data: Vote[];
  user: any;
}

export const VoteListContainer = ({ data, user }: Props) => {
  return (
    <main className="justify-start items-center flex-col flex">
      <ToastMessage />
      <Spacing size={20} />
      <section className="bg-main w-11/12 px-3 py-6 text-xl rounded-xl font-semibold text-white">
        <p>{user.name}님!</p>
        <p>제 3차 관리인/관리위원 투표에 참여해주세요.</p>
      </section>
      {data.map(i => (
        <>
          <VoteList data={i} key={i.id} />
        </>
      ))}
    </main>
  );
};

const VoteList = ({ data }: { data: Vote }) => {
  return (
    <>
      <Spacing size={30} />
      <Link
        href={data.active ? `/vote/${data.id}` : ''}
        className={
          data.active
            ? 'block w-11/12 px-4 py-6 bg-white text-xl rounded-xl font-semibold text-gray-600 shadow-md'
            : 'block w-11/12 px-4 py-6 bg-zinc-300 text-xl rounded-xl font-semibold text-gray-600 shadow-md'
        }
        prefetch
      >
        <section>
          <p>{data.title}</p>
          <p>{data.active ? `투표에 참여해주세요.` : `투표 완료 하였습니다.`}</p>
          <Spacing size={10} />
          <div className="text-base font-medium text-gray-500">
            <p>
              투표기간 : {data.start_at} ~ {data.end_at}
            </p>
          </div>
        </section>
      </Link>
    </>
  );
};

const ToastMessage = () => {
  return (
    <div
      id="toast-success"
      className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-main rounded-lg shadow"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-base text-white font-medium">Item moved successfully.</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};
