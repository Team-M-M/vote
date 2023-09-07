'use client';
import { AgreeCandidateBox, CandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';
import { SignModal } from '@components/Modal';
import FormProvider from 'lib/Provider/form-provider';
import { showToast } from 'lib/toast-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';

// ! form provider & post data

export type VoteData = {
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
// ! 후보자 선택 없 -> 버튼 비활성화

const VotePage = ({ data, desc, title, userData }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const methods = useForm({ mode: 'onChange' });

  const onSubmit = methods.handleSubmit(
    async data => {
      const arrayData = Object.values(data);
      try {
        if (arrayData.length === 1) {
          setOpen(pre => !pre);
        } else if (arrayData.some(i => i === 'true') && arrayData.filter(i => i === 'true').length < 6) {
          setOpen(pre => !pre);
        } else {
          throw 'no data';
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
          <div className="py-3 w-full px-4 text-white bg-main rounded-lg shadow-md">
            <p className="text-3xl font-bold py-4">{title} 투표</p>
            {/* ! 모달로 띄울생각 */}
            {desc.map((item, i) => {
              return (
                <p className="text-sm" key={i * 12}>
                  💡 {item.description}
                </p>
              );
            })}
            <p className="text-sm">💡 이미 완료한 투표는 수정할 수 없으므로 신중하게 해주세요</p>
            <section className="w-full flex items-center justify-between pt-2">
              <p className="flex-1">후보자</p>
              <p className="mx-2">찬성</p>
              <p className="mx-2">반대</p>
            </section>
          </div>
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
