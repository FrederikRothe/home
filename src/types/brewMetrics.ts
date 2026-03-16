export interface brewMetrics {
    coffeeId: number;
    brewMethod: string;
    grindSize: string;
    waterTemperature: number; // in Celsius
    brewTime: number; // in seconds
    coffeeDose: number; // in grams
}