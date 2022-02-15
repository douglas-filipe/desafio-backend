import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { yupCreateLoanInput } from 'src/yup/loan';
import { ICreateLoanRequestDTO } from './CreateLoanDTO';
import { CreateLoanUseCase } from './CreateLoanUseCase';

@Controller()
export class CreateLoanControler {
  constructor(private readonly createLoanUseCase: CreateLoanUseCase) {}

  @Post('/loans')
  async handle(@Body() input: ICreateLoanRequestDTO) {
    const isValidInput = yupCreateLoanInput.isValidSync(input);

    if (!isValidInput) throw new BadRequestException('Your input is invalid');

    return this.createLoanUseCase.execute(input);
  }
}
