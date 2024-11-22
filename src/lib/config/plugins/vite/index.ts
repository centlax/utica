import { defaultConfig, type UserConfig } from './default.js';

export default function utica(config?: UserConfig) {
	const virtualModuleId = 'virtual:utica';
	const resolvedVirtualModuleId = '\0' + virtualModuleId;

	// Use default config if no user config is provided
	const finalConfig = config || defaultConfig;

	return {
		name: 'utica-plugin',
		resolveId(id: string) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId;
			}
		},

		load(id: string) {
			if (id === resolvedVirtualModuleId) {
				// Directly export the config
				return `export const userConfig = ${JSON.stringify(finalConfig, null, 2)};`;
			}
		}
	};
}
