import { getHistoryByUseridService } from "@/services/getHistoryByUserId.service";
import { useHistoryStore } from "@/store";

export const getHistoryByUserIdUtility = async (id: string) => {
  const data = await getHistoryByUseridService(id);
  const setHistory = useHistoryStore.getState().setHistory;
  setHistory(data.history, false);
};
