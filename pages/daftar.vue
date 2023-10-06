<template>
  <div class="bg-green-light h-screen">
    <HeaderLandingPage />
    <div class="h-full w-full px-72 pb-16 pt-[100px]">
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
          <form method="post" class="w-4/5" @submit.prevent="daftar">
            <h1 class="text-green-dark font-bold font-inter text-3xl">
              Welcome!
            </h1>
            <!-- username -->
            <InputComponent
              id="username"
              label="Username"
              placeholder="Username"
              type="text"
            />
            <!--email-->
            <InputComponent
              id="email"
              label="Email"
              placeholder="Email"
              type="email"
            />
            <!--akhir email -->
            <!-- Awal Password -->
            <InputComponent
              id="password"
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
import HeaderLandingPage from '~/components/HeaderLandingPage.vue'
import InputComponent from '~/components/InputComponent.vue'

export default {
  components: { HeaderLandingPage, InputComponent },
  methods: {
    daftar() {
      this.$router.push('/masuk')
    },
  },
}
</script>
