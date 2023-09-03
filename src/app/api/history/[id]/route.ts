import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const history = await prisma.historyItem.findUnique({
      where: {
        id: params.id,
      },
      select: {
        querys: true,
      },
    });

    return NextResponse.json({
      querys: history?.querys,
    });
  } catch (error) {
    return new NextResponse("Query not found", {
      status: 400,
    });
  }
}
