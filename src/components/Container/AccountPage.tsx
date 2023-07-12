'use client';

import { Input } from '@components/Common/Input';
import { http } from 'lib/http';
import { useState } from 'react';

const AccountPage = () => {
  const [check, setCheck] = useState(false);

  // const data = http.post('/office/user', { phone: "010-4628-3563" })

  return (
    <section className="h-screen flex justify-center items-center flex-col  px-10">
      <p className="text-2xl font-bold py-4">{!check ? '휴대전화 번호를 입력해주세요.' : '인증번호를 입력해주세요.'}</p>
      <div className="h-[20px]"></div>
      <form action="" onSubmit={() => { }} className='w-full'>
        <Input label="휴대전화 전화 입력">
          <Input.TextField />
        </Input>
        <div className="h-[10px]"></div>
        {check && (
          <Input label="인증번호 입력">
            <Input.TextField />
          </Input>
        )}
      </form>
      <div className="h-[24px]"></div>
      <button
        id='main_btn'
        className="bg-main w-full rounded-lg text-white font-medium px-4 py-3"
        onClick={() => setCheck(pre => !pre)}
      >
        확인
      </button>
      {/* <KeyButton size="large" {...{ style: { ...{ width: '100%' } } }}>완료</KeyButton> */}
    </section>
  );
};

export default AccountPage;
