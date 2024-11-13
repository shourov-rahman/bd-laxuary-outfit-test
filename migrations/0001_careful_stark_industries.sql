CREATE TABLE `orders` (
	`order_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`mobile` text NOT NULL,
	`address` text NOT NULL,
	`color` text,
	`weight_and_height` text,
	`quantity` integer NOT NULL,
	`shipping` real NOT NULL,
	`total` real NOT NULL
);
