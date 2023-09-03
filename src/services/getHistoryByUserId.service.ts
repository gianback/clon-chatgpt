import { API_URL } from "@/config/constants";
import { GetHistoryByUserIdError } from "@/utilities/errors.utility";
export async function getHistoryByUseridService(userId: string) {
  try {
    const response = await fetch(`${API_URL}/api/history/user/${userId}`);
    return await response.json();
  } catch (error) {
    throw new GetHistoryByUserIdError("Error getting history by user id");
  }
}
