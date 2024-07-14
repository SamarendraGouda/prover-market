<script setup lang="ts">
import type { Connector } from "@wagmi/core";
import { useAccount } from "@wagmi/vue";
import { useConnect } from "@wagmi/vue";

defineProps<{
  connector: Connector;
}>();

const emit = defineEmits(["destroy", "resolve"]);
const pending = ref(false);
const { connectAsync } = useConnect();
const { chainId } = useAccount();

async function handleConnect(connector: Connector) {
  try {
    pending.value = true;
    await connectAsync({
      connector: connector.connector(),
      chainId: chainId.value,
    });
    emit("resolve", true);
  } catch (e: any) {
    console.error(e);
    emit("resolve", false);
  } finally {
    pending.value = false;
  }
}
</script>

<template>
  <li>
    <button
      class="group flex w-full items-center justify-between rounded-full bg-white/[4%] px-5 py-3.5 transition-colors hover:bg-white/[8%]"
      @click="handleConnect(connector)"
    >
      <div class="flex items-center gap-4">
        <img :src="connector.icon" class="w-6 h-6" />
        {{ connector.name }}
      </div>
      <!-- <Spinner v-if="pending" :class="`text-connectors-${connector.id}`" /> -->
      <!-- <SvgoArrowRight
        v-else
        class="-translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
      /> -->
    </button>
  </li>
</template>