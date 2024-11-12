import { HTMLAnchorAttributes } from 'svelte/elements';
export interface Link extends HTMLAnchorAttributes {
	label?: string;
	title?: Link['label'];
	description?: string;
	active?: boolean;
	class?: string;
	disabled?: boolean;
	icon?: string | unknown;
	links?: Link[];
}

export interface AccordionLink extends Omit<Link, 'id'> {
	id: string;
}
