import { getPrismaClient } from "@/utils/util";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const SERECT_KEY = process.env.TOKEN_SECRET_KEY;
  const jwt = require('jsonwebtoken');
  const { prisma } = getPrismaClient();
  const reqUser = await request.json();
  const { id, pw } = reqUser;

  try {
    const findUser = await prisma.user.findMany({
      where: {
        userId: id,
        password: pw,
      },
    });
    const payload = {
      userId: id,
      userName: findUser[0].userId,
    }
    const option = {
      expiresIn: '1h'
    }

    const token = jwt.sign(payload, SERECT_KEY, option);
    console.log(token)

    if (findUser.length !== 0) {
      return NextResponse.json({ data: {token, userInfo: findUser[0]}, status: 200 });
    } else {
      return NextResponse.json({
        message: "아이디 또는 비밀번호가 일치하지 않습니다.",
        status: 400,
      });
    }
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Internal server error" });
  }
}
