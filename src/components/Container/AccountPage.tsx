'use client';

import { InputWrapper } from '@app/auth/_components/account-molecule';
import { Button } from '@components/Common/Button';
import { Input } from '@components/Common/Input';
import { Spacing } from '@components/Common/Spacing';
import { API_URL } from '@constants/apiUrl';
import { changePhone } from '@utils/formatting';
import FormProvider from 'lib/Provider/form-provider';
import { http } from 'lib/http';
import { fetchToast, showToast } from 'lib/toast-message';
import { FormType } from 'lib/validation/account.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AccountPage = () => {
  const method = useForm<FormType>({ mode: 'onSubmit' });

  const [check, setCheck] = useState(false);
  const [data, setData] = useState<any>();
  const router = useRouter();

  const onSubmit = method.handleSubmit(
    async formData => {
      const { name, id, address, dongho } = data.data;
      await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          id: id,
          address: address,
          dongho: dongho,
          phone: formData.phone,
        }),
      })
        .then(res => {
          res.status === 200 && router.push('/my-page');
        })
        .catch(err => {
          console.log(err);
        });
    },
    () =>
      showToast({
        type: 'error',
        message: '인증번호를 확인해주세요',
        className: 'w-58 font-semibold',
      })
  );

  return (
    <>
      <FormProvider methods={method}>
        <Spacing size={80} />
        <section className="h-5/6 flex justify-center items-center flex-col px-10">
          <p className="text-2xl font-bold py-4">
            {!(data?.code === 1000 && check) ? '휴대전화 번호를 입력해주세요.' : '인증번호를 입력해주세요.'}
          </p>
          <Spacing size={20} />
          <form onSubmit={onSubmit}>
            <InputWrapper {...{ setCheck, setData, data, validation: data?.code === 1000 && check }} />
            <Spacing size={24} />
            <Button
              bgColor={method.formState.isValid ? 'bg-main' : 'bg-gray-400'}
              {...{ type: 'submit', id: check ? 'main_btn' : 'btn', disabled: !(data?.code === 1000 && check) }}
            >
              확인
            </Button>
          </form>
        </section>
      </FormProvider>
    </>
  );
};

export default AccountPage;

{
  /* {check && (
  <ToastContainer
    duration={5000}
    transitionPercentage={30}
    // color={'#90c2ff'}
    message={'인증번호가 전송되었습니다.'}
  />
)} */
}
