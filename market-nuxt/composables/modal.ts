import { ModalsWeb3 } from '#components'

const { openModal } = useModals()
export async function openWeb3Modal() {
    return openModal({
        // @ts-ignore
        component: ModalsWeb3,
        async: true,
        // @ts-ignore
        options: {
            wrapperClass: '!max-w-[440px]',
            contentClass: 'p-10',
        },
    })
}