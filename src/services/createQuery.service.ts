import { API_URL } from "../config/constants";

type CreateQueryServiceProps = {
  historyItem: string[];
  userId: string;
};
export const createQueryService = async ({
  historyItem,
  userId,
}: CreateQueryServiceProps) => {
  const resp = await fetch(`${API_URL}/api/history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ historyItem, userId }),
  });

  return await resp.json();
};
