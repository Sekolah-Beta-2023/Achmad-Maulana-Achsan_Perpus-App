<template>
  <div class="bg-white w-full h-14 flex items-center justify-around">
    <!-- dashboard -->
    <nuxt-link
      class="flex flex-col justify-center items-center text-black-light"
      :class="isDashboard ? 'text-green-dark font-bold' : ''"
      to="/dashboard"
    >
      <div>
        <img src="../assets/icon-dashboard.svg" alt="icon-dashboard" />
      </div>
      <p class="text-sm font-inter">Dashboard</p>
    </nuxt-link>
    <!-- buku -->
    <nuxt-link
      class="flex flex-col justify-center items-center text-black-light"
      :class="isBooks ? 'text-green-dark font-bold' : ''"
      to="/buku"
    >
      <div>
        <img src="../assets/icon-book.svg" alt="icon-book" />
      </div>
      <p class="text-sm font-inter">Buku</p>
    </nuxt-link>
    <!-- tambah buku -->
    <nuxt-link
      class="flex flex-col justify-center items-center text-black-light"
      :class="isTambahBuku ? 'text-green-dark font-bold' : ''"
      to="/tambah-buku"
    >
      <div>
        <img src="../assets/icon-tambahbuku.svg" alt="icon-tambahbuku" />
      </div>
      <p class="text-sm font-inter">Tambah Buku</p>
    </nuxt-link>
    <!-- tambah  pengguna-->
    <nuxt-link
      class="flex flex-col justify-center items-center text-black-light"
      :class="isPengguna ? 'text-green-dark font-bold' : ''"
      to="/users"
    >
      <div>
        <img src="../assets/icon-pengguna.svg" alt="icon-tambahbuku" />
      </div>
      <p class="text-sm font-inter">Pengguna</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'BottomBar',
  props: {
    isDashboard: {
      type: Boolean,
      default: false,
    },
    isBooks: {
      type: Boolean,
      default: false,
    },
    isTambahBuku: {
      type: Boolean,
      default: false,
    },
    isPengguna: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
