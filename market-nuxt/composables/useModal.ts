const modals = ref([])
const lastModal = computed(
    () => modals.value[Math.max(0, modals.value.length - 1)],
)

function defaultOptions() {
    return {
        raw: false,
        clickToClose: true,
        wrapperClass: '',
        contentClass: '',
        sheetPosition: '',
        snackOptions: {
            open: false,
            type: 'success',
            message: '',
            timeout: 6000,
        },
    }
}

async function openModal({
    component = null,
    componentProps = {},
    options = defaultOptions(),
    onReject = async () => { },
    onResolve = async () => { },
    async = false,
    ...params
}): Promise<{
    modal: any
    success: boolean
    payload: any
}> {
    const id = params.id || Math.random().toString(36).substr(2, 9)

    const destroy = () => {
        // @ts-ignore
        modals.value = modals.value.filter(m => m.id !== id)

        if (!modals.value?.length)
            repositionScroll()
    }

    const mergedOptions = Object.assign({}, defaultOptions(), options)

    const modal = {
        id, //@ts-ignore
        component: markRaw(component),
        componentProps,
        destroy,
        onReject,
        onResolve,
        async,
        options: mergedOptions,
        ...params,
    }

    if (!modals.value.length)
        adjustScroll()

    // @ts-ignore
    modals.value.push(modal)

    if (!modal.async) {
        return {
            modal,
            success: true,
            payload: null,
        }
    }

    return new Promise((resolve) => {
        // @ts-ignore
        modal.onResolve = async (success = true, payload) => {
            destroy()
            resolve({
                modal,
                success,
                payload,
            })
        }

        // @ts-ignore
        modal.onReject = async (success: boolean, payload) => {
            destroy()
            resolve({
                modal,
                success,
                payload,
            })
        }
    })
}

function clearAllModals() {
    modals.value = []
    repositionScroll()
}

function adjustScroll() {
    if (import.meta.server)
        return
    const scrollBarWidth = window.innerWidth - document.body.clientWidth

    document.body.style.paddingRight = `${scrollBarWidth}px`
    document.body.classList.add('modal-open')
}

function repositionScroll() {
    if (import.meta.server)
        return
    document.body.classList.remove('modal-open')
    document.body.style.paddingRight = ''
}

export function useModals() {
    return {
        modals: readonly(modals),
        openModal,
        lastModal,
        clearAllModals,
        adjustScroll,
        repositionScroll,
    }
}