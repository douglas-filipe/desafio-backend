import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class ILoanRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.loan.findMany({
      orderBy: [{ category: 'desc' }, { expiresAt: 'asc' }],
    });
  }
  findByUnique(input: Prisma.LoanWhereUniqueInput) {
    return this.prismaService.loan.findUnique({
      where: input,
    });
  }

  create(input: Prisma.LoanCreateInput) {
    return this.prismaService.loan.create({
      data: input,
    });
  }

  update(input: Prisma.LoanUpdateInput, id: string) {
    return this.prismaService.loan.update({
      data: input,
      where: {
        id,
      },
    });
  }
  delete(id: string) {
    return this.prismaService.loan.delete({
      where: {
        id,
      },
    });
  }
}
