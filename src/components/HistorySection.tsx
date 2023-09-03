import { HistoryList } from "./HistoryList";
import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";
import { HistoryStoreInitializer } from "./HistoryStoreInitializer";

interface Props {
  id: string;
}
export async function HistorySection({ id }: Props) {
  const data = await getHistoryByUseridService(id);

  return (
    <section className="flex-1">
      <HistoryList />
      <HistoryStoreInitializer history={data.history} />
    </section>
  );
}
