export interface Product {
  sku: string;
  name: string;
  price: number;
  product_type: "Dog Food" | "Cat Food" | "Toy" | "Costume";
  size: string;
  in_stock: number;
  published_date: string;
  image_url: string;
  additional_info?: string;
}
