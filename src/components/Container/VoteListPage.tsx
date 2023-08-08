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
  style: number;
  active: boolean;
};

interface Props {
  title: any;
  data: Vote[];
  user: any;
}

export const VoteListContainer = ({ title, data, user }: Props) => {
  return (
    <main className="justify-start items-center flex-col flex">
      <Spacing size={20} />
      <section className="bg-main w-11/12 px-3 py-6 text-xl rounded-xl font-semibold text-white">
        <p>{user.name}님!</p>
        <p>{title}</p>
      </section>
      {data.map(i => (
        <>
          <VoteList data={i} key={i.id} />
        </>
      ))}
    </main>
  );
};

//style = 1 단명 투표 / style = 2 여러명 투표
const VoteList = ({ data }: { data: Vote }) => {
  return (
    <>
      <Spacing size={30} />
      <Link
        href={data.active ? `/vote/${data.id}?title=${data.title}&majority=${data.style}` : ''}
        className={
          data.active
            ? Style.visible.class
            : Style.invisible.class
        }
        prefetch
      >
        <section>
          <p>{data.title} 투표</p>
          <p>{data.active ? Style.visible.title : Style.invisible.class}</p>
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

const Style = {
  visible: {
    class: 'block w-11/12 px-4 py-6 bg-white text-xl rounded-xl font-semibold text-gray-600 shadow-md',
    title: '투표에 참여해주세요.'
  },
  invisible: {
    class: 'block w-11/12 px-4 py-6 bg-zinc-300 text-xl rounded-xl font-semibold text-gray-600 shadow-md',
    title: '투표에 참여하셨습니다.'
  }
}
