import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("userId") as string;
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      history: true,
    },
  });

  return NextResponse.json({
    mssg: "History found",
    history: user?.history.reverse(),
  });
}
export async function POST(request: Request) {
  const { historyItem, userId } = await request.json();

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user)
    return new Response("User not found", {
      status: 404,
    });

  const queryListCreated = await prisma.historyItem.create({
    data: {
      querys: historyItem,
      userId,
    },
  });

  return NextResponse.json({
    mssg: "Query created",
    queryCreated: queryListCreated,
  });
}

export async function PATCH(request: Request) {
  const { historyItemid, newQuery } = await request.json();
  const query = await prisma.historyItem.updateMany({
    where: {
      id: historyItemid,
    },
    data: {
      querys: {
        push: newQuery,
      },
    },
  });
  return NextResponse.json({
    mss: "Query added",
    query,
  });
}
