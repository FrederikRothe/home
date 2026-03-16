export interface brewMetrics {
    coffeeId: number; // to link back to the Coffee entry
    brewMethod: string; // e.g., "V60", "French Press", "Aeropress", "Espresso"
    grindSize: string; // grinder specific seting
    waterTemperature: number; // in Celsius
    brewTime: number; // in seconds
    coffeeDose: number; // in grams
}