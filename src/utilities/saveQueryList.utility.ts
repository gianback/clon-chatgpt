import { useCurrentQueryStore } from "@/store/CurrentQuery";
import { getHistoryByIdService } from "@/services/getHistoryById.service";

export const saveQueryListUtility = async (id: string) => {
  const setQueryList = useCurrentQueryStore.getState().setQueryList;
  const setCurrentId = useCurrentQueryStore.getState().setCurrentId;
  const setIsLoading = useCurrentQueryStore.getState().setIsLoading;
  try {
    setIsLoading(true);
    const response = await getHistoryByIdService(id);
    setQueryList(response.querys, false);
    setCurrentId(id);
  } catch (error) {
    throw new Error("Error get history by id");
  } finally {
    setIsLoading(false);
  }
};
