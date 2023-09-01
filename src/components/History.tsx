import { HistoryList } from "./HistoryList";
import { getServerSession } from "next-auth";
import { User } from "@/interfaces";
import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";

export async function HistorySection() {
  const session = await getServerSession()
  const data =  await getHistoryByUseridService(session?.user.id);
  return (
    <section>
      <HistoryList data={data} />
    </section>
  );
}
