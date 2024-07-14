import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
import { WagmiPlugin } from '@wagmi/vue'
import { fallback } from '@wagmi/vue'
import { metaMask, walletConnect } from '@wagmi/vue/connectors'

import metamaskIcon from '~/assets/icons/metamask.svg?inline'
import walletConnectIcon from '~/assets/icons/walletconnect.svg?inline'

export default defineNuxtPlugin((nuxtContext) => {
    const chains = [sepolia]
    const rpcList = {
        11155111: [
            'https://sepolia.drpc.org',
            'https://rpc2.sepolia.org',
        ],
    }

    const connectors = [
        {
            icon: metamaskIcon,
            id: 'metamask',
            name: 'MetaMask SDK',
            connector: () => metaMask({
                dappMetadata: {
                    name: "Example Node.js Dapp",
                    url: "https://example.com",
                }
            }),
        },
        {
            icon: walletConnectIcon,
            id: 'walletConnect',
            name: 'Wallet Connect',
            connector: () => walletConnect({
                projectId: '67f6204d6faaefe6f011ce06dfbbdc7a',
                metadata: {
                    name: 'wagmi',
                    description: '-',
                    url: 'https://wagmi.io',
                    icons: ['https://wagmi.io/favicon.ico'],
                },
            }),
        },
    ]

    const config = createConfig({
        chains: [sepolia],
        connectors: connectors.map(i => i.connector()),
        transports: {
            [sepolia.id]: fallback(rpcList[sepolia.id].map(i => http(i))),
        },
    })

    nuxtContext.vueApp.use(WagmiPlugin, { config })

    return {
        provide: {
            connectors,
            supportedChains: chains,
            wagmiConfig: config,
        },
    }
})
