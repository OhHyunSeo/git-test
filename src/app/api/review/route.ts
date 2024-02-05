import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqReview = await request.json();
  const { content, rating, movieTitle, authorId } = reqReview;

  try {
    const prisma = new PrismaClient();
    const newReview = {
        content,
        rating,
        movieTitle,
        authorId,
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null
    }

    const resReview = await prisma.movieReview.create({
      data: newReview,
    });
      return NextResponse.json({data: resReview, status: 200});
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Internal server error" });
  }
}
