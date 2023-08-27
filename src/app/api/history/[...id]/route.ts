import { prisma } from "@/utilities/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const history = await prisma.historyItem.findUnique({
    where: {
      id: params.id[0],
    },
    select: {
      querys: true,
    },
  });

  return NextResponse.json({
    querys: history?.querys,
  });
}
