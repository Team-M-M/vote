'use client';

import { API_URL } from '@constants/apiUrl';
import { changePhone } from '@utils/formatting';
import { http } from 'lib/http';
import { fetchToast } from 'lib/toast-message';
import { Children, HTMLAttributes, InputHTMLAttributes, ReactElement, cloneElement, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  const isError: boolean = child.props.error ?? false;

  return (
    <div style={{ width: '100%' }} {...props}>
      <label
        // htmlFor={id}
        className='inline-block py-[5px] text-base font-medium text-gray-600'
      >
        {label}
      </label>
      {cloneElement(
        child,
        { ...child.props }
      )}

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

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}
Input.PhoneField = ({ setdata, trigger, error, ...props }: any) => {
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const { control, setValue } = useFormContext();

  const phoneValue = useWatch({
    control,
    name: 'phone'
  }) ?? ''

  useEffect(() => {
    if (regPhone.test(phoneValue)) {

      fetchToast(() => http.post(API_URL.USER_VOTE, { phone: phoneValue }), '인증번호가 전송되었어요', '')
        .then((res: any) => {
          setdata(res);
        });

      trigger(true);
    }
    else {
      error(true);
      trigger(false);
      error(false);
    }
  }, [phoneValue]);

  return (
    <input
      className="accessInput"
      value={phoneValue}
      onChange={(e) => setValue("phone", changePhone(e.target.value))}
      {...props}
    />
  );
};

Input.AccessFiled = ({ secret, ...props }: any) => {
  const { register } = useFormContext();

  return (
    <input
      type='number'
      className="accessInput"
      {...register('accessKey', {
        required: '인증번호를 입력해주세요',
        validate: value => value === secret
      })}
      {...props}
    />
  );
};
