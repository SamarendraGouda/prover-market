import { signMessageMutationOptions, } from '@wagmi/core/query';
import { useMutation, } from '../utils/query.js';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/vue/api/composables/useSignMessage */
export function useSignMessage(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = signMessageMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        signMessage: mutate,
        signMessageAsync: mutateAsync,
    };
}
//# sourceMappingURL=useSignMessage.js.map