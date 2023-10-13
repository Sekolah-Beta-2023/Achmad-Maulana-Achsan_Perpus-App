<template>
  <div>
    <nav
      class="w-full lg:h-20 md:h-20 h-16 flex justify-between items-center bg-white lg:px-28 md:px-20 px-5 fixed top-0 overflow-auto shadow-md"
    >
      <nuxt-link class="lg:mt-3 md:mt-2 mt-1" to="/">
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
