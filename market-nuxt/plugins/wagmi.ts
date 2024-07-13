import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
import { WagmiPlugin } from '@wagmi/vue'
import { fallback } from '@wagmi/vue'


export default defineNuxtPlugin((nuxtContext) => {
    const chains = [sepolia]
    const rpcList = {
        11155111: [
            'https://sepolia.drpc.org',
            'https://rpc2.sepolia.org',
        ],
    }

    const config = createConfig({
        chains: [sepolia],
        // connectors: connectors.map(i => i.connector()),
        transports: {
            [sepolia.id]: fallback(rpcList[sepolia.id].map(i => http(i))),
        },
    })

    nuxtContext.vueApp.use(WagmiPlugin, { config })

    return {
        provide: {
            supportedChains: chains,
            wagmiConfig: config,
            //   connectors,
        },
    }
})
