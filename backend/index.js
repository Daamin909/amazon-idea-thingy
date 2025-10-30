import OpenAI from "openai";
import { loadEnvFile } from "process";

loadEnvFile("./.env");

const client = new OpenAI();
client.responses
  .create({
    model: "gpt-5",
    input: "Write a short bedtime story about a unicorn.",
  })
  .then((response) => {
    console.log(response.output_text);
  });
