export interface ICategoryProduct {
  id: string;
  title: string;
  price: number;
  discount?: number;
  weight: number;
  rating: number;
  image: string;
  isSale?: boolean;
}
