import HeaderLandingPage from '~/components/HeaderLandingPage.vue';
<template>
  <div class="bg-green-light h-screen">
    <HeaderLandingPage />
    <div class="h-full w-full px-72 pb-16 pt-[100px]">
      <div class="w-full h-full t flex justify-between items-center">
        <div class="flex flex-col justify-between w-full h-full">
          <img
            width="107px"
            src="../assets/perpus-app-hijau.svg"
            alt="perpus-app-hijau"
          />
          <div class="h-full flex flex-col justify-center items-center">
            <img src="../assets/image-masuk.svg" alt="image-masuk" />
            <h1 class="font-bold text-4xl text-green-dark text-center">
              Masuk
            </h1>
          </div>
        </div>
        <div
          class="bg-white w-full h-full rounded-r-xl flex justify-center items-center"
        >
          <form method="post" class="w-4/5" @submit.prevent="login">
            <h1 class="text-green-dark font-bold font-inter text-3xl">
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
            <!-- Akhir Password -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLandingPage from '~/components/HeaderLandingPage.vue'

export default {
  components: { HeaderLandingPage },
  methods: {
    login() {
      this.$router.push('/dashboard')
    },
  },
}
</script>
