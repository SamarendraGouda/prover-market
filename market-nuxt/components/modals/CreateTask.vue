<template>
  <div class="relative">
    <div class="mb-[25px] flex flex-col gap-2.5">
      <span class="text-[26px] font-semibold leading-7.5">Create Task</span>
    </div>

    <div>
      <p>Choose Circuit</p>
      <UDropdown :items="items" v-model="selectedCircuit" class="w-full">
        <template #default="{ open }">
          <UButton variant="glass" class="px-[14px] w-full mt-2" color="gray">
            {{ selectedCircuit.label }}
            <!-- <SvgoChevronDown
              class="w-4 h-4 transition-transform"
              :class="open ? 'rotate-180' : ''"
            /> -->
          </UButton>
        </template>
      </UDropdown>
    </div>

    <div class="mt-4">
      <p>Maximum Estimated Spend</p>
      <UInput v-model="maxSpend" />
    </div>

    <div class="mt-4">
      <p>Maximum Generation Time</p>
      <UInput v-model="maxGenerationTime" />
    </div>

    <div class="mt-4">
      <p>Input Data</p>
      <UInput v-model="inputData" />
    </div>

    <UButton class="mt-4" block @click="createTask">Create Task</UButton>
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

async function createTask() {
  console.log(
    selectedCircuit.value,
    maxSpend.value,
    maxGenerationTime.value,
    inputData.value
  );
}
</script>