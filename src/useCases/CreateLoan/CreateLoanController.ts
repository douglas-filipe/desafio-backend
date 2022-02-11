import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { yupCreateLoanInput } from 'src/yup/loan';
import { ICreateLoanRequestDTO } from './CreateLoanDTO';
import { CreateLoanUseCase } from './CreateLoanUseCase';

@Controller()
export class CreateLoanControler {
  constructor(private readonly createLoanUseCase: CreateLoanUseCase) {}

  @Post('/loans')
  async handle(@Body() input: ICreateLoanRequestDTO) {
    // Utiliza um schema yup para verificar o input
    const isValidInput = yupCreateLoanInput.isValidSync(input);

    // Caso seja inválido, retorna erro 400
    if (!isValidInput) throw new BadRequestException('Seu input está inválido');

    return this.createLoanUseCase.execute(input);
  }
}
