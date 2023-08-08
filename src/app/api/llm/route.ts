import cohere from "cohere-ai";
import { NextResponse } from "next/server";

cohere.init(process.env.COHERE_API_KEY as string);

export async function GET(request: Request) {
  const { prompt } = await request.json();

  const resp = await cohere.generate({
    model: "command",
    prompt,
    max_tokens: 200,
    temperature: 1.1,
    k: 0,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  const text = resp.body.generations[0].text;
  return NextResponse.json(text);
}
