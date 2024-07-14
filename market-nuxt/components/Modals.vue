<script setup>
const { modals } = useModals();
</script>

<template>
  <Teleport to="body">
    <TransitionGroup :duration="300" name="modals">
      <Modal
        v-for="modal in modals"
        :key="modal.id"
        :modal-id="modal.id"
        :options="modal.options"
        :inline="false"
        :is-async="modal.async"
        :show="true"
        @destroy="modal.destroy"
        @reject="modal.onReject"
      >
        <component
          :is="modal.component"
          v-bind="modal.componentProps"
          @destroy="modal.destroy"
          @resolve="modal.onResolve"
          @reject="modal.onReject"
        />
      </Modal>
    </TransitionGroup>
  </Teleport>
</template>