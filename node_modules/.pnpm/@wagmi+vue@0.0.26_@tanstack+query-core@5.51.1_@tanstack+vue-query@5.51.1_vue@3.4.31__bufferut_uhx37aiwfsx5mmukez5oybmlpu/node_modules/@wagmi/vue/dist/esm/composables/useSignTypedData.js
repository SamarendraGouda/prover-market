import { signTypedDataMutationOptions, } from '@wagmi/core/query';
import { useMutation, } from '../utils/query.js';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/vue/api/composables/useSignTypedData */
export function useSignTypedData(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = signTypedDataMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        signTypedData: mutate,
        signTypedDataAsync: mutateAsync,
    };
}
//# sourceMappingURL=useSignTypedData.js.map