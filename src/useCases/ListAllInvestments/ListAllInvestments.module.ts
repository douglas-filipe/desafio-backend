import { Module } from '@nestjs/common';
import { IInvestmentRepositories } from 'src/repositories';
import { ListAllInvestmentsController } from './ListAllInvestmentsController';
import { ListAllInvestmentsUseCase } from './ListAllInvestmentsUseCase';

@Module({
  controllers: [ListAllInvestmentsController],
  providers: [IInvestmentRepositories, ListAllInvestmentsUseCase],
})
export class ListAllInvestmentsModule {}
