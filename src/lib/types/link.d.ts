import { HTMLAnchorAttributes } from 'svelte/elements';
export interface Link extends HTMLAnchorAttributes {
	label?: string;
	title?: Link['label'];
	description?: string;
	links?: Link[];
	items?: Link[];
	[key: string]: string | unknown;
}
