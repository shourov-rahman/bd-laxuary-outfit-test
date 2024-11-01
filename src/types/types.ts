export type TProduct = {
  name: string;
  description: string | null;
  slug: string;
  discounted_price: number;
  regular_price: number;
};

export type TProductImage = {
  product_id: number;
  url: string;
  alt: string | null;
  isPrimary: number;
  image_order: number;
};

export type TProductWithImages = TProduct & {
  images: TProductImage[];
};

export type TOrder = {
  order_id: number;
  name: string;
  mobile: string;
  address: string;
  quantity: number | null;
  shipping: number | null;
  total: number | null;
};
