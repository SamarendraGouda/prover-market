export default defineAppConfig({
    ui: {
        strategy: 'override',
        primary: 'violet',
        button: {
            rounded: 'rounded-7.5',
            size: {
                xl: 'leading-5',
            },
            padding: {
                lg: 'px-5 py-2.5',
                md: 'px-5 py-2',
                xl: 'px-7.5 py-4',
                xs: 'px-4 py-1.5',
            },
            default: {
                size: 'lg',
                color: 'primary',
                loadingIcon: 'IconsSpinner',
            },
            color: {
                gray: {
                    'outline': 'ring-1 ring-inset ring-slate-500 text-slate-300 bg-transparent focus-visible:ring-2 focus-visible:ring-slate-400',
                    'solid': 'ring-1 ring-inset  ring-slate-600 bg-slate-700 hover:bg-slate-400/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-slate-400',
                    'glass': 'ring-1 ring-inset ring-white/[0.08] bg-white/[0.04] hover:bg-slate-400/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-slate-400',
                    'glass-trailing': 'ring-1 ring-white/[0.08] bg-white/[0.04] hover:bg-slate-400/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-slate-400',
                    'icon': 'bg-gri-800 hover:bg-gri-800/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-slate-400',
                },
                primary: {
                    'outline-usdt': 'ring-1 ring-inset ring-token-usdt bg-token-usdt/10 hover:bg-token-usdt/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-token-usdt',
                    'outline-usdc': 'ring-1 ring-inset ring-token-usdc bg-token-usdc/10 hover:bg-token-usdc/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-token-usdc',
                    'outline': 'ring-1 ring-inset ring-primary-400 bg-primary-500/10 hover:bg-primary-500/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-primary-400',
                    'solid': 'ring-1 ring-inset text-white ring-primary-400 bg-primary-500 hover:bg-primary-400 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-primary-400',
                    'soft': 'bg-primary-400/10 text-primary-400',
                },
                ghost: {
                    solid: 'ring-1 ring-inset text-white ring-white/[0.08] py-2.5 px-4 bg-white/[0.04]',
                },
                orange: {
                    outline: 'ring-1 ring-inset ring-orange-400 bg-orange-500/10 hover:bg-orange-500/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-orange-400',
                    solid: 'ring-1 ring-inset text-white ring-orange-400 bg-orange-500 hover:bg-orange-400 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-orange-400',
                },
                green: {
                    outline: 'ring-1 ring-inset ring-green-400 bg-green-500/10 hover:bg-green-500/20 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-green-400',
                    solid: 'ring-1 ring-inset text-white ring-green-400 bg-green-500 hover:bg-green-400 disabled:bg-gri-800 focus-visible:ring-2 focus-visible:ring-green-400',
                },
            },
        },
    },
})