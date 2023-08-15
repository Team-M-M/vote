'use client';

import { Input } from '@components/Common/Input';
import { ToastContainer } from '@components/Common/Modal/Toast';
import { Spacing } from '@components/Common/Spacing';
import { API_URL } from '@constants/apiUrl';
import { error } from 'console';
import FormProvider from 'lib/Provider/form-provider';
import { http } from 'lib/http';
import { showToast } from 'lib/toast-message';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

/**
 * ! 1) 간격 조절용 div -> 간격 props로 보기 쉽게
 * ! 2) props의 예외 처리
 * ! 3) 좀 더 세분화 필요
 * @returns
 */
const AccountPage = () => {
  const method = useForm({ mode: 'onChange' });

  const [check, setCheck] = useState(false);
  const [scheck, ssetCheck] = useState(false);
  const [data, setData] = useState<any>();
  const [postData, setPostData] = useState();
  const router = useRouter();

  const onSubmit = method.handleSubmit(async (formData) => {
    try {
      if (await method.trigger('accessKey')) {
        await fetch('/api/test', {
          method: 'POST',
          body: JSON.stringify({
            name: data.name,
            id: data.id,
            address: data.address,
            dongho: data.dongho,
            phone: formData.phone,
          }),
        }).then(res => {
          res.status === 200 && router.push('/my-page');
        });
      }
      throw 'no form'
    }
    catch (err) {

    }
  }, () => showToast({
    type: 'error',
    message: '인증번호를 확인해주세요',
    className: 'w-58 font-semibold',
  }))

  useEffect(() => {
    check &&
      http.post(API_URL.USER_VOTE, { phone: postData }).then((res: any) => {
        setData(res.data);
      });
  }, [check]);

  return (
    <>
      <FormProvider methods={method}>
        <Spacing size={80} />
        <section className="h-5/6 flex justify-center items-center flex-col  px-10">
          <p className="text-2xl font-bold py-4">
            {!check ? '휴대전화 번호를 입력해주세요.' : '인증번호를 입력해주세요.'}
          </p>
          <Spacing size={20} />
          <form onSubmit={onSubmit}>
            <Input label="휴대전화 전화 입력">
              <Input.PhoneField
                trigger={setCheck}
                setdata={setPostData}
                error={ssetCheck}
                {...{
                  placeholder: '010-1234-5678',
                  maxLength: 13,
                }}
              />
            </Input>
            <Spacing size={10} />
            {check && (
              <Input label="인증번호 입력">
                <Input.AccessFiled secret={data?.secret} {...{ placeholder: '000000', maxLength: 6 }} />
              </Input>
            )}
            <Spacing size={24} />
            <button
              disabled={!check}
              id={check ? 'main_btn' : 'btn'}
              className={`${check ? 'bg-main' : 'bg-gray-400'} w-full rounded-lg text-white font-medium px-4 py-3`}
              type='submit'
            >
              확인
            </button>
          </form>
        </section>
        {check && (
          <ToastContainer
            duration={5000}
            transitionPercentage={30}
            // color={'#90c2ff'}
            message={'인증번호가 전송되었습니다.'}
          />
        )}
        {scheck && (
          <ToastContainer
            duration={5000}
            transitionPercentage={30}
            color={'#e53935'}
            message={'번호를 확인해주세요.'}
          />
        )}
      </FormProvider>
    </>
  );
};

export default AccountPage;
