import { PrismaClient } from '@prisma/client';
export const getPrismaClient = () => {
    const prisma = new PrismaClient();
    return { prisma }
}