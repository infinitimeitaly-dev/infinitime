export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  longDescription: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  images: string[];
  badge?: string;
  features: string[];
  nutritionalInfo?: {
    label: string;
    value: string;
  }[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
