<!-- eslint-disable vue/attribute-hyphenation -->
import SideBar from '~/components/SideBar.vue';
<template>
  <div class="flex">
    <SideBar isDashboard="isDashboard" />
    <div class="bg-green-light w-full h-screen overflow-auto">
      <div class="flex justify-center w-full">
        <NavBar menu="Dashboard" username="John Doe" />
      </div>
      <div class="flex flex-col justify-around items-center h-full">
        <div class="mt-36">
          <h1 class="text-xl font-bold text-green-dark text-center">
            Selamat Datang di Perpustakaan App
          </h1>
          <p class="text-sm font-inter text-green-dark text-center my-3">
            "Kendalikan Pengetahuan, Kelola Komunitas: Pespus App, Pengelolaan
            Mudah untuk Admin yang Efisien!"
          </p>
        </div>
        <div class="w-full flex justify-center items-center mb-6">
          <nuxt-link to="/buku">
            <img
              width="600px"
              src="../assets/dashboardimage.svg"
              alt="dashboard-image"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  components: {
    SideBar,
    NavBar,
  },
  isDashboard: true,
}
</script>
