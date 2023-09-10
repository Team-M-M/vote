'use client';
import { AgreeCandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';
import { VoteInfo } from '@components/Common/Vote';
import { SignModal } from '@components/Modal';
import FormProvider from 'lib/Provider/form-provider';
import { showToast } from 'lib/toast-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// ! form provider & post data

export type VoteData = {
  kiho: string;
  name: string;
  age: number;
  profile: string;
  link: string;
  id: number;
};

export type Description = {
  sequence: number;
  description: string;
};

interface Props {
  title: string;
  majority: string;
  data: VoteData[];
  desc: Description[];
  userData: {
    name: string;
    dongho: string;
    userId: number;
    phone: string;
    id: string;
  };
}

const VotePage = ({ data, desc, title, userData }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const methods = useForm({ mode: 'onSubmit' });

  const onSubmit = methods.handleSubmit(
    async data => {
      const arrayData = Object.values(data);
      try {
        if (arrayData.length === 1) {
          // ! 리스트가 1개일 때
          setOpen(pre => !pre);
        } else if (arrayData.some(i => i === 'true') && arrayData.filter(i => i === 'true').length < 6) {
          // ! 1 ~ 5개 선택
          setOpen(pre => !pre);
        } else {
          throw new Error('no data');
        }
      } catch (error) {
        console.error(error);
        showToast({
          type: 'error',
          message: '투표 안내를 참고해주세요',
          className: 'w-58 font-semibold',
        });
      }
    },
    () => showToast({ type: 'error', message: '모두 선택해주세요', className: 'w-58 font-semibold' })
  );

  return (
    <>
      <FormProvider methods={methods}>
        <div className="h-full bg-gray-100 flex justify-center items-center flex-col px-7">
          <Spacing size={30} />
          <VoteInfo title={title} desc={desc} />
          <Spacing size={20} />

          <form onSubmit={onSubmit} className="w-full">
            {data.map(i => (
              <section key={i.name}>
                <AgreeCandidateBox data={i} />
                <Spacing size={10} />
              </section>
            ))}
            <Spacing size={40} />
            <button type="submit" className="bg-main mb-10 w-full rounded-lg text-white font-medium px-4 py-3">
              투표하기
            </button>
          </form>
        </div>
        <SignModal open={open} setOpen={setOpen} userData={userData} />
      </FormProvider>
    </>
  );
};

export default VotePage;
