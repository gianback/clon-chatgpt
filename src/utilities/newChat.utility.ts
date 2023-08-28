import { useCurrentQueryStore } from "@/store/CurrentQuery";

export const newChatUtility = () => {
  const { setQueryList, setCurrentId } = useCurrentQueryStore.getState();
  setQueryList([], false);
  setCurrentId("");
};
