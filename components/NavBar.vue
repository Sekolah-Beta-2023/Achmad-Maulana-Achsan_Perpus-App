<template>
  <div
    class="bg-white fixed h-16 md:w-1/2 lg:w-3/4 md:m-5 rounded-xl flex justify-between items-center p-5 z-50"
  >
    <div class="font-inter">
      <h2 class="font-bold lg:text-xl md:text-xl text-base text-green-dark">
        Perpustakaan App
      </h2>
      <p class="text-black-light lg:text-base md:text-base text-sm">
        {{ menu }}
      </p>
    </div>
    <div class="flex items-center">
      <div class="text-green-dark">
        <h3 class="text-xs text-right md:text-base lg:text-base">Hallo,</h3>
        <h3 class="font-bold md:text-base lg:text-base text-xs">{{ admin }}</h3>
      </div>
      <button
        class="md:w-12 lg:w-12 md:h-12 lg:h-12 w-8 h-8 focus:outline-none"
        @click="toggleDropdown"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.9999 61.25C49.4972 61.25 61.2499 49.4973 61.2499 35C61.2499 20.5027 49.4972 8.75001 34.9999 8.75001C20.5026 8.75001 8.74992 20.5027 8.74992 35C8.74992 49.4973 20.5026 61.25 34.9999 61.25ZM34.9999 64.1667C51.1087 64.1667 64.1666 51.1088 64.1666 35C64.1666 18.8913 51.1087 5.83334 34.9999 5.83334C18.8912 5.83334 5.83325 18.8913 5.83325 35C5.83325 51.1088 18.8912 64.1667 34.9999 64.1667Z"
            fill="#00899D"
          />
          <path
            d="M17.5 51.9604C17.5 50.454 18.6258 49.1808 20.125 49.0146C31.376 47.7692 38.675 47.8815 49.9012 49.0423C50.4618 49.1012 50.9932 49.322 51.4303 49.6779C51.8675 50.0337 52.1915 50.5092 52.3629 51.0462C52.5343 51.5832 52.5455 52.1585 52.3953 52.7018C52.2451 53.2451 51.94 53.7329 51.5171 54.1056C38.2681 65.6542 30.6965 65.4952 18.4333 54.1173C17.8354 53.5631 17.5 52.7756 17.5 51.9619V51.9604Z"
            fill="#00899D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.7509 50.4919C38.6136 49.3398 31.4196 49.2319 20.2838 50.4642C19.9172 50.5069 19.5793 50.6833 19.3347 50.9597C19.0901 51.236 18.9561 51.5929 18.9582 51.9619C18.9582 52.379 19.1317 52.7742 19.4248 53.0483C25.5032 58.6863 30.1086 61.234 34.6105 61.25C39.1284 61.2661 43.9817 58.7388 50.5588 53.0075C50.7677 52.8215 50.9182 52.5789 50.9918 52.309C51.0654 52.0391 51.059 51.7537 50.9734 51.4874C50.8879 51.2211 50.7268 50.9854 50.5097 50.8089C50.2927 50.6324 50.0291 50.5228 49.7509 50.4933V50.4919ZM19.9644 47.565C31.3336 46.3065 38.739 46.4202 50.0528 47.5913C50.8961 47.6793 51.6955 48.0113 52.3531 48.5467C53.0106 49.082 53.4979 49.7975 53.7551 50.6055C54.0123 51.4135 54.0283 52.2789 53.8012 53.0959C53.5741 53.9128 53.1138 54.6459 52.4765 55.2052C45.8046 61.0211 40.2484 64.1886 34.6017 64.1667C28.939 64.1463 23.6278 60.9248 17.443 55.1863C17.0002 54.7738 16.6471 54.2745 16.406 53.7194C16.1649 53.1644 16.0408 52.5656 16.0415 51.9604C16.0394 50.8731 16.4385 49.8233 17.1623 49.012C17.8862 48.2007 18.8839 47.6849 19.9644 47.5636V47.565Z"
            fill="#00899D"
          />
          <path
            d="M46.6666 29.1667C46.6666 32.2609 45.4374 35.2283 43.2495 37.4162C41.0616 39.6042 38.0941 40.8333 34.9999 40.8333C31.9057 40.8333 28.9383 39.6042 26.7503 37.4162C24.5624 35.2283 23.3333 32.2609 23.3333 29.1667C23.3333 26.0725 24.5624 23.105 26.7503 20.9171C28.9383 18.7292 31.9057 17.5 34.9999 17.5C38.0941 17.5 41.0616 18.7292 43.2495 20.9171C45.4374 23.105 46.6666 26.0725 46.6666 29.1667Z"
            fill="#00899D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.9999 37.9167C37.3206 37.9167 39.5462 36.9948 41.1871 35.3539C42.828 33.7129 43.7499 31.4873 43.7499 29.1667C43.7499 26.846 42.828 24.6204 41.1871 22.9795C39.5462 21.3385 37.3206 20.4167 34.9999 20.4167C32.6793 20.4167 30.4537 21.3385 28.8127 22.9795C27.1718 24.6204 26.2499 26.846 26.2499 29.1667C26.2499 31.4873 27.1718 33.7129 28.8127 35.3539C30.4537 36.9948 32.6793 37.9167 34.9999 37.9167ZM34.9999 40.8333C38.0941 40.8333 41.0616 39.6042 43.2495 37.4162C45.4374 35.2283 46.6666 32.2609 46.6666 29.1667C46.6666 26.0725 45.4374 23.105 43.2495 20.9171C41.0616 18.7292 38.0941 17.5 34.9999 17.5C31.9057 17.5 28.9383 18.7292 26.7503 20.9171C24.5624 23.105 23.3333 26.0725 23.3333 29.1667C23.3333 32.2609 24.5624 35.2283 26.7503 37.4162C28.9383 39.6042 31.9057 40.8333 34.9999 40.8333Z"
            fill="#00899D"
          />
        </svg>
      </button>
      <!-- dropdown -->
      <div
        v-if="showDropdown"
        class="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg"
      >
        <ul>
          <li>
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              @click="logout"
              >Logout</a
            >
          </li>
          <!-- Opsi dropdown lainnya jika diperlukan -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  name: 'NavBar',

  props: {
    menu: {
      type: String,
      required: true,
      default: '',
    },
    nama: {
      type: String,
      required: true,
      default: '',
    },
  },

  data() {
    return {
      admin: '',
      showDropdown: false,
    }
  },
  mounted() {
    this.admin = localStorage.getItem('email')
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    logout() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Kamu ingin Logout!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('email')
          localStorage.removeItem('token')
          window.location.replace('/')
        }
      })
    },
  },
}
</script>
