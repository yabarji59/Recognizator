import * as dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";

const openai = new OpenAI();

const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "Describe this image in great detail. (in French)",
                },
                {
                    type: "image_url",
                    image_url: {
                        url: `https://objectif-paysages.developpement-durable.gouv.fr/sites/default/files/styles/card/public/2022-07/560x315_paysage-monet.png?itok=dtrHot7F`,
                        detail: "low",
                    },
                },
            ],
        },
    ],
    max_tokens: 1000,
});

console.log(response.choices[0]);