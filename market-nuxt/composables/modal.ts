import { ModalsWeb3, ModalsCreateTask, ModalsBid, ModalsUpload } from '#components'

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

export async function openCreateTaskModal() {
    return openModal({
        // @ts-ignore
        component: ModalsCreateTask,
        async: true,
        // @ts-ignore
        options: {
            wrapperClass: '!max-w-[440px]',
            contentClass: 'p-10',
        },
    })
}

export async function openBidModal(taskId: any) {
    return openModal({
        // @ts-ignore
        component: ModalsBid,
        async: true,
        // @ts-ignore
        options: {
            wrapperClass: '!max-w-[440px]',
            contentClass: 'p-10',
        },
    })
}

export async function openUploadModal(taskId: any) {
    return openModal({
        // @ts-ignore
        component: ModalsUpload,
        async: true,
        // @ts-ignore
        options: {
            wrapperClass: '!max-w-[440px]',
            contentClass: 'p-10',
        },
    })
}