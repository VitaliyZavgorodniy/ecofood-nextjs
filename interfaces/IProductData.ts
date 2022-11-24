export interface IProductData {
  id: string;
  title: string;
  price: number;
  discount?: number;
  weight: number;
  rating: number;
  image: string;
  url: string;
}

export interface IProductCart {
  // quantity: number;
  id: string;
  title: string;
  price: number;
  discount?: number;
  weight: number;
  rating: number;
  image: string;
  url: string;
}
