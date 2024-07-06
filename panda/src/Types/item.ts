export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export interface ApiResponse {
  products: Product[];
}
