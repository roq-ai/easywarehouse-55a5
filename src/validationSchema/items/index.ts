import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  purchase_price: yup.number().integer().required(),
  sale_price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
});
