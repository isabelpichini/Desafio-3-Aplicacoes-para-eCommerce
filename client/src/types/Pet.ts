export interface Pet {
  sku: string;
  name: string;
  price: number;
  gender: "female" | "male";
  age?: string;
  size?: "small" | "medium" | "large";
  color: string;
  vaccinated: boolean;
  dewormed: boolean;
  has_cert: boolean;
  microchip: boolean;
  location: string;
  published_date: string;
  image_url: string;
  additional_info?: string;
}