'use client';

import { API_URL } from '@constants/apiUrl';
import { changePhone } from '@utils/formatting';
import { http } from 'lib/http';
import { fetchToast, showToast } from 'lib/toast-message';
import { Children, HTMLAttributes, ReactElement, cloneElement, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  // const isError: boolean = child.props.error ?? false;

  return (
    <div style={{ width: '100%' }} {...props}>
      <label
        // htmlFor={id}
        className="inline-block py-[5px] text-base font-medium text-gray-600"
      >
        {label}
      </label>
      {cloneElement(child, { ...child.props })}

      {/* {bottomText != null ? (
        <p
          style={{
            color: isError ? colors.red600 : colors.grey600,
            marginTop: '4px',
            display: 'inline-block',
            fontWeight: 400,
            fontSize: '15px',
          }}
        >
          {bottomText}
        </p>
      ) : null} */}
    </div>
  );
}

// interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
//   error?: boolean;
// }
const PhoneField = ({
  setdata,
  trigger,
  ...props
}: {
  setdata: React.Dispatch<React.SetStateAction<[]>>;
  trigger: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const { control, setValue, register } = useFormContext();

  const phoneValue =
    useWatch({
      control,
      name: 'phone',
    }) ?? '';

  useEffect(() => {
    if (!regPhone.test(phoneValue)) {
      trigger(false);

      phoneValue.length === 13 &&
        showToast({
          type: 'error',
          message: '번호를 확인해주세요',
          className: 'w-56 font-semibold',
        });
    } else {
      fetchToast(() => http.post(API_URL.USER_VOTE, { phone: phoneValue }), '인증번호가 전송되었어요', '').then(
        (res: any) => {
          setdata(res);
        }
      );
      trigger(true);
    }
  }, [phoneValue]);

  return (
    <input
      className="accessInput"
      value={phoneValue}
      {...register('phone', {
        required: '휴대전화 번호를 입력해수에요.',
        onChange: e => setValue('phone', changePhone(e.target.value)),
        pattern: {
          value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
          message: '',
        },
      })}
      {...props}
    />
  );
};

const AccessFiled = ({ secret, ...props }: any) => {
  const { register } = useFormContext();

  return (
    <input
      type="number"
      className="accessInput"
      {...register('accessKey', {
        required: '인증번호를 입력해주세요',
        validate: value => value === secret,
      })}
      {...props}
    />
  );
};

Input.PhoneField = PhoneField;
Input.AccessFiled = AccessFiled;
