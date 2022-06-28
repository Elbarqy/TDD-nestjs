export interface SaveProductRequest {
  name: string;
  shopId: string;
  price: number;
  images: Array<string>;
}
