import { Input } from '@components/Common/Input';
import { Spacing } from '@components/Common/Spacing';
import { API_URL } from '@constants/apiUrl';
import { changePhone } from '@utils/formatting';
import { http } from 'lib/http';
import { fetchToast } from 'lib/toast-message';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputWrapperProps {
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
  validation: boolean;
}

// TODO : api url 과 로직 분리시 너무 많은 import 가 필요함
export const InputWrapper = ({ setCheck, setData, data, validation }: InputWrapperProps) => {
  const { register, setValue } = useFormContext();
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    const phoneCheck = regPhone.test(phone);

    if (phoneCheck) {
      setCheck(true);
      return fetchToast(() => http.post(API_URL.USER_VOTE, { phone }), '인증번호가 전송되었어요').then((res: any) => {
        setData(res);
      });
    }
    setCheck(pre => {
      return pre === true ? false : pre;
    });
    setData(null);
    return setValue('phone', changePhone(phone));
  };

  return (
    <>
      <Input label="휴대전화 전화 입력">
        <Input.TextFiled
          register={() =>
            register('phone', {
              required: '휴대전화 번호를 입력해수에요.',
              onChange,
              pattern: {
                value: regPhone,
                message: '번호를 확인해주세요.',
              },
            })
          }
          {...{
            placeholder: '010-0000-0000',
            maxLength: 13,
            inputMode: 'tel',
          }}
        />
      </Input>

      <Spacing size={10} />

      <Input label="인증번호 입력" {...{ className: validation ? 'block' : 'hidden' }}>
        <Input.TextFiled
          register={() =>
            register('accessKey', {
              required: '인증번호를 입력해주세요',
              minLength: {
                value: 6,
                message: '인증번호를 확인해주세요',
              },
              validate: value => value === data?.data?.secret,
            })
          }
          {...{ placeholder: '000000', maxLength: 6, type: 'number', inputMode: 'numeric' }}
        />
      </Input>
    </>
  );
};
