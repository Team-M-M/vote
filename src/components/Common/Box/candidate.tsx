'use client';
import { CheckBox } from './checkBox';
import { useState } from 'react';
import { ProfileModal } from '../Modal/Profile';

export const CandidateBox = ({ data }: { data?: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 flex items-center justify-between w-full px-4">
      <CheckBox />
      <div>
        <p className="text-black font-semibold text-2xl">기호 1번 노기정</p>
        <p className="text-main text-lg" onClick={() => setOpen(pre => !pre)}>
          프로필 보기
        </p>
      </div>
      <ProfileModal open={open} setOpen={setOpen} />
    </div>
  );
};
