import { Controller, Get } from '@nestjs/common';
import { ListAllMarketplaceItensUseCase } from './ListAllMarketplaceItensUseCase';

@Controller()
export class ListAllMarketplaceItensController {
  constructor(
    private readonly listAllMarketplaceItensUseCase: ListAllMarketplaceItensUseCase,
  ) {}

  @Get('/marketplace')
  async handle() {
    return this.listAllMarketplaceItensUseCase.execute();
  }
}
