import prisma from '../../lib/prisma';

function findBySymbol(symbol: string) {
  return prisma.cmc.findFirst({
    where: {
      symbol: symbol,
    },
  });
}

function addMany(items: any[]) {
  return prisma.cmc.createMany({
    data: items,
  });
}

export const cmcRepository = {
  findBySymbol,
  addMany,
}
