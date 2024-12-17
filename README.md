# Projet : Description d'Image avec OpenAI

Ce projet utilise l'API OpenAI pour décrire une image en détail, en français, en utilisant le modèle GPT-4.

---

## Prérequis

Avant d'exécuter ce projet, assurez-vous d'avoir :

1. **Node.js** (version 16 ou plus récente) installé.
2. Une clé API OpenAI valide.
3. Les modules suivants installés via `npm` :
   - `dotenv`
   - `openai`

---

## Installation

1. Clonez ce projet dans votre environnement local :
   ```bash
   git clone <URL_DU_DEPOT>
   cd <REPERTOIRE_DU_PROJET>
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install dotenv openai
   ```

3. Créez un fichier `.env` à la racine du projet et ajoutez-y votre clé API OpenAI :
   ```env
   OPENAI_API_KEY=ta_clé_api_ici
   ```

---

## Utilisation

1. Assurez-vous que le fichier `.env` est correctement configuré.

2. Exécutez le script avec la commande :
   ```bash
   node script.js
   ```

3. Le script fera un appel à l'API OpenAI pour générer une description détaillée de l'image donnée, en français.

---

## Structure du Code

- **`dotenv`** : Charge la clé API à partir du fichier `.env`.
- **`openai`** : Fournit les outils pour interagir avec l'API OpenAI.

---

## Exemple de sortie attendue

Le script retournera une description générée par le modèle GPT-4. Par exemple :

```
{ description: "Cette image représente un paysage impressionniste de Claude Monet avec des couleurs vives et des touches délicates..." }
```

---

## Notes importantes

1. Si vous rencontrez une erreur liée à `Cannot use import statement outside a module`, ajoutez `"type": "module"` dans le fichier `package.json` ou convertissez les imports en `require`.

2. Vérifiez que le modèle spécifié dans le code (`gpt-4` ou `gpt-4o-mini`) est bien disponible pour votre compte OpenAI.




