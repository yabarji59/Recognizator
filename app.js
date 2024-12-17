import * as dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI();

const imagePath = path.resolve("./images/journal-trading.png"); // Chemin local de l'image
const imageBuffer = fs.readFileSync(imagePath);

const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: `Analyse cette image de journal de trading en détail. Décris les colonnes détectées (par exemple : date, type d'actif, entrée/sortie, gain/perte, commentaire). Fournis les informations suivantes :
                    - Un résumé des performances globales : total des gains, total des pertes, ratio gains/pertes.
                    - Les tendances clés : périodes les plus rentables, actifs les plus performants, erreurs fréquentes.
                    - Analyse des pertes : quelles sont les causes des pertes récurrentes ?
                    - Recommandations stratégiques pour optimiser les performances futures.
                    
                    Utilise un langage clair et détaillé en français.`
                },
                {
                    type: "image_url",
                    image_url: {
                        url: `data:image/png;base64,${imageBuffer.toString('base64')}`, // Utiliser un type MIME valide
                        detail: "low",
                    },
                },
            ],
        },
    ],
    max_tokens: 1000,
});

console.log(response.choices[0]);
