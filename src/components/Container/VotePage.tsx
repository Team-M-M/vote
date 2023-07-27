'use client'

import { CandidateBox } from '@components/Common/Box/candidate';
import { Spacing } from '@components/Common/Spacing';
import FormProvider from 'lib/Provider/form-provider';
import { useForm } from 'react-hook-form';

interface Props {
  data: { kiho: string; name: string; age: number; profile: string; link: string; id: number }[];
}

const VotePage = ({ data }: Props) => {
  const methods = useForm({ mode: 'onChange' })
  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  })

  return (
    <div className="h-full bg-gray-100 flex justify-center items-center flex-col  px-5">
      <Spacing size={30} />
      <p className="text-4xl font-bold py-4">관리인 투표</p>
      <Spacing size={20} />
      <FormProvider methods={methods} onSubmit={onSubmit} {...{ className: 'w-full' }}>
        {data.map((i, d) => (
          <div className='bg-white rounded-xl w-full mb-4 py-2 pl-2 shadow-sm'>
            <CandidateBox data={i} key={d * 10} />
          </div>
        ))}
      </FormProvider>
      <Spacing size={20} />
      <button className="bg-main mb-10 w-full rounded-lg text-white font-medium px-4 py-3">투표하기</button>
    </div>
  );
};

export default VotePage;
