import { API_URL } from "@/config/constants";

type UpdateQueryService = {
  historyItemid: string;
  newQuery: string[];
};
export const updateQueryService = async ({
  historyItemid,
  newQuery,
}: UpdateQueryService) => {
  console.log({ API_URL });
  const resp = await fetch(`${API_URL}/api/history`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ historyItemid, newQuery }),
  });

  return await resp.json();
};
