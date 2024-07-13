<script setup lang="ts">
import { shortenAddress } from "~/utils/address";

const { address, isConnected } = useAccount();
const { connectAsync, connectors } = useConnect();
const { disconnectAsync } = useDisconnect();

async function handleConnect() {
  console.log(connectors);
  await connectAsync({
    connector: connectors.value[1],
    chainId: 1115511,
  });
}

async function handleDisconnect() {
  await disconnectAsync();
}
</script>

<template>
  <UButton v-if="!isConnected" @click="handleConnect"> Connect Wallet </UButton>

  <div
    v-else
    class="border border-white/40 px-4 py-2 rounded-7.5 font-medium flex flex-row justify-between items-center gap-2"
  >
    {{ shortenAddress(address) }}
    <SvgoDisconnect
      class="w-5 h-5 text-white/40 hover:text-red-500/40"
      @click="handleDisconnect"
    />
  </div>
</template>