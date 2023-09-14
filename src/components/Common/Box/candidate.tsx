'use client';
import { CheckBox, CheckBoxType } from './checkBox';
import { useState } from 'react';
import { ProfileModal } from '../Modal/Profile';
import Image from 'next/image';

export const CandidateBox = ({ data, type }: { data: any; type: CheckBoxType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 flex items-center justify-between w-full px-4">
      <CheckBox type={type} name={data.name} value={data.name} />
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
      <figure className="ml-1 mr-5">
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={30}
          height={30}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8uAkAAjoBdVljJRcAAAAASUVORK5CYII="
        />
      </figure>
      <div className="flex-1">
        <p className="text-black font-semibold text-xl">
          {data.kiho} {data.name}
        </p>
        <p className="text-main text-base font-medium" onClick={() => setOpen(pre => !pre)}>
          프로필 보기
        </p>
      </div>
      <CheckBox value={'true'} name={data.name} />
      <CheckBox value={'false'} name={data.name} />
      <ProfileModal open={open} setOpen={setOpen} data={data} />
    </div>
  );
};
