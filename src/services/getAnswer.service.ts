import { API_URL } from "../config/constants";

export const createAnswerService = async (input: string): Promise<string> => {
  const resp = await fetch(`${API_URL}/api/answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: input }),
  });

  return await resp.json();
};
