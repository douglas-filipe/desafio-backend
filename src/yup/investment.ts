import * as yup from 'yup';

export const yupCreateInvestmentInput = yup.object().shape({
  totalRequestedAmountCents: yup.number().required(),
  loanId: yup.string().required(),
});
