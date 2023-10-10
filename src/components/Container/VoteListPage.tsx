import { Spacing } from '@components/Common/Spacing';
import { VoteList } from '@components/Common/Vote/VoteList';

export type Vote = {
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
      {data?.map(i => (
        <>
          <VoteList data={i} key={i.id} />
        </>
      ))}
      <Spacing size={30} />
    </main>
  );
};
