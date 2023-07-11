import { CandidateBox } from '@components/Common/Box/candidate';

interface Props {
  data: { kiho: string; name: string; age: number; profile: string, link: string; id: number; }[]
}

const VotePage = ({ data }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col  px-10">
      <p className="text-4xl font-bold py-4">관리인 투표</p>
      <div className="h-[40px]"></div>
      {data.map((i, d) => (
        <CandidateBox data={i} key={d * 10} />
      ))}
      <div className="h-[40px]"></div>
      <button className="bg-main w-full rounded-lg text-white font-medium px-4 py-3">투표하기</button>
    </div>
  );
};

export default VotePage;
