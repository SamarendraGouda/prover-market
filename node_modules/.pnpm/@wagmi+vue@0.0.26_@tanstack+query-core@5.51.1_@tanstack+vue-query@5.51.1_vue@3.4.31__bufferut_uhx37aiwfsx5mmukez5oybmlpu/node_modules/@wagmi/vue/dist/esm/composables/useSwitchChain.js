import { useMutation } from '@tanstack/vue-query';
import { switchChainMutationOptions, } from '@wagmi/core/query';
import { useChains } from './useChains.js';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/vue/api/composables/useSwitchChain */
export function useSwitchChain(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = switchChainMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        chains: useChains({ config }),
        switchChain: mutate,
        switchChainAsync: mutateAsync,
    };
}
//# sourceMappingURL=useSwitchChain.js.map