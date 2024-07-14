<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modalId?: string;
    options?: any;
    inline?: boolean;
    isAsync?: boolean;
    routerBased?: boolean;
  }>(),
  {
    modalId: "",
    isAsync: false,
    inline: false,
    options: {},
  }
);

const emit = defineEmits(["destroy", "reject"]);

const { lastModal, adjustScroll, repositionScroll } = useModals();

const wrapperRef = ref<HTMLElement>();

function handleDestory() {
  emit("destroy");

  if (props.isAsync) emit("reject");
}

// onClickOutside(
//   wrapperRef,
//   (event: any) => {
//     if (event.currentTarget) {
//       const targetModalId = event.target?.dataset?.modalId;

//       if (targetModalId === props.modalId) handleDestory();
//     }
//   },
//   {
//     ignore: [".modal-content-wrapper"],
//   }
// );

onBeforeMount(() => {
  if (props.routerBased) adjustScroll();
});

onUnmounted(() => {
  if (props.routerBased) repositionScroll();
});
</script>

<template>
  <div
    :data-modal-id="modalId"
    class="modal fixed inset-0 z-50 overflow-y-auto bg-gri-400/20 before:pointer-events-none before:w-full before:backdrop-blur-[4px] before:h-full before:absolute before:content-['']"
  >
    <div
      :data-modal-id="modalId"
      class="modal-height-wrapper flex h-full justify-center text-center sm:h-auto sm:min-h-screen sm:items-center sm:p-0"
    >
      <div
        :class="[
          {
            'mt-auto rounded-t-7.5': options.sheetPosition === 'bottom',
            'mb-auto rounded-b-7.5': options.sheetPosition === 'top',
          },
          options.wrapperClass,
        ]"
        :data-sheet-position="options.sheetPosition"
        class="modal-inner relative inline-block w-full max-w-fit bg-gri-950 text-left align-middle sm:my-6 sm:rounded-7.5"
        role="dialog"
        aria-modal="true"
      >
        <div
          ref="wrapperRef"
          :class="[
            {
              'pb-8': options.sheetPosition === 'bottom',
              'py-8': options.sheetPosition === 'top',
            },
            options.contentClass,
          ]"
          class="modal-content-wrapper relative w-full rounded-[inherit]"
        >
          <button
            type="button"
            class="absolute right-0 top-0 z-50 m-7.5 flex h-7.5 w-7.5 items-center justify-center rounded-full border-slate-700 bg-slate-800"
            aria-label="Close modal"
            @click="handleDestory"
          >
            <SvgoX class="w-3 h-3" />
          </button>
          <slot />
        </div>
        <!-- <CommonModalSnack v-bind="options.snackOptions" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.backrop-animation {
  animation: backdrop-animation 200ms ease-out;
}

@keyframes backdrop-animation {
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>