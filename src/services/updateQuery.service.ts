import { API_URL } from "@/config/constants";
import { UpdateQueryError } from "@/utilities/errors.utility";

type UpdateQueryService = {
  historyItemid: string;
  newQuery: string[];
};
export const updateQueryService = async ({
  historyItemid,
  newQuery,
}: UpdateQueryService) => {
  try {
    const resp = await fetch(`${API_URL}/api/history`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ historyItemid, newQuery }),
    });

    return await resp.json();
  } catch (error) {
    throw new UpdateQueryError("Error updating query");
  }
};
