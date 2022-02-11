import * as yup from 'yup';
const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

export const yupCreateLoanInput = yup.object().shape({
  totalRequestedAmountCents: yup.number().required(),
  category: yup.mixed().oneOf(['X', 'Y', 'Z']).required(),
  expiresAt: yup.string().matches(dateRegex, 'Formato inválido'),
});
