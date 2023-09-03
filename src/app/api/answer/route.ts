import cohere from "cohere-ai";
import { NextResponse } from "next/server";

cohere.init(process.env.COHERE_API_KEY as string);

export async function POST(request: Request) {
  try {
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

    const text = resp.body.generations[0].text;

    return NextResponse.json(text);
  } catch (error: Error | any) {
    return NextResponse.json("Please enter a valid question");
  }
}
