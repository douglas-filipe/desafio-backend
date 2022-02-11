import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ILoanRepositories } from 'src/repositories/ILoanRepositories';

@Injectable()
export class ListAllLoansUseCase {
  constructor(private readonly loanRepository: ILoanRepositories) {}

  async execute() {
    try {
      return this.loanRepository.findAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
