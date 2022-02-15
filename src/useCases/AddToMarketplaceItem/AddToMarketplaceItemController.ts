import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { yupMarketplaceInput } from 'src/yup/marketplace';
import { IAddToMarketplaceRequestDTO } from './AddToMarketplaceItemDTO';
import { AddToMarketplaceItemUseCase } from './AddToMarketplaceItemUseCase';

@Controller()
export class AddToMarketplaceItemController {
  constructor(
    private readonly addToMarketplaceItemUseCase: AddToMarketplaceItemUseCase,
  ) {}

  @Post('/marketplace')
  async handle(@Body() input: IAddToMarketplaceRequestDTO) {
    const isValidInput = yupMarketplaceInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Your input is invalid');

    return this.addToMarketplaceItemUseCase.execute(input);
  }
}
