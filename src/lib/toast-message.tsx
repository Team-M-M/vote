import { ToastOptions, toast } from 'react-toastify';

interface ToastProps {
  //type은 enum으로 따로 빼기
  type: 'success' | 'error' | 'info' | 'action';
  message: string;
  className?: string;
}

const toastOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
  closeButton: true,
  progress: undefined,
};

export function showToast({ type, message, className }: ToastProps) {
  className ??= '';

  switch (type) {
    case 'success':
      // enum으로 타입 지정했을 때 가독성 상승 -> case ToastType.success:
      toast.success(message || '성공적으로 완료되었습니다', {
        ...toastOptions,
        style: { marginBottom: '10px', borderRadius: '10px', backgroundColor: '#3182f6', color: '#fff' },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            color="#3182f6"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        className,
      });
      return;
    case 'error':
      toast.error(message || '다시 한번 시도해주세요', {
        ...toastOptions,
        style: { backgroundColor: '#e53935', marginBottom: '10px', borderRadius: '10px', color: '#fff' },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            color="#e53935"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        ),
        className,
      });
      return;
  }
}

export async function fetchToast(fetch: any, successMessage?: string, errorMessage?: string) {
  const id = toast.loading('잠시만 기다려주세요!');
  let data;
  await fetch()
    .then((res: any) => {
      data = res;
      if (data.code === -1000) return toast.update(id, {
        render: data.message,
        type: 'error',
        isLoading: false,
        ...toastOptions,
        style: { backgroundColor: '#e53935', marginBottom: '10px', borderRadius: '10px', color: '#fff' },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            color="#e53935"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        ),
      });
      toast.update(id, {
        render: successMessage ?? '투표를 완료했어요!',
        type: 'success',
        isLoading: false,
        ...toastOptions,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            color="#3182f6"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        style: { marginBottom: '10px', borderRadius: '10px', backgroundColor: '#3182f6', color: '#fff' },
      });
    })
    .catch((err: any) => {
      toast.update(id, {
        render: errorMessage ?? '투표에 실패했어요!',
        type: 'error',
        isLoading: false,
        ...toastOptions,
        style: { backgroundColor: '#e53935', marginBottom: '10px', borderRadius: '10px', color: '#fff' },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            color="#e53935"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        ),
      });
    });

  return data
}
