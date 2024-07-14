<template>
  <main>
    <header class="flex flex-row items-center justify-between px-24 py-12">
      <div class="flex flex-row gap-12 items-end">
        <NuxtLink to="/" class="text-3xl font-semibold">Prove.</NuxtLink>
        <div class="flex flex-row gap-4 items-center text-white/40">
          <NuxtLink to="/user" active-class="text-white">User</NuxtLink>
          <NuxtLink to="/prover" active-class="text-white">Prover</NuxtLink>
        </div>
      </div>
      <NavWalletConnection />
    </header>

    <slot />

    <footer
      class="flex w-full justify-center items-center text-white/40 py-4 mt-4"
    >
      <p>&copy; Prove, ETHGlobal Brussels 2024</p>
    </footer>
  </main>
</template>