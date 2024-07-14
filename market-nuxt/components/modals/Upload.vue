<template>
  <div class="relative">
    <div class="mb-[25px] flex flex-col gap-2.5">
      <span class="text-[26px] font-semibold leading-7.5"
        >Upload proof for task</span
      >
    </div>

    <div class="mt-4">
      <p>Enter the zk Proof</p>
      <UInput v-model="proof" />
    </div>

    <UButton class="mt-4" block @click="bid">Submit</UButton>
  </div>
</template>
    
<script setup lang="ts">
const proof = ref("");

async function bid() {
  console.log(proof.value);
}
</script>