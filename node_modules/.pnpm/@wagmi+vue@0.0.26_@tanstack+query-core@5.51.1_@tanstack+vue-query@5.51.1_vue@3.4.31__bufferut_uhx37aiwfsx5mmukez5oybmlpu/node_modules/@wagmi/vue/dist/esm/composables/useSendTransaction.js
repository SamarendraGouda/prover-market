import { useMutation } from '@tanstack/vue-query';
import { sendTransactionMutationOptions, } from '@wagmi/core/query';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/vue/api/composables/useSendTransaction */
export function useSendTransaction(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = sendTransactionMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        sendTransaction: mutate,
        sendTransactionAsync: mutateAsync,
    };
}
//# sourceMappingURL=useSendTransaction.js.map