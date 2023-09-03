import { GetHistoryByIdError } from "@/utilities/errors.utility";
import { API_URL } from "../config/constants";
export async function getHistoryByIdService(historyId: string) {
  try {
    const response = await fetch(`${API_URL}/api/history/${historyId}`);
    return await response.json();
  } catch (error) {
    throw new GetHistoryByIdError("Error getting history by id");
  }
}
