import * as yup from 'yup';

export const yupMarketplaceInput = yup.object().shape({
  loanId: yup.string().required(),
});
