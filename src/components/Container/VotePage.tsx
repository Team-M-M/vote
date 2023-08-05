'use client';
import { CandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';
import { SignModal } from '@components/Modal';
import FormProvider from 'lib/Provider/form-provider';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// ! form provider & post data
interface Props {
  title: string;
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
// ! 후보자 선택 없 -> 버튼 비활성화 

const VotePage = ({ data, title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const methods = useForm()

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const tostMessage = () => toast('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className: 'w-64 flex justify-center items-center'
  });


  return (
    <>
      <div className="h-full bg-gray-100 flex justify-center items-center flex-col px-10">
        <Spacing size={30} />
        <p className="text-4xl font-bold py-4">{title} 투표</p>
        <Spacing size={20} />
        <FormProvider methods={methods} onSubmit={onSubmit}>
          {data.map((i, d) => (
            <CandidateBox data={i} key={d * 10} />
          ))}
          <Spacing size={40} />
          <button
            className="bg-main mb-10 w-full rounded-lg text-white font-medium px-4 py-3"
            onClick={() => {
              setOpen(pre => !pre)
              tostMessage()
            }}
          >
            투표하기
          </button>
        </FormProvider>
      </div>
      <SignModal open={open} setOpen={setOpen} />
    </>
  );
};

export default VotePage;
