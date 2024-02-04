import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams.get('title');
    console.log(params)
  try {
    const prisma = new PrismaClient();

    const findMovie = await prisma.movie.findMany({
        where: {
            title: params as string
        }
    });

    const findMoviePlace = await prisma.moviePlace.findMany({
        where: {
            title: params as string
        }
    });

    return NextResponse.json({findMovie, findMoviePlace});
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Internal server error" });
  }
}
