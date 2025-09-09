import 'dotenv/config';
import OpenAI from 'openai';
import { cosine, rankBySimilarity } from './math.mjs';

export async function demoRag() {
  const client = new OpenAI();
  const docs = [
    { id: 'a', text: 'Refunds within 30 days of purchase.' },
    { id: 'b', text: 'Express shipping takes 2–3 business days.' },
    { id: 'c', text: 'Support hours: 9am–6pm ET, Mon–Fri.' }
  ];

  // In a real run you'd embed docs and the query, then rank.
  // This file is only for your local demo; tests don't touch it.
  return { docs, cosine: typeof cosine, rank: typeof rankBySimilarity };
}
