import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ILoanRepositories } from 'src/repositories/ILoanRepositories';
import { ICreateLoanRequestDTO } from './CreateLoanDTO';

@Injectable()
export class CreateLoanUseCase {
  constructor(private readonly loanRepository: ILoanRepositories) {}

  async execute(input: ICreateLoanRequestDTO) {
    try {
      return this.loanRepository.create({
        category: input.category,
        expiresAt: input.expiresAt,
        totalRequestedAmountCents: input.totalRequestedAmountCents,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
