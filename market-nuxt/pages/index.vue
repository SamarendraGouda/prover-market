<template>
  <div class="px-24 mt-52 flex flex-col gap-4 justify-center items-center">
    <h1 class="text-8xl font-bold">Prove.</h1>
    <p class="text-2xl font-light text-white/60">
      AVS based decentralized ZK Prover Market
    </p>

    <div class="flex flex-row justify-center items-center gap-4 mt-8">
      <NuxtLink to="/user" class="text-white">
        <UButton>I am an User</UButton>
      </NuxtLink>
      <NuxtLink to="/prover" class="text-white">
        <UButton>I am a Prover</UButton>
      </NuxtLink>
    </div>

    <div
      class="flex flex-row justify-center items-center gap-2 mt-32 text-2xl text-white/40"
    >
      <div>500+ Proofs</div>
      <div class="mx-4">|</div>
      <div>100+ Users</div>
      <div class="mx-4">|</div>
      <div>50+ Provers</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});
</script>