import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      history: true,
      name: true,
    },
  });
  if (!user) {
    return NextResponse.json({
      mssg: "History Not found",
      history: [],
    });
  } else {
    return NextResponse.json({
      mssg: "History found",
      history: user?.history.reverse(),
    });
  }
}
