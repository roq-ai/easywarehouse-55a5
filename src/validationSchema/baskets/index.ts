import * as yup from 'yup';

export const basketValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
});
