import type { brewMetrics } from "./brewMetrics";

export interface Coffee {
  id: number;
  name: string;
  roaster: string;
  origin: string;
  roastLevel: string;
  tastingNotes: string[];
  rating: number; // e.g., out of 10
  dateTried: Date;
  url?: string;
  imageUrl?: string;
  brewMetrics?: brewMetrics;
}
