import { addImports, createResolver, defineNuxtModule } from 'nuxt/kit';
export const wagmiModule = defineNuxtModule({
    meta: {
        name: '@wagmi/vue',
        configKey: 'wagmi',
        compatibility: {
            nuxt: '^3.0.0',
        },
    },
    setup(_options, nuxt) {
        const { resolve } = createResolver(import.meta.url);
        // Add types
        nuxt.hook('prepare:types', ({ references }) => {
            references.push({ types: '@wagmi/vue/nuxt' });
        });
        // Add auto imports
        const composables = resolve('./runtime/composables');
        const names = [
            'useAccount',
            'useAccountEffect',
            'useBalance',
            'useBlockNumber',
            'useChainId',
            'useChains',
            'useClient',
            'useConfig',
            'useConnect',
            'useConnections',
            'useConnectorClient',
            'useConnectors',
            'useDisconnect',
            'useEnsAddress',
            'useEnsAvatar',
            'useEnsName',
            'useEstimateGas',
            'useReadContract',
            'useReconnect',
            'useSendTransaction',
            'useSignMessage',
            'useSignTypedData',
            'useSimulateContract',
            'useSwitchAccount',
            'useSwitchChain',
            'useTransaction',
            'useTransactionReceipt',
            'useWaitForTransactionReceipt',
            'useWatchBlockNumber',
            'useWriteContract',
        ];
        addImports(names.map((name) => ({ from: composables, name })));
    },
});
//# sourceMappingURL=module.js.map