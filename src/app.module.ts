import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { AddToMarketplaceItemModule } from './useCases/AddToMarketplaceItem/AddToMarketplaceItem.module';
import { CreateInvestmentModule } from './useCases/CreateInvestment/CreateInvestment.module';
import { CreateLoanModule } from './useCases/CreateLoan/CreateLoan.module';
import { ListAllLoansModule } from './useCases/ListAllLoans/ListAllLoans.module';
import { listAllMarketplaceItensModule } from './useCases/ListAllMarketplaceItens/ListAllMarketplaceItens.module';

@Module({
  imports: [
    PrismaModule,
    CreateLoanModule,
    ListAllLoansModule,
    CreateInvestmentModule,
    listAllMarketplaceItensModule,
    AddToMarketplaceItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
