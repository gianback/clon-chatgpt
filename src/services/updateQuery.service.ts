type UpdateQueryService = {
  historyItemid: string;
  newQuery: string[];
};
export const updateQueryService = async ({
  historyItemid,
  newQuery,
}: UpdateQueryService) => {
  const resp = await fetch("http://localhost:3000/api/history", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ historyItemid, newQuery }),
  });

  return await resp.json();
};
