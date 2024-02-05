import { getPrismaClient } from "@/utils/util";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const reqUser = await request.json();
    const {id, pw, email} = reqUser;
    const newUser = {
        userId : id as string,
        password: pw as string,
        email: email as string,
        point: 0,
        createdAt: new Date(),
        updatedAt: undefined,
        deletedAt: undefined,
    }
  try {
    const {prisma} = getPrismaClient();

    const createUser = await prisma.user.create({data: newUser});

    return NextResponse.json(createUser);
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Internal server error" });
  }
}
