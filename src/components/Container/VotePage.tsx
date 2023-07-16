import { CandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';

interface Props {
  data: { kiho: string; name: string; age: number; profile: string; link: string; id: number }[];
}

const VotePage = ({ data }: Props) => {
  return (
    <div className="h-full flex justify-center items-center flex-col  px-10">
      <Spacing size={90} />
      <p className="text-4xl font-bold py-4">관리인 투표</p>
      <Spacing size={20} />
      {data.map((i, d) => (
        <CandidateBox data={i} key={d * 10} />
      ))}
      <Spacing size={40} />
      <button className="bg-main mb-10 w-full rounded-lg text-white font-medium px-4 py-3">투표하기</button>
    </div>
  );
};

export default VotePage;
