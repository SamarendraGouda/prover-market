<script setup lang="ts">
import { shortenAddress } from "@/utils/address";
import { openWeb3Modal } from "@/composables/modal";
import { useAccount } from "@wagmi/vue";
// import { useDisconnect } from "@wagmi/vue";

const { address, isConnected } = useAccount();
// const { disconnectAsync } = useDisconnect();

const openConnectModal = async () => {
  await openWeb3Modal();
};

// const disconnect = async () => {
//   await disconnectAsync();
// };
</script>

<template>
  <UButton @click="openConnectModal">Connect Wallet</UButton>

  <!-- <div
    v-else
    class="border border-white/40 px-4 py-2 rounded-7.5 font-medium flex flex-row justify-between items-center gap-2"
  >
    {{ shortenAddress(address) }}
    <SvgoDisconnect
      class="w-5 h-5 text-white/40 hover:text-red-500/40"
      @click="disconnect"
    />
  </div> -->
</template>