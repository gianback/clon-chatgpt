import { API_URL } from "../config/constants";
export async function getHistoryByIdService(historyId: string) {
  const response = await fetch(`${API_URL}/api/history/${historyId}`);
  return await response.json();
}
