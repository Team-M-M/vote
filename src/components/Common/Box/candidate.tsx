'use client';
import { CheckBox } from './checkBox';
import { useState } from 'react';
import { ProfileModal } from '../Modal/Profile';
import { AgreeBox } from './agreeBox';

export const CandidateBox = ({ data, type }: { data: any, type: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 flex items-center justify-between w-full px-4">
      <CheckBox type={type} name={data.name} />
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

export const AgreeCandidateBox = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 w-full flex items-center justify-between px-4 bg-white rounded-lg shadow-md">
      <div className='flex-1'>
        <p className="text-black font-semibold text-2xl">
          {data.kiho} {data.name}
        </p>
        <p className="text-main text-lg font-medium" onClick={() => setOpen(pre => !pre)}>
          프로필 보기
        </p>
      </div>
      <AgreeBox value={'true'} name={data.name} />
      <AgreeBox value={'false'} name={data.name} />
      <ProfileModal open={open} setOpen={setOpen} data={data} />
    </div>
  );
}
