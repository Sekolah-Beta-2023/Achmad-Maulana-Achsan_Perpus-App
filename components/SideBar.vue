<template>
  <div
    class="w-56 bg-white h-screen flex flex-col justify-between items-center"
  >
    <div>
      <div class="w-72 h-20 rounded-2xl flex justify-center items-center">
        <div class="mt-3">
          <img src="../assets/icon-dashboard-2.svg" alt="" />
        </div>
      </div>
      <ul class="font-inter text-green-dark gap-3 flex items-center flex-col">
        <li
          class="w-48 h-12 rounded-xl flex justify-start items-center hover:bg-white hover:shadow-md hover:font-bold"
          :class="[isDashboard ? 'shadow-md font-bold' : '']"
        >
          <div class="flex items-center p-4">
            <div class="mr-4">
              <img src="../assets/icon-dashboard.svg" alt="icon-dashboard" />
            </div>
            <a href="/dashboard" class="text-base"> Dashboard </a>
          </div>
        </li>
        <li
          class="w-48 h-12 rounded-xl flex justify-start items-center hover:bg-white hover:shadow-md hover:font-bold"
          :class="[isBooks ? 'shadow-md font-bold' : '']"
        >
          <div class="flex items-center justify-start p-4 w-full">
            <div class="mr-4">
              <img src="../assets/icon-book.svg" alt="icon-book" />
            </div>
            <a href="/buku" class="text-base"> Buku </a>
          </div>
        </li>
        <li
          class="w-48 h-12 rounded-xl flex justify-start items-center hover:bg-white hover:shadow-md hover:font-bold"
          :class="[isTambahBuku ? 'shadow-md font-bold' : '']"
        >
          <div class="flex w-full justify-start items-center p-4">
            <div class="mr-4">
              <img src="../assets/icon-tambahbuku.svg" alt="icon-tambahbuku" />
            </div>

            <a href="/tambah-buku" class="text-base"> Tambah Buku </a>
          </div>
        </li>
        <li
          class="w-48 h-12 rounded-xl flex justify-start items-center hover:bg-white hover:shadow-md hover:font-bold"
          :class="[isPengguna ? 'shadow-md font-bold' : '']"
        >
          <div class="flex w-full justify-start items-center p-4">
            <div class="mr-4">
              <img src="../assets/icon-pengguna.svg" alt="icon-pengguna" />
            </div>

            <a href="/users" class="text-base"> Pengguna </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="mb-12 flex justify-center items-center">
      <div @click="logout">
        <button
          class="rounded-sm w-40 h-12 bg-orange-light text-black-light font-semibold text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  name: 'SideBar',
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
  methods: {
    logout() {
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Berhasil di Logout',
        showConfirmButton: false,
        timer: 1500,
      })
      window.location.replace('/')
    },
  },
}
</script>
