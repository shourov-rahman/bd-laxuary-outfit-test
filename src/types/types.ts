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

export type TSingleProductWithImage = {
  name: string;
  description: string | null;
  slug: string;
  discounted_price: number;
  regular_price: number;
  images: {
    product_id: number;
    url: string;
    alt: string | null;
    isPrimary: number;
    image_order: number;
  }[];
};

export type TOrder = {
  product_name: string;
  customer_name: string;
  customer_mobile: string;
  customer_address: string;
  product_color: string | null;
  product_weight_and_height: string | null;
  product_quantity: number;
  product_shipping: number;
  total: number;
};
