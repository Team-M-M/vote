'use client';
import { CandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';
import { SignModal } from '@components/Modal';
import FormProvider from 'lib/Provider/form-provider';
import { http } from 'lib/http';
import { fetchToast, showToast } from 'lib/toast-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'

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
  userData: {
    name: string,
    userId: number,
    phone: string,
    id: string
  }
}
// ! 후보자 선택 없 -> 버튼 비활성화 

const VotePage = ({ data, title, userData }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const methods = useForm(/* { resolver: yupResolver(validation) } */{
    // defaultValues: {
    //   checked: data[0].name
    // },
    mode: "onChange",
  })

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      if (!_.isEmpty(data.checked)) {
        setOpen(pre => !pre)
      } else {
        throw 'no data'
      }
    } catch (error) {
      console.error(error);
      showToast({ type: 'error', message: '후보자를 선택해주세요!', className: 'w-56 font-semibold' });
    }
  }, () => console.log('err :::'));

  return (
    <>
      <FormProvider methods={methods}>
        <div className="h-full bg-gray-100 flex justify-center items-center flex-col px-10">
          <Spacing size={30} />
          <p className="text-4xl font-bold py-4">{title} 투표</p>
          <Spacing size={20} />

          <form onSubmit={onSubmit} className='w-full'>
            {data.map((i, d) => (
              <CandidateBox data={i} key={d * 10} />
            ))}
            <Spacing size={40} />
            <button
              type='submit'
              className="bg-main mb-10 w-full rounded-lg text-white font-medium px-4 py-3"
            >
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
