import { Module } from '@nestjs/common';
import {
  IInvestmentRepositories,
  IMarketplaceItensRepositories,
} from 'src/repositories';
import { ILoanRepositories } from 'src/repositories/ILoanRepositories';
import { AddToMarketplaceItemController } from './AddToMarketplaceItemController';
import { AddToMarketplaceItemUseCase } from './AddToMarketplaceItemUseCase';

@Module({
  controllers: [AddToMarketplaceItemController],
  providers: [
    ILoanRepositories,
    IInvestmentRepositories,
    IMarketplaceItensRepositories,
    AddToMarketplaceItemUseCase,
  ],
})
export class AddToMarketplaceItemModule {}
