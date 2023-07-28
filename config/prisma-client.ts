import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function checkPrismaConnection() {
  try {
    // Connect to the database
    await prisma.$connect();

    console.log("Prisma connected successfully to the database!");
    // Perform other operations using Prisma...

    // Don't forget to close the Prisma connection when you're done with it
    // await prisma.$disconnect();
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

export default prisma;
