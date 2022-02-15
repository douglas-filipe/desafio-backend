import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  IInvestmentRepositories,
  ILoanRepositories,
  IMarketplaceItensRepositories,
} from 'src/repositories';
import { IAddToMarketplaceRequestDTO } from './AddToMarketplaceItemDTO';

interface IResultSumInvestment {
  _sum: {
    totalRequestedAmountCents: number;
  };
}

@Injectable()
export class AddToMarketplaceItemUseCase {
  constructor(
    private readonly investmentRepository: IInvestmentRepositories,
    private readonly loanRepository: ILoanRepositories,
    private readonly marketplaceRepository: IMarketplaceItensRepositories,
  ) {}

  async execute(input: IAddToMarketplaceRequestDTO) {
    try {
      const investment: IResultSumInvestment[] =
        await this.investmentRepository.findAllAndSome({
          loanId: input.loanId,
        });
      let totalRequestedAmountCentsInvestment = 0;
      investment.map((item) => {
        totalRequestedAmountCentsInvestment =
          item._sum.totalRequestedAmountCents;
      });
      const loan = await this.loanRepository.findByUnique({ id: input.loanId });
      const marketplaceItem = await this.marketplaceRepository.create({
        category: loan.category,
        expiresAt: loan.expiresAt,
        totalInvestmentAmount: totalRequestedAmountCentsInvestment,
        totalRequestedAmount: loan.totalRequestedAmountCents,
      });

      return marketplaceItem;
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
