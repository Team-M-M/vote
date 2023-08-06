'use client';
import { CheckBox } from './checkBox';
import { useState } from 'react';
import { ProfileModal } from '../Modal/Profile';

export const CandidateBox = ({ data }: { data?: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 flex items-center justify-between w-full px-4">
      <CheckBox type={'checkbox'} name={data.name} />
      <div>
        <p className="text-black font-semibold text-2xl">
          {data.kiho} {data.name}
        </p>
        <p className="text-main text-lg font-medium" onClick={() => setOpen(pre => !pre)}>
          프로필 보기
        </p>
      </div>
      <ProfileModal open={open} setOpen={setOpen} data={data} />
    </div>
  );
};
