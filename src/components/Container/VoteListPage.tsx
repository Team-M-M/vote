import { Spacing } from "@components/Common/Spacing";
import Link from "next/link";

type Vote = {
  id: number;
  createdAt: string,
  updatedAt: string,
  title: string,
  content: string,
  partner: string,
  start_at: string,
  end_at: string,
  active: boolean
}

interface Props {
  data: Vote[];
  user: any;
}

export const VoteListContainer = ({ data, user }: Props) => {

  return (
    <main className="justify-start items-center flex-col flex">
      <Spacing size={20} />
      <section className="bg-main w-11/12 px-3 py-6 text-xl rounded-xl font-semibold text-white">
        <p>{user.name}님</p>
        <p>투표에 참여해주세요.</p>
      </section>
      {data.map(i => (
        <>
          <VoteList data={i} key={i.id} />
          {/* <VoteList data={i} key={i.id} /> */}
        </>
      ))}
    </main>
  )
}

const VoteList = ({ data }: { data: Vote }) => {

  return (
    <>
      <Spacing size={30} />
      <Link href={`/vote/${data.id}`} className="block w-11/12 px-4 py-6 bg-white text-xl rounded-xl font-semibold text-gray-600 shadow-md" prefetch >
        <section className="" >
          <p>{data.title}</p>
          <p>투표에 참여해주세요.</p>
          <Spacing size={10} />
          <div className="text-base font-medium text-gray-500">
            <p>투표시작  {data.start_at}</p>
            <p>투표종료  {data.end_at}</p>
          </div>
        </section>
      </Link>
    </>
  )
}