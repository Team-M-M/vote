'use client';

import colors from '@constants/colors';
import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  useRef,
  useState,
} from 'react';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  // const generatedId = useId('input');
  // const id = child.props.id ?? generatedId;
  const id = label?.includes('휴대전화');
  const isError: boolean = child.props.error ?? false;
  const phoneRef = useRef(null);

  return (
    <div style={{ width: '100%' }} {...props}>
      <label
        // htmlFor={id}
        style={{
          display: 'inline-block',
          padding: '5px 0',
          fontSize: '15px',
          fontWeight: '500',
          lineHeight: 1.6,
          color: colors.grey600,
        }}
      >
        {label}
      </label>
      {cloneElement(
        child,
        { phoneRef, id, ...child.props } /*  {
        ref: '하이'
      } */
      )}
      {/* <TextField /> */}
      {bottomText != null ? (
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
      ) : null}
    </div>
  );
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}
Input.TextField = forwardRef(({ id, phoneRef }: any /* , ref?: ForwardedRef<HTMLInputElement> */) => {
  const [focus, setFocus] = useState({
    backgroundColor: colors.grey100
  });
  console.log(
    phoneRef.current?.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, ''),
    'ref'
  );

  return (
    <input
      onFocus={e => setFocus({ backgroundColor: colors.grey200 })}
      onBlur={e => setFocus({ backgroundColor: colors.grey100 })}
      placeholder={id ? '010-1234-5678' : '000000'}
      className="focus:shadow-black"
      style={{
        width: '100%',
        padding: '0 18px',
        fontSize: '15px',
        lineHeight: '48px',
        margin: 0,
        outline: 'none',
        border: 'none',
        borderRadius: '8px',
        transition: `background .2s ease,color .1s ease, box-shadow .2s ease`,
        ...focus,
      }}
      // value={}
      ref={phoneRef}
    // {...props}
    />
  );
});

// , boxShadow: `inset 0 0 0 2px ${colors.blue500}`
// , boxShadow: `inset 0 0 0 1px ${colors.greyOpacity200}`
