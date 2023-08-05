import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  checked: Yup.bool().oneOf([true], 'Checkbox selection is required'),
})