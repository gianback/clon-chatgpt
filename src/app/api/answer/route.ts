import cohere from "cohere-ai";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"
cohere.init(process.env.COHERE_API_KEY as string);

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const resp = await cohere.generate({
    model: "command",
    prompt,
    max_tokens: 2000,
    temperature: 0.9,
    k: 0,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  const token = await getToken()
  console.log("JSON Web Token", token)

  //answer
  const text = resp.body.generations[0].text;

  return NextResponse.json(text);
}
