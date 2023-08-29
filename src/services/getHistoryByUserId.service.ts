import { API_URL } from "@/config/constants";

export async function getHistoryByUseridService(userId: string) {
  const response = await fetch(`${API_URL}/api/history?userId=${userId}`);
  return await response.json();
}
