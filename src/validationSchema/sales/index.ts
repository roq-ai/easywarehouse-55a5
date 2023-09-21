import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  basket_id: yup.string().nullable().required(),
});
