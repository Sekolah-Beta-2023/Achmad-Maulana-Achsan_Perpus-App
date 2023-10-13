<!-- eslint-disable vue/attribute-hyphenation -->

<template>
  <div class="flex">
    <SideBar class="lg:flex md:flex hidden" :isDashboard="isDashboard" />
    <div
      class="bg-green-light w-full h-screen lg:overflow-auto md:overflow-auto lg:p-0 md:p-0 overflow-auto"
    >
      <div class="flex lg:mt-0 md:mt-0 justify-center w-full mt-3">
        <NavBar menu="Dashboard" nama="John Doe" />
      </div>
      <div class="justify-between md:flex-none flex flex-col md:h-full w-full">
        <div
          class="flex flex-col md:justify-around lg:justify-around items-center lg:h-full md:h-full px-5 h-screen"
        >
          <div class="">
            <div class="mt-36 md:px-0">
              <h1 class="text-xl font-bold text-green-dark text-center">
                Selamat Datang di Perpustakaan App
              </h1>
              <p class="text-sm font-inter text-green-dark text-center my-3">
                "Kendalikan Pengetahuan, Kelola Komunitas: Pespus App,
                Pengelolaan Mudah untuk Admin yang Efisien!"
              </p>
            </div>
            <div
              class="w-full flex justify-center items-center mb-6 md:mt-0 lg:mt-0 mt-10"
            >
              <nuxt-link to="/buku" class="md:w-[500px] lg:w-[600px] w-52">
                <img src="../assets/dashboardimage.svg" alt="dashboard-image" />
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="lg:hidden md:hidden fixed bottom-0 right-0 left-0">
          <BottomBar :isDashboard="isDashboard" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BottomBar from '~/components/BottomBar.vue'
import NavBar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'

export default {
  components: {
    SideBar,
    NavBar,
    BottomBar,
  },
  data() {
    return {
      isDashboard: true,
      admin: '',
    }
  },
  mounted() {
    this.admin = localStorage.getItem('token')
    if (!this.admin) {
      window.location.replace('/masuk')
    }
  },
}
</script>
