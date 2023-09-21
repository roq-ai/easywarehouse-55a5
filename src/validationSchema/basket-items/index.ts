import * as yup from 'yup';

export const basketItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  basket_id: yup.string().nullable().required(),
  item_id: yup.string().nullable().required(),
});
