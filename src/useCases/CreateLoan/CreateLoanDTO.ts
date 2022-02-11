export enum Category {
  X = 'X',
  Y = 'Y',
  Z = 'Z',
}

export interface ICreateLoanRequestDTO {
  totalRequestedAmountCents: number;
  category: Category;
  expiresAt: string;
}
