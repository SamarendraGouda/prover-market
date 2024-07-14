<template>
  <div class="px-24 mt-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold ml-2">Your Tasks</h2>
      <UButton class="mt-4" disabled>Create Task</UButton>
    </div>
    <div class="mt-4 flex flex-col gap-4">
      <UserTable />
      <!-- <Element /> -->
    </div>
  </div>
</template>