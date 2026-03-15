import fs from 'node:fs/promises';
import path from 'node:path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
    console.error('Error: GOOGLE_API_KEY is not set in your .env file.');
    console.log('Please get an API key from https://aistudio.google.com/ and add it to a .env file.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-3-flash-preview",
    generationConfig: { responseMimeType: "application/json" }
});

async function fetchPage(url: string) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    return await response.text();
}

async function extractWithGemini(url: string, html: string) {
    const prompt = `
    Extract coffee product details from the following HTML content of a roaster's website: ${url}.
    Focus on these fields:
    - name (the name of the coffee, not including any weight or size details)
    - roaster (the name of the coffee roaster)
    - origin (the country or region, e.g., "Ethiopia" or "Huila, Colombia")
    - roastLevel (Light, Medium-Light, Medium, Medium-Dark, or Dark)
    - tastingNotes (a list of 3-5 key notes, e.g., ["Chocolate", "Cherry"])
    - imageUrl (the direct link to the primary product image/coffee bag)

    Return the data in the following JSON format:
    {
        "name": "string",
        "roaster": "string",
        "origin": "string",
        "roastLevel": "string",
        "tastingNotes": ["string"],
        "imageUrl": "string"
    }

    HTML Content (truncated for brevity):
    ${html.substring(0, 50000)} 
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return JSON.parse(response.text());
}

async function addCoffee() {
    const url = process.argv[2];
    if (!url) {
        console.error('Please provide a URL');
        process.exit(1);
    }

    try {
        console.log(`\n🔍 Fetching page: ${url}...`);
        const html = await fetchPage(url);

        console.log('🤖 Analyzing with Gemini...');
        const data = await extractWithGemini(url, html);

        const CSV_PATH = path.resolve('./src/data/coffee.csv');
        const fileContent = await fs.readFile(CSV_PATH, 'utf-8');
        const lines = fileContent.trim().split('\n');
        
        // Handle empty file or just header
        let nextId = 1;
        if (lines.length > 1) {
            const lastLine = lines[lines.length - 1];
            const lastId = parseInt(lastLine.split(',')[0]);
            if (!isNaN(lastId)) nextId = lastId + 1;
        }

        const date = new Date().toISOString().split('T')[0];
        
        // Format for CSV (handling quotes for commas)
        const name = `"${data.name.replace(/"/g, '""')}"`;
        const roaster = `"${data.roaster.replace(/"/g, '""')}"`;
        const origin = `"${data.origin.replace(/"/g, '""')}"`;
        const notes = `"${data.tastingNotes.join(', ').replace(/"/g, '""')}"`;

        const rl = readline.createInterface({ input, output });
        const ratingStr = await rl.question('⭐️ Enter a rating for this coffee (0-10): ');
        const rating = parseInt(ratingStr) || 0;
        rl.close();

        const newEntry = `${nextId},${name},${roaster},${origin},${data.roastLevel},${notes},${rating},${date},${url},${data.imageUrl}`;

        await fs.appendFile(CSV_PATH, '\n' + newEntry);

        console.log('\n✅ Added new coffee entry:');
        console.log(`   ID:      ${nextId}`);
        console.log(`   Name:    ${data.name}`);
        console.log(`   Roaster: ${data.roaster}`);
        console.log(`   Origin:  ${data.origin}`);
        console.log(`   Notes:   ${data.tastingNotes.join(', ')}`);
        console.log(`   Rating:  ${rating}/10`);
        console.log(`   Image:   ${data.imageUrl}`);
        console.log('\nUpdate your rating in src/data/coffee.csv whenever you like!');

    } catch (error) {
        console.error('\n❌ Error:', error instanceof Error ? error.message : error);
    }
}

addCoffee();

