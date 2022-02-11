import { Module } from '@nestjs/common';
import { ILoanRepositories } from 'src/repositories/ILoanRepositories';
import { ListAllLoansController } from './ListAllLoansController';
import { ListAllLoansUseCase } from './ListAllLoansUseCase';

@Module({
  controllers: [ListAllLoansController],
  providers: [ILoanRepositories, ListAllLoansUseCase],
})
export class ListAllLoansModule {}
