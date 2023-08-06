import { Spacing } from '@components/Common/Spacing';
import { API_URL } from '@constants/apiUrl';
import { http } from 'lib/http';
import { fetchToast, showToast } from 'lib/toast-message';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas';

export function SignModal({
  open,
  setOpen,
  userData
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userData: {
    name: string,
    userId: number,
    phone: string,
    id: string
  }
}) {
  const canvasRef = useRef<any>(null);
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const { getValues, reset, watch } = useFormContext()

  const clear = () => {
    canvasRef.current.clear();
    setIsSigned(false);
  };

  const convertDataUrlToFile = (name: string) => {
    const dataURL = canvasRef.current.toDataURL('image/png');
    const decodedURL = dataURL.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(decodedURL, 'base64');
    const blob = new Blob([buf], { type: 'image/png' });
    return new File([blob], `${name}.png`, { type: 'image/png' });
  };

  const save = (name: string) => {
    if (!isSigned) return showToast({ type: 'error', message: '서명을 기입해주세요.', className: 'w-64' });
    else {
      const formData = new FormData();
      formData.append('file', convertDataUrlToFile(userData.name + userData.id));
      formData.append('id', userData.userId.toString());
      formData.append('filePath', 'upload');
      formData.append('fileName', userData.name + userData.id);
      formData.append('imageType', 'png');
      formData.append('vote_id', userData.id);
      formData.append('phone', userData.phone);
      formData.append('name', getValues('checked').toString());
      console.log(formData, 'data ??')

      fetchToast(http.post(API_URL.VOTE_IMG, formData))
    }
    // const image = canvasRef.current.getTrimmedCanvas().toDataURL('image/png');
    // const link = document.createElement('a');
    // link.href = image;
    // link.download = 'sign_image.png';
    // link.click();
  };


  useEffect(() => {
    !open && clear();
  }, [open])

  return (
    <>
      <ModalWrapper setOpen={setOpen} open={open}>
        <CanvasWrapper>
          {!isSigned && <CanvasPlaceholder placeholder="여기에 서명을 해주세요." />}
          <SignatureCanvas
            ref={canvasRef}
            canvasProps={{ className: 'w-full h-[250px] rounded-2xl' }}
            backgroundColor="rgb(230, 230, 230)"
            clearOnResize={false}
            onBegin={e => {
              console.log(e, '머임 :::');
              setIsSigned(true);
            }}
          />
        </CanvasWrapper>
        <Spacing size={40} />
        <div className="flex w-full">
          <Button text="서명 초기화" {...{ style: { marginRight: '4px' } }} onClick={clear} />
          <Button text="저장" onClick={save} />
        </div>
      </ModalWrapper>
    </>
  );
}

const Button = ({ text, ...props }: any) => {
  return (
    <button
      id="main_btn"
      className="flex-grow bg-main rounded-lg text-white text-base font-semibold px-2 py-3"
      {...props}
    >
      {text}
    </button>
  );
};

const ModalWrapper = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <div className={open ? 'pop_layer_set on' : 'pop_layer_set'} id="pop_notice">
      <div className="pop_layer px-4 h-3/5">
        <div className="flex justify-center p-3 ">
          <button
            type="button"
            className="h-1.5 w-60 bg-gray-300 rounded-lg"
            onClick={() => setOpen(pre => !pre)}
          ></button>
        </div>
        {children}
      </div>
      <div className="modal" style={{ display: 'block' }} onClick={() => setOpen(pre => !pre)} />
    </div>
  );
};

const CanvasWrapper = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <div className="relative w-full mt-14" {...props}>
      {children}
    </div>
  );
};

const CanvasPlaceholder = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-main text-xl font-semibold w-full text-center ">
      {placeholder}
    </div>
  );
};
