export async function getHistoryByIdService(historyId: string) {
  const response = await fetch(
    `http://localhost:3000/api/history/${historyId}`
  );
  return await response.json();
}
