import { z } from "zod";

export const OrderFormSchema = z.object({
  product_name: z.string(),
  customer_name: z
    .string()
    .refine(
      (val) => /^[\u0980-\u09FF\sa-zA-Z]+$/.test(val),
      "Name must contain only Bangla or English letters and spaces.",
    ),
  customer_mobile: z
    .string()
    .refine(
      (val) => /^[\u09E6-\u09EF\d]+$/.test(val),
      "Mobile number must contain only Bangla or English numerals.",
    ),
  customer_address: z
    .string()
    .refine(
      (val) => /^[\u0980-\u09FF\sa-zA-Z\d]+$/.test(val),
      "Address must contain only Bangla or English letters, numerals, and spaces.",
    ),
  product_color: z.string(),
  product_weight_and_height: z.string(),
  product_quantity: z.number(),
  product_shipping: z.number(),
  total: z.number(),
});

export type TOrderFormSchema = z.infer<typeof OrderFormSchema>;
