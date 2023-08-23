'use client';

import { Input } from '@components/Common/Input';
import { Spacing } from '@components/Common/Spacing';
import FormProvider from 'lib/Provider/form-provider';
import { showToast } from 'lib/toast-message';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

/**
 * ! 1) 간격 조절용 div -> 간격 props로 보기 쉽게
 * ! 2) props의 예외 처리
 * ! 3) 좀 더 세분화 필요
 * @returns
 */
const AccountPage = () => {
  const method = useForm({ mode: 'onChange' });

  const [check, setCheck] = useState(false);
  const [data, setData] = useState<any>();
  const router = useRouter();

  const onSubmit = method.handleSubmit(
    async formData => {
      // ! 추후 핸들링에 유용할 메소드
      if (await method.trigger('accessKey')) {
        const {
          data: { name, id, address, dongho },
        } = data;
        await fetch('/api/test', {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            id: id,
            address: address,
            dongho: dongho,
            phone: formData.phone,
          }),
        }).then(res => {
          res.status === 200 && router.push('/my-page');
        });
      }
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
        <section className="h-5/6 flex justify-center items-center flex-col  px-10">
          <p className="text-2xl font-bold py-4">
            {!(data?.code === 1000 && check) ? '휴대전화 번호를 입력해주세요.' : '인증번호를 입력해주세요.'}
          </p>
          <Spacing size={20} />
          <form onSubmit={onSubmit}>
            <Input label="휴대전화 전화 입력">
              <Input.PhoneField
                trigger={setCheck}
                setdata={setData}
                {...{
                  placeholder: '010-1234-5678',
                  maxLength: 13,
                }}
              />
            </Input>
            <Spacing size={10} />
            {data?.code === 1000 && check && (
              <Input label="인증번호 입력">
                <Input.AccessFiled secret={data?.data?.secret} {...{ placeholder: '000000', maxLength: 6 }} />
              </Input>
            )}
            <Spacing size={24} />
            <button
              disabled={!(check && data?.code === 1000)}
              id={check ? 'main_btn' : 'btn'}
              className={`${
                data?.code === 1000 && check ? 'bg-main' : 'bg-gray-400'
              } w-full rounded-lg text-white font-medium px-4 py-3`}
              type="submit"
            >
              확인
            </button>
          </form>
        </section>
        {/* {check && (
          <ToastContainer
            duration={5000}
            transitionPercentage={30}
            // color={'#90c2ff'}
            message={'인증번호가 전송되었습니다.'}
          />
        )} */}
      </FormProvider>
    </>
  );
};

export default AccountPage;
