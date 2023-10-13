<template>
  <div class="bg-green-light lg:h-screen md:h-screen h-screen">
    <HeaderLandingPage />
    <div class="lg:h-full md:h-full w-full lg:px-72 p-5 pb-16 pt-[100px]">
      <div class="w-full h-full lg:flex md:flex justify-between items-center">
        <div class="flex flex-col justify-between w-full h-full">
          <nuxt-link to="/">
            <img
              width="107px"
              src="../assets/perpus-app-hijau.svg"
              alt="perpus-app-hijau"
            />
          </nuxt-link>
          <div v-if="loading" class="h-full w-full">
            <LoadingComponent />
          </div>
          <div v-else class="h-full flex flex-col justify-center items-center">
            <img
              class="w-72 lg:w-full md:w-full"
              src="../assets/image-masuk.svg"
              alt="image-masuk"
            />
            <h1
              class="font-bold lg:text-4xl md:text-4xl text-3xl font-inter text-green-dark text-center"
            >
              Masuk
            </h1>
          </div>
        </div>
        <div
          class="bg-white w-full h-full lg:rounded-r-xl md:rounded-r-xl rounded-lg lg:rounded-none md:rounded-none flex justify-center items-center lg:mt-0 md:mt-0 mt-5 py-5"
        >
          <form method="post" class="w-4/5" @submit.prevent="login">
            <h1
              class="text-green-dark font-bold font-inter lg:text-3xl md:text-3xl text-2xl"
            >
              Welcome back!
            </h1>
            <!--email-->
            <div class="mt-6">
              <label
                for="email"
                class="block font-inter text-sm font-medium leading-6 text-green-dark"
                >Email</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <input
                  id="email"
                  v-model="admin.email"
                  type="email"
                  name="email"
                  class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
              </div>
            </div>
            <!--akhir email -->
            <!-- Awal Password -->
            <div class="my-4">
              <label
                for="password"
                class="block font-inter text-sm font-medium leading-6 text-green-dark"
                >Password</label
              >
              <div class="relative mt-2 rounded-md shadow-sm">
                <input
                  id="password"
                  v-model="admin.password"
                  type="password"
                  name="password"
                  class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="bg-green-dark w-full text-base font-bold h-10 rounded-md text-white"
              >
                Masuk
              </button>
            </div>
            <div class="w-full mt-4">
              <p class="text-sm text-center text-green-dark font-inter">
                Belum punya akun? <a href="/daftar" class="font-bold">Daftar</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import HeaderLandingPage from '~/components/HeaderLandingPage.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'

export default {
  components: { HeaderLandingPage, LoadingComponent },

  data() {
    return {
      loading: false,
      admin: {
        email: '',
        password: '',
      },
      adminLogin: [],
    }
  },

  methods: {
    async login() {
      try {
        this.loading = true
        const response = await this.$axios.post(
          '/auth/v1/token?grant_type=password',
          {
            email: this.admin.email,
            password: this.admin.password,
          }
        )

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Kamu Berhasil Masuk',
          showConfirmButton: false,
          timer: 1500,
        })
        window.localStorage.setItem('token', response.data.access_token)
        window.localStorage.setItem('email', response.data.user.email)
        window.location.replace('/dashboard')
      } catch (e) {
        this.error = e.response.data.error
        if (this.error === 'invalid_grant') {
          this.error = 'Email atau Password salah'
        }

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.error,
        })
      } finally {
        // Save token and email to local storage

        this.loading = false
      }
    },
  },
}
</script>
