export interface GetProductsCategoryResp {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

interface Rating{
  count: number;
  rate: number;
}
