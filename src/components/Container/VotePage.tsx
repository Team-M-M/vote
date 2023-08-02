import { CandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';
import { useState } from 'react';

// ! form provider & post data 
interface Props {
  data: {
    kiho: string;
    name: string;
    age: number;
    profile: string;
    link: string;
    id: number;
    history1: string;
    history2: string;
    history3: string;
    history4: string;
    history5: string;
  }[];
}

const VotePage = ({ data }: Props) => {
  const callVote = () => {
    console.log(name);
  };
  return (
    <div className="h-full bg-gray-100 flex justify-center items-center flex-col px-10">
      <Spacing size={30} />
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
