import { PrismaClient, User } from "@prisma/client";
import { FastifyRequest } from "fastify";
import { JwtPayload, verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export const JWT_SECRET = process.env.JWT_SECRET;

export async function authenticateUser(prisma: PrismaClient, request: FastifyRequest): Promise<User | null> {
  if (request?.headers?.authorization) {
    const token = request.headers.authorization.split(" ")[1];
    const tokenPayload = verify(token, JWT_SECRET) as JwtPayload;
    const userId = tokenPayload.userId;
    return await prisma.user.findUnique({ where: { id: userId } });
  }

  return null;
}
