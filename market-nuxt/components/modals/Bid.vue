<template>
  <div class="relative">
    <div class="mb-[25px] flex flex-col gap-2.5">
      <span class="text-[26px] font-semibold leading-7.5"
        >Bid for this Task</span
      >
    </div>

    <div class="mt-4">
      <p>Bid Price</p>
      <UInput v-model="maxSpend" />
    </div>

    <div class="mt-4">
      <p>Maximum Generation Time</p>
      <UInput v-model="maxGenerationTime" />
    </div>

    <UButton class="mt-4" block @click="bid">Register Bid</UButton>
  </div>
</template>
  
  <script setup lang="ts">
const items = [
  [
    { label: "zk Addition", value: "circuit1" },
    { label: "zk Subtraction", value: "circuit2" },
    { label: "zk Multiplication", value: "circuit3" },
    { label: "zk Division", value: "circuit4" },
  ],
];

const selectedCircuit = ref(items[0][0]);
const maxSpend = ref(0);
const maxGenerationTime = ref(0);
const inputData = ref("");

async function bid() {
  console.log(
    selectedCircuit.value,
    maxSpend.value,
    maxGenerationTime.value,
    inputData.value
  );
}
</script>