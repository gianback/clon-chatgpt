import { getServerSession } from "next-auth";

import { authOptions } from "@/utilities/auth.utility";
import { User } from "@/interfaces/User";
import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";
import { HistoryItem } from "./HistoryItem";

export async function History() {
  const session = await getServerSession(authOptions);
  const user = (await getHistoryByUseridService(session?.user.id)) as User;

  return (
    <div
      id="History"
      className="flex flex-col flex-1 transition-opacity duration-500 overflow-y-auto"
    >
      {user.history?.map((historyItem) => (
        <HistoryItem key={historyItem.id} historyItem={historyItem} />
      ))}
    </div>
  );
}
