import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IInvestmentRepositories } from 'src/repositories';

@Injectable()
export class ListAllInvestmentsUseCase {
  constructor(private readonly investmentRepository: IInvestmentRepositories) {}

  async execute() {
    try {
      return this.investmentRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
