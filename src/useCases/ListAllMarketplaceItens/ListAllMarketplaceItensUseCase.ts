import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IMarketplaceItensRepositories } from 'src/repositories';

@Injectable()
export class ListAllMarketplaceItensUseCase {
  constructor(
    private readonly marketplaceItemRepository: IMarketplaceItensRepositories,
  ) {}

  async execute() {
    try {
      return this.marketplaceItemRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
