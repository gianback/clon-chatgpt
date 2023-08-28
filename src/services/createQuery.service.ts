type CreateQueryServiceProps = {
  historyItem: string[];
  userId: string;
};
export const createQueryService = async ({
  historyItem,
  userId,
}: CreateQueryServiceProps) => {
  const resp = await fetch("http://localhost:3000/api/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ historyItem, userId }),
  });

  return await resp.json();
};
