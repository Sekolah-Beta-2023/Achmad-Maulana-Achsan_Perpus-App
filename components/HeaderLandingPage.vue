<template>
  <div>
    <nav
      class="w-full h-20 flex justify-between items-center bg-white px-28 fixed top-0 overflow-auto shadow-md"
    >
      <nuxt-link class="mt-3" to="/">
        <img src="../assets/perpus-app-hijau.svg" alt="" />
      </nuxt-link>
      <ul class="flex">
        <li class="text-base text-green-dark mx-4">
          <nuxt-link to="/masuk">Masuk</nuxt-link>
        </li>
        <li class="text-base text-green-dark">
          <nuxt-link to="/daftar"> Daftar </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderLandingPage',
}
</script>
