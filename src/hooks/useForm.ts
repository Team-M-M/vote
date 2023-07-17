import { UseFormHandleSubmit, UseFormRegister, UseFormSetValue, useForm } from "react-hook-form"

type ReturnForm = [
  UseFormRegister<SubmitType>,
  UseFormHandleSubmit<SubmitType>,
  any,
  UseFormSetValue<SubmitType>,
  any,
  () => void
]

export const useHookForm = (): ReturnForm => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm<SubmitType>({ mode: 'onChange' });

  return [register, handleSubmit, errors, setValue, control, reset];
}

interface AccessSubmit {
  phone: string;
  access: string;
}

interface VoteSubmit {
  check: boolean;
}

type SubmitType = AccessSubmit | VoteSubmit