export interface GetCartsUserResp {
  date: string;
  id: number;
  userId: number;
  products: Product[];
}

export interface Product {
  productId: number;
  quantity: number;
}