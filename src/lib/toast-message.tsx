import { ToastOptions, toast, } from "react-toastify";

interface ToastProps {
  // 코드 리뷰 -> type은 enum으로 따로 빼기
  type: 'success' | 'error' | 'info' | 'action';
  message?: string;
  className?: string;
}

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
  closeButton: false,
};

export function showToast({ type, message, className }: ToastProps) {

  switch (type) {
    case 'success':
      // enum으로 타입 지정했을 때 가독성 상승 -> case ToastType.success:
      toast.success(message || '성공적으로 완료되었습니다', {
        ...toastOptions,
        icon: <img src="/svgs/toast_success.svg" alt="success" />,
        className,
      });
      return;
    case 'error':
      toast.error(message || '다시 한번 시도해주세요', {
        ...toastOptions,
        icon: <img src="/svgs/toast_error.svg" alt="error" />,
        className
      });
      return;
  }
}

export function fetchToast(fetch: any) {

  return toast.promise(fetch, {
    pending: '잠시만 기다려주세요...',
    success: '완료하였습니다.',
    error: '실패하였습니다.',
  })
}