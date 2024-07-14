<script setup lang="ts">
defineProps<{
  buttonClass?: string;
}>();

defineEmits(["destroy", "resolve"]);
const { $connectors } = useNuxtApp();
</script>

<template>
  <div class="relative">
    <div class="mb-[25px] flex flex-col gap-2.5">
      <span class="text-[26px] font-semibold leading-7.5">Connect wallet</span>
    </div>

    <ul class="flex flex-col-reverse gap-[15px]">
      <ConnectorItem
        v-for="connector in $connectors"
        :key="connector.id"
        :connector="connector"
        @destroy="$emit('destroy')"
        @resolve="$emit('resolve')"
      />
    </ul>
  </div>
</template>