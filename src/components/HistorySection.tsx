import { HistoryList } from "./HistoryList";
import { userStore } from "@/store/userStore";

import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";
import { HistoryStoreInitializer } from "./HistoryStoreInitializer";

export async function HistorySection() {
  const userId = userStore.getState().id;
  const data = await getHistoryByUseridService(userId);

  return (
    <section className="flex-1">
      <HistoryList />
      <HistoryStoreInitializer history={data.history} />
    </section>
  );
}
