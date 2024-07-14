<script setup lang="ts">
const columns = [
  {
    key: "taskId",
    label: "Task Id",
  },
  {
    key: "cid",
    label: "Circuit ID",
  },
  {
    key: "assignee",
    label: "Assignee",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "ttl",
    label: "Time to Live (hours)",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const rows = [
  {
    taskId: "1",
    cid: "0x1234567890",
    assignee: "0x1234567890",
    amount: "100 ETH",
    ttl: "24",
    status: "pending",
  },
  {
    taskId: "2",
    cid: "0x1234567890",
    assignee: "0x1234567890",
    amount: "100 ETH",
    ttl: "24",
    status: "success",
  },
  {
    taskId: "3",
    cid: "0x1234567890",
    assignee: "0x1234567890",
    amount: "100 ETH",
    ttl: "24",
    status: "success",
  },
  {
    taskId: "4",
    cid: "0x1234567890",
    assignee: "0x1234567890",
    amount: "100 ETH",
    ttl: "24",
    status: "success",
  },
  {
    taskId: "5",
    cid: "0x1234567890",
    assignee: "0x1234567890",
    amount: "100 ETH",
    ttl: "24",
    status: "failed",
  },
];
</script>

<template>
  <div class="bg-white/[0.04] rounded-5 px-4 py-2">
    <UTable :columns="columns" :rows="rows" class="!min-h-[468px]">
      <template #status-data="{ row }">
        <TagsPending v-if="row.status == 'pending'" />
        <TagsSuccess v-else-if="row.status == 'success'" />
        <TagsFailed v-else />
      </template>

      <template #actions-data="{ row }">
        <UButton variant="outline">
          {{ row.status === "failed" ? "Claim Refund" : "View Proof" }}
        </UButton>
      </template>
    </UTable>
  </div>
</template>

