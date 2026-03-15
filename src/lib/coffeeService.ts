import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'csv-parse/sync';
import type { Coffee } from '../types/coffee';

const CSV_PATH = path.resolve('./src/data/coffee.csv');

export async function getAllCoffees(): Promise<Coffee[]> {
  try {
    const fileContent = await fs.readFile(CSV_PATH, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    return records
      .map((record: any) => ({
        id: record.id,
        name: record.name,
        roaster: record.roaster,
        origin: record.origin,
        roastLevel: record.roastLevel,
        tastingNotes: record.tastingNotes
          ? record.tastingNotes.split(',').map((n: string) => n.trim())
          : [],
        rating: Number(record.rating),
        dateTried: new Date(record.dateTried),
        url: record.url || undefined,
        imageUrl: record.imageUrl || undefined,
      }))
      .sort((a, b) => b.dateTried.getTime() - a.dateTried.getTime());
  } catch (error) {
    console.error('Error reading or parsing coffee.csv:', error);
    return [];
  }
}

export async function getLatestCoffee(): Promise<Coffee | null> {
  const coffees = await getAllCoffees();
  return coffees.length > 0 ? coffees[0] : null;
}

