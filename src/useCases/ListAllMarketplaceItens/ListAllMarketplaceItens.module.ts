import { Module } from '@nestjs/common';
import { IMarketplaceItensRepositories } from 'src/repositories';
import { ListAllMarketplaceItensController } from './ListAllMarketplaceItensController';

import { ListAllMarketplaceItensUseCase } from './ListAllMarketplaceItensUseCase';

@Module({
  controllers: [ListAllMarketplaceItensController],
  providers: [IMarketplaceItensRepositories, ListAllMarketplaceItensUseCase],
})
export class listAllMarketplaceItensModule {}
