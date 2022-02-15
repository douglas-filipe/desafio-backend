import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { yupCreateInvestmentInput } from 'src/yup/investment';
import { ICreateInvestmentRequestDTO } from './CreateInvestmentDTO';
import { CreateInvestmentUseCase } from './CreateInvestmentUseCase';

@Controller()
export class CreateInvestmentControler {
  constructor(
    private readonly createInvestmentUseCase: CreateInvestmentUseCase,
  ) {}

  @Post('/investment')
  async handle(@Body() input: ICreateInvestmentRequestDTO) {
    const isValidInput = yupCreateInvestmentInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Your input is invalid');

    return this.createInvestmentUseCase.execute(input);
  }
}
