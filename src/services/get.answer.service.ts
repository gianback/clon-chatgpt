export const getAnswerService = async (input: string): Promise<string> => {
  const resp = await fetch("http://localhost:3000/api/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: input }),
  });

  return await resp.json();
};
