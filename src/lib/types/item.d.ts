export type Item<T = unknown> = {
	items?: T[]; // Recursive type allows nested items
	[key?: string]: unknown;
};
