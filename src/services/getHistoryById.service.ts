export async function getHistoryByidService(userId: string) {
  const response = await fetch(
    `http://localhost:3000/api/history?userId=${userId}`
  );
  return await response.json();
}
