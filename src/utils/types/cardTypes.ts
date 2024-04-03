// Define the interface for a Card
export interface Card {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

// Define the interface for the state managed by this slice
export interface CardState {
  cardDetails: Card;
}
