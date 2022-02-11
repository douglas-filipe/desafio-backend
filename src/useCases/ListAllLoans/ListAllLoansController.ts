import { Controller, Get } from '@nestjs/common';

import { ListAllLoansUseCase } from './ListAllLoansUseCase';

@Controller()
export class ListAllLoansController {
  constructor(private readonly listAllLoansUseCase: ListAllLoansUseCase) {}

  @Get('/loans')
  async handle() {
    return this.listAllLoansUseCase.execute();
  }
}
