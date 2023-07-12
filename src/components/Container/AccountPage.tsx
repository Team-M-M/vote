'use client';

import { Input } from '@components/Common/Input';
import { ToastContainer } from '@components/Common/Modal/Toast';
import { http } from 'lib/http';
import { useState } from 'react';

const AccountPage = () => {
  const [check, setCheck] = useState(false);

  // const data = http.post('/office/user', { phone: "010-4628-3563" })

  return (
    <>
      <section className="h-4/5 flex justify-center items-center flex-col  px-10">
        <p className="text-2xl font-bold py-4">{!check ? '휴대전화 번호를 입력해주세요.' : '인증번호를 입력해주세요.'}</p>
        <div className="h-[20px]"></div>
        <form action="" onSubmit={() => { }} className='w-full'>
          <Input label="휴대전화 전화 입력">
            <Input.TextField  {... { name: '마크노', trigger: setCheck, placeholder: '010-1234-5678', maxLength: 13 }} />
          </Input>
          <div className="h-[10px]"></div>
          {check && (
            <Input label="인증번호 입력">
              <Input.TextField {...{ placeholder: '000000', maxLength: 6 }} />
            </Input>
          )}
        </form>
        <div className="h-[24px]"></div>
        <button
          disabled={!check}
          id='main_btn'
          className={`${check ? 'bg-main' : 'bg-gray-400'} w-full rounded-lg text-white font-medium px-4 py-3`}
          onClick={() => setCheck(pre => !pre)}
        >
          확인
        </button>
        {/* <KeyButton size="large" {...{ style: { ...{ width: '100%' } } }}>완료</KeyButton> */}
      </section>
      {check && <ToastContainer duration={5000} transitionPercentage={30} color={'#90c2ff'} message={'인증번호가 전송되었습니다.'} />}
    </>
  );
};

// const message = {
//   '-1000': '',
//   '1000': '인증번호가 전송되었습니다.'
// }

// const TYPE_VARIANTS = {
//   primary: {
//     color: colors.grey50,
//     backgroundColor: colors.blue500,
//     '&:hover': {
//       backgroundColor: colors.blue600,
//     },
//   },
//   secondary: {
//     color: colors.grey700,
//     backgroundColor: colors.grey100,
//     '&:hover': {
//       backgroundColor: colors.grey300,
//     },
//   },
// };

// const SIZE_VARIANTS = {
//   medium: {
//     fontSize: '15px',
//     padding: '11px 16px',
//   },
//   large: {
//     fontSize: '17px',
//     padding: '11px 22px',
//   },
// };


export default AccountPage;
