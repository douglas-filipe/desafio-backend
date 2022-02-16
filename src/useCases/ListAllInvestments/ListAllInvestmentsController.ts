import { Controller, Get } from '@nestjs/common';
import { ListAllInvestmentsUseCase } from './ListAllInvestmentsUseCase';

@Controller()
export class ListAllInvestmentsController {
  constructor(
    private readonly listAllInvestmentsUseCase: ListAllInvestmentsUseCase,
  ) {}

  @Get('/investment')
  async handle() {
    return this.listAllInvestmentsUseCase.execute();
  }
}
