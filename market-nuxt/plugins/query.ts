import { VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.use(VueQueryPlugin, {
        queryClientConfig: {
            defaultOptions: {
                queries: {
                    gcTime: 1_000 * 60 * 60 * 24, // 24 hours
                    networkMode: 'offlineFirst',
                    refetchOnWindowFocus: false,
                    retry: 0,
                },
                mutations: { networkMode: 'offlineFirst' },
            },
        },
    })
})
