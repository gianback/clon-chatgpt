import { authOptions } from "@/utilities/auth";
import { prisma } from "@/utilities/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";

export async function History() {
  const session = await getServerSession(authOptions);
  if (!session) return;
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      history: true,
    },
  });
  return (
    <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
      {user?.history.map(({ querys, id }) => (
        <Link key={id} href={`/query/${id}`}>
          {querys[0]}
        </Link>
      ))}
    </div>
  );
}
