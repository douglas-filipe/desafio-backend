import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class IMarketplaceItensRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.marketplaceItem.findMany({
      orderBy: [{ category: 'desc' }, { expiresAt: 'asc' }],
    });
  }
  findByUnique(input: Prisma.MarketplaceItemWhereUniqueInput) {
    return this.prismaService.marketplaceItem.findUnique({
      where: input,
    });
  }

  create(input: Prisma.MarketplaceItemCreateInput) {
    return this.prismaService.marketplaceItem.create({
      data: input,
    });
  }

  update(input: Prisma.MarketplaceItemUpdateInput, id: string) {
    return this.prismaService.marketplaceItem.update({
      data: input,
      where: {
        id,
      },
    });
  }
  delete(id: string) {
    return this.prismaService.marketplaceItem.delete({
      where: {
        id,
      },
    });
  }
}
