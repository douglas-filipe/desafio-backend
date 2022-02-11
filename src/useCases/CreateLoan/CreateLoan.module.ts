import { Module } from '@nestjs/common';
import { ILoanRepositories } from 'src/repositories/ILoanRepositories';
import { CreateLoanControler } from './CreateLoanController';
import { CreateLoanUseCase } from './CreateLoanUseCase';

@Module({
  controllers: [CreateLoanControler],
  providers: [ILoanRepositories, CreateLoanUseCase],
})
export class CreateLoanModule {}
