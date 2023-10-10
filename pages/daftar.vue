<template>
  <div class="bg-green-light h-screen">
    <HeaderLandingPage />
    <div v-if="loading" class="h-full w-full">
      <LoadingComponent />
    </div>
    <div v-else class="h-full w-full px-72 pb-16 pt-[100px]">
      <div class="w-full h-full t flex justify-between items-center gap-5">
        <div class="flex flex-col justify-between w-full h-full">
          <img
            width="107px"
            src="../assets/perpus-app-hijau.svg"
            alt="perpus-app-hijau"
          />
          <div class="h-full flex flex-col justify-center items-center">
            <img
              width="600"
              src="../assets/image-daftar-1.svg"
              alt="image-masuk"
            />
            <h1 class="font-bold text-4xl text-green-dark text-center">
              Daftar
            </h1>
          </div>
        </div>
        <div
          class="bg-white w-full h-full rounded-r-xl flex justify-center items-center"
        >
          <form class="w-4/5" @submit.prevent="daftarAkun">
            <h1 class="text-green-dark font-bold font-inter text-3xl">
              Welcome!
            </h1>
            <!--email-->
            <InputComponent
              id="email"
              v-model="admin.email"
              label="Email"
              placeholder="Email"
              type="email"
            />
            <!--akhir email -->
            <!-- Awal Password -->
            <InputComponent
              id="password"
              v-model="admin.password"
              label="Password"
              placeholder="Password"
              type="password"
            />
            <div class="mt-6">
              <button
                type="submit"
                class="bg-green-dark w-full text-base font-bold h-10 rounded-md text-white"
              >
                Daftar
              </button>
            </div>
            <div class="w-full mt-4">
              <p class="text-sm text-center text-green-dark font-inter">
                Sudah punya akun? <a href="/masuk" class="font-bold">Masuk</a>
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
import InputComponent from '~/components/InputComponent.vue'
import LoadingComponent from '~/components/LoadingComponent.vue'

export default {
  components: { HeaderLandingPage, InputComponent, LoadingComponent },

  data() {
    return {
      loading: false,
      admin: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // daftar Admin

    async daftarAkun() {
      if (this.admin.password.length < 6) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Kata sandi harus memiliki setidaknya 6 karakter',
        })
      }

      try {
        this.loading = true
        await this.$axios.post('auth/v1/signup', {
          email: this.admin.email,
          password: this.admin.password,
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Berhasil Membuat Akun',
          showConfirmButton: false,
          timer: 1500,
        })
      } catch (e) {
        this.error = e.response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.error,
        })
      } finally {
        this.loading = false
        this.$router.push('/masuk')
      }
    },
  },
}
</script>
