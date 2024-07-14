import { useMutation } from '@tanstack/vue-query';
import { writeContractMutationOptions, } from '@wagmi/core/query';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/vue/api/composables/useWriteContract */
export function useWriteContract(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = writeContractMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        writeContract: mutate,
        writeContractAsync: mutateAsync,
    };
}
//# sourceMappingURL=useWriteContract.js.map