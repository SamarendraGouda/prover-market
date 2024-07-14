import type { Config, ResolvedRegister } from '@wagmi/core';
import type { ConfigParameter } from '../types/properties.js';
import type { DeepMaybeRef } from '../types/ref.js';
export type UseConfigParameters<config extends Config = Config> = DeepMaybeRef<ConfigParameter<config>>;
export type UseConfigReturnType<config extends Config = Config> = config;
/** https://wagmi.sh/vue/api/composables/useConfig */
export declare function useConfig<config extends Config = ResolvedRegister['config']>(parameters_?: UseConfigParameters<config>): UseConfigReturnType<config>;
//# sourceMappingURL=useConfig.d.ts.map