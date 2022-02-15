import { Module } from '@nestjs/common';
import { IInvestmentRepositories } from 'src/repositories';
import { ILoanRepositories } from 'src/repositories/ILoanRepositories';
import { CreateInvestmentControler } from './CreateInvestmentController';
import { CreateInvestmentUseCase } from './CreateInvestmentUseCase';

@Module({
  controllers: [CreateInvestmentControler],
  providers: [
    ILoanRepositories,
    IInvestmentRepositories,
    CreateInvestmentUseCase,
  ],
})
export class CreateInvestmentModule {}
