export interface Coffee {
  id: string;
  name: string;
  roaster: string;
  origin: string;
  roastLevel: string;
  tastingNotes: string[];
  rating: number; // e.g., out of 10
  dateTried: Date;
  url?: string;
  imageUrl?: string;
}
