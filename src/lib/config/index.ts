// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { userConfig } from 'virtual:utica';
import { defaultConfig, type DefaultConfig } from '$lib/config/plugins/vite/default.js';
import merge from 'deepmerge';

export function useConfig(): DefaultConfig {
	return merge(defaultConfig, userConfig);
}
