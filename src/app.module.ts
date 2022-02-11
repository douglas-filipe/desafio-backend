import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { CreateLoanModule } from './useCases/CreateLoan/CreateLoan.module';
import { ListAllLoansModule } from './useCases/ListAllLoans/ListAllLoans.module';

@Module({
  imports: [PrismaModule, CreateLoanModule, ListAllLoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
