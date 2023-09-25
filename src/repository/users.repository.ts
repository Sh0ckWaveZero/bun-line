import prisma from '../../lib/prisma';

export class UsersRepository {
  expiresIn = 0;
  constructor(

  ) {
    this.expiresIn = Number(process.env.JWT_EXPIRES_IN);
  }

  async findById(userId: string) {
    try {
      return await prisma.user.findFirst({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async add(user: any) {
    const data = {
      ...user,
      expiresIn: new Date(Date.now() + this.expiresIn),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return await prisma.user.create({
      data: data,
    });
  }

  async update(user: any) {
    const data = {
      $set: {
        ...user,
        expiresIn: new Date(Date.now() + this.expiresIn),
        updatedAt: new Date(),
      },
    };
    const find = await this.findById(user.userId);
    return prisma.user.update({
      where: {
        id: find?.id,
      },
      data: data,
    });
  }
}
