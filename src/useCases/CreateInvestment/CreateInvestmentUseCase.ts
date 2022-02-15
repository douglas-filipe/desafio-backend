import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IInvestmentRepositories, ILoanRepositories } from 'src/repositories';
import { ICreateInvestmentRequestDTO } from './CreateInvestmentDTO';

@Injectable()
export class CreateInvestmentUseCase {
  constructor(
    private readonly investmentRepository: IInvestmentRepositories,
    private readonly loanRepository: ILoanRepositories,
  ) {}

  async execute(input: ICreateInvestmentRequestDTO) {
    try {
      const investment = await this.investmentRepository.create({
        totalRequestedAmountCents: input.totalRequestedAmountCents,
        loanId: input.loanId,
      });

      return investment;
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
