<template>
  <div class="px-24 mt-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold ml-2">Available Tasks</h2>
      <!-- <UButton class="mt-4" disabled>Create Task</UButton> -->
    </div>
    <div class="mt-4 flex flex-col gap-4">
      <ProverTable />
      <!-- <Element /> -->
    </div>

    <div class="flex justify-between items-center mt-6">
      <h2 class="text-xl font-semibold ml-2">Task History</h2>
      <!-- <UButton class="mt-4" disabled>Create Task</UButton> -->
    </div>
    <div class="mt-4 flex flex-col gap-4">
      <ProverHistory />
      <!-- <Element /> -->
    </div>
  </div>
</template>