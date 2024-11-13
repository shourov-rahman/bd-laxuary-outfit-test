ALTER TABLE `orders` ADD `product_name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` ADD `customer_name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` ADD `customer_mobile` text NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` ADD `customer_address` text NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` ADD `product_color` text;--> statement-breakpoint
ALTER TABLE `orders` ADD `product_weight_and_height` text;--> statement-breakpoint
ALTER TABLE `orders` ADD `product_quantity` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` ADD `product_shipping` real NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `name`;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `mobile`;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `address`;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `color`;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `weight_and_height`;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `quantity`;--> statement-breakpoint
ALTER TABLE `orders` DROP COLUMN `shipping`;