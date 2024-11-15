export type State = {
	default?: string;
	hover?: string;
	focus?: string;
	active?: string;
	visited?: string;
	disabled?: string;
	checked?: string;
};

/**
 * Interface defining the types of CSS classes in TailwindCSS
 */
export type Utility = {
	/**
	 * General layout such as 'container', 'block', 'aspect-ratio'
	 * @see https://tailwindcss.com/docs/aspect-ratio
	 */
	layout?: string | State;
	/**
	 * Flexbox layout such as 'flex', 'flex-row', 'gap-x-5', 'justify-center'
	 * @see https://tailwindcss.com/docs/flex-basis
	 */
	flex?: string | State;
	/**
	 * Grid layout such as 'grid', 'grid-cols-3', 'gap-4'
	 * @see https://tailwindcss.com/docs/grid-template-columns
	 */
	grid?: string | State;
	/**
	 * Spacing like 'm-4', 'p-4', 'space-x-4'
	 * @see https://tailwindcss.com/docs/padding
	 */
	spacing?: string | State;
	/**
	 * Sizing elements such as 'w-full', 'h-64'
	 * @see https://tailwindcss.com/docs/width
	 */
	sizing?: string | State;
	/**
	 * Typography like 'text-base', 'font-bold'
	 * @see https://tailwindcss.com/docs/font-family
	 */
	typography?: string | State;
	/**
	 * Background properties such as 'bg-blue-500', 'bg-opacity-75'
	 * @see https://tailwindcss.com/docs/background-attachment
	 */
	background?: string | State;
	/**
	 * Borders such as 'border', 'border-gray-300', 'rounded-lg'
	 * @see https://tailwindcss.com/docs/border-radius
	 */
	border?: string | State;
	/**
	 * Visual effects like 'shadow', 'opacity-50'
	 * @see https://tailwindcss.com/docs/box-shadow
	 */
	effect?: string | State;
	/**
	 * Filters like 'filter', 'blur-sm', 'brightness-150'
	 * @see https://tailwindcss.com/docs/blur
	 */
	filter?: string | State;
	/**
	 * Table styling such as 'table', 'table-auto', 'table-fixed'
	 * @see https://tailwindcss.com/docs/table-layout
	 */
	table?: string | State;
	/**
	 * Transitions like 'transition', 'duration-300'
	 * @see https://tailwindcss.com/docs/transition-property
	 */
	transition?: string | State;
	/**
	 * Animations such as 'animate-bounce', 'animate-spin'
	 * @see https://tailwindcss.com/docs/animation
	 */
	animation?: string | State;
	/**
	 * Transforms like 'transform', 'scale-100', 'rotate-45'
	 * @see https://tailwindcss.com/docs/scale
	 */
	transform?: string | State;
	/**
	 * if you want to combine transition, animation and transform
	 * @see https://tailwindcss.com/docs/transition-property
	 * @see https://tailwindcss.com/docs/animation
	 * @see https://tailwindcss.com/docs/scale
	 */
	motion?: ClassUtility['transition'] | ClassUtility['animation'] | ClassUtility['transform'];
	/**
	 * Interactivity like 'cursor-pointer', 'select-none'
	 * @see https://tailwindcss.com/docs/accent-color
	 */
	interactive?: string | State;
	/**
	 * Styling SVG elements such as 'fill-current', 'stroke-current'
	 * @see https://tailwindcss.com/docs/fill
	 */
	svg?: string;
	/**
	 * Accessibility like 'sr-only', 'not-sr-only'
	 * @see https://tailwindcss.com/docs/screen-readers
	 */
	accessible?: string | State;

	/**
	 * Anything beyond above actegory or your custom classes'
	 */
	custom?: string | State;
};

// Recursive definition for nested styles
export type Styles = {
	[key: string]: Utility | Styles;
};

/**
 * Define a type for deep partial objects
 */
type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Define a type for deeply nested styles, merging with ClassUtility
 */
export type DeepStyles<T> = {
	[K in keyof T]?: T[K] extends object ? DeepStyles<T[K]> & Utility : T[K];
};
