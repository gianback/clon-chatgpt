import { getServerSession } from "next-auth";
import Link from "next/link";

import { authOptions } from "@/utilities/auth";
import { DialogIcon } from ".";
import { User } from "@/interfaces/User";
import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";

export async function History() {
  const session = await getServerSession(authOptions);
  const user = (await getHistoryByUseridService(session?.user.id)) as User;
  if (!session) return;

  return (
    <div
      id="History"
      className="flex flex-col flex-1 transition-opacity duration-500 overflow-y-auto"
    >
      {user.history?.map(({ querys, id }) => (
        <Link
          href={`/home/query/${id}`}
          key={id}
          className="flex gap-4 items-center py-3 px-4 text-white"
        >
          <span className="flex-shrink-0">
            <DialogIcon />
          </span>
          <span
            className="block"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {querys[0]}
          </span>
        </Link>
      ))}
    </div>
  );
}
