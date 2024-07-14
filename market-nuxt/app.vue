<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Modals />
    </NuxtLayout>
  </div>
</template>

<style>
.modals-enter .modal-inner {
  @apply ease-out duration-300 sm:duration-200;
}

.modals-enter-active .modal-inner,
.modals-leave-active .modal-inner,
.modals-leave .modal-inner {
  @apply ease-in duration-300 sm:duration-200;
}

.modals.leave-from .modal-inner,
.modals-enter-to .modal-inner {
  @apply opacity-100 translate-y-0 sm:scale-100;
}

.modals-enter-from .modal-inner,
.modals-leave-to .modal-inner {
  @apply opacity-0 translate-y-96 sm:translate-y-0 sm:scale-95;
}

.modals-enter-from .modal-inner[data-sheet-position="top"],
.modals-leave-to .modal-inner[data-sheet-position="top"] {
  @apply opacity-0 -translate-y-32 sm:translate-y-0 sm:scale-95;
}
</style>
