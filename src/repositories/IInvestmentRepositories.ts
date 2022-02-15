import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class IInvestmentRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.investment.findMany();
  }

  findByUnique(input: Prisma.InvestmentWhereUniqueInput) {
    return this.prismaService.investment.findUnique({
      where: input,
    });
  }

  findAllAndSome(input: Prisma.InvestmentWhereInput) {
    return this.prismaService.investment.groupBy({
      by: ['totalRequestedAmountCents'],
      where: { loanId: input.loanId },
      _sum: {
        totalRequestedAmountCents: true,
      },
    });
  }

  create(input: Prisma.InvestmentUncheckedCreateInput) {
    return this.prismaService.investment.create({
      data: input,
    });
  }

  update(input: Prisma.InvestmentUpdateInput, id: string) {
    return this.prismaService.investment.update({
      data: input,
      where: {
        id,
      },
    });
  }
  delete(id: string) {
    return this.prismaService.investment.delete({
      where: {
        id,
      },
    });
  }
}
