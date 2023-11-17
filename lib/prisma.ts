import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Check if 'global' object exists
declare const global: {
  prisma?: PrismaClient;
};

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma as PrismaClient;
}

export default prisma;
