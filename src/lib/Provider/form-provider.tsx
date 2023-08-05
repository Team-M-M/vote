import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

export default function FormProvider({ children, onSubmit, methods, ...other }: Props) {
  return (
    <Form {...methods}>
      <form {...other} onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}