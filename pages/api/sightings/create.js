
import { PrismaClient } from '@prisma/client';

async function testDatabase() {
  const prisma = new PrismaClient();

  try {
    const users = await prisma.user.findMany();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();