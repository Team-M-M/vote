import { FormProvider as Form, UseFormReturn, useForm } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

//! HOC -> useForm 의 한번 선언 고려중
// const FormLoadble = (Component: ElementType) => (props: any) => {
//   const methods = useForm()

//   return (
//     <Form {...methods}>
//       <Component {...props} />
//     </Form>
//   )
// }

export default function FormProvider({ children, onSubmit, methods, ...other }: Props) {
  return <Form {...methods}>{children}</Form>;
}
