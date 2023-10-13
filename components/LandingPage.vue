<template>
  <div class="w-full">
    <!-- Awal Navbar Landing Page  -->
    <HeaderLandingPage />
    <!-- Akhir Navbar Landing Page -->
    <!-- Awal Halaman Platform -->
    <section
      class="lg:h-[840px] lg:mt-0 md:mt-24 mt-24 px-5 bg-white flex justify-center items-center"
    >
      <div class="lg:flex md:flex justify-between">
        <div class="lg:w-[635px] md:w-[600px] lg:px-0 md:px-20">
          <h1
            class="font-inter lg:text-[64px] md:text-6xl text-4xl text-green-dark font-bold capitalize leading-normal"
          >
            Platform Pustaka Digital & Komunitas Pintar!
          </h1>
          <p class="text-black-light md:text-lg text-base my-5 lg:w-4/5">
            Perpus App adalah solusi terbaik untuk pengelolaan perpustakaan
            digital Anda. Dengan antarmuka yang intuitif dan fitur-fitur
            canggih, kami menyediakan pengalaman terbaik untuk para admin
            perpustakaan. Mengapa memilih Perpus App?
          </p>
          <div
            class="lg:flex w-full flex items-center lg:justify-start md:justify-start justify-center"
          >
            <nuxt-link to="/daftar" class="mr-2">
              <button
                class="lg:mr-5 lg:w-60 md:w-60 w-44 h-12 bg-green-dark text-white"
              >
                Daftar 🚀
              </button>
            </nuxt-link>
            <div class="lg:w-60 md:w-60 w-full">
              <p class="text-base text-black-light lg:mt-0 md:mt-2 mt-1">
                Disini anda bisa mendaftar Sebagai Admin
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex lg:justify-end md:justify-center justify-center lg:mt-0 mt-3 items-center h-auto"
        >
          <img src="../assets/image-platform.svg" alt="image-platform" />
        </div>
      </div>
    </section>
    <!-- Akhir Halaman Platform -->
    <!-- Awal Kenapa Perpus App -->
    <section
      class="flex justify-center items-center lg:h-[550px] w-full lg:p-40 md:p-20 p-5"
    >
      <div
        class="flex lg:flex-row md:flex-row flex-col-reverse justify-between w-full"
      >
        <div class="lg:w-full md:w-3/5 h-auto lg:mt-0 md:mt-0 mt-5">
          <div class="flex justify-start items-center mb-4">
            <!-- cyrcle -->
            <div>
              <div
                class="rounded-full h-10 w-10 bg-green-light flex justify-center items-center"
              >
                <img src="../assets/icon-satu.svg" alt="" />
              </div>
            </div>
            <!-- cyrcle -->
            <div class="mx-4 w-80">
              <p class="text-green-dark text-xl font-bold">First Benefit</p>
              <p class="text-base text-black-light">
                Tambahkan, hapus, atau edit buku dengan cepat.
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center mb-4">
            <div>
              <div
                class="rounded-full h-10 w-10 bg-green-light flex justify-center items-center"
              >
                <img src="../assets/icon-dua.svg" alt="" />
              </div>
            </div>
            <div class="mx-4 w-80">
              <p class="text-green-dark text-xl font-bold">Second Benefit</p>
              <p class="text-base text-black-light">
                Fitur pencarian untuk memudahkan pencarian koleksi.
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center mb-4">
            <div>
              <div
                class="rounded-full h-10 w-10 bg-green-light flex justify-center items-center"
              >
                <img src="../assets/icon-tiga.svg" alt="" />
              </div>
            </div>
            <div class="mx-4 w-80">
              <p class="text-green-dark text-xl font-bold">Third Benefit</p>
              <p class="text-base text-black-light">
                Akses terbatas dan kontrol pengguna untuk melindungi informasi
                sensitif.
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-full flex flex-col lg:items-end md:items-end items-center"
        >
          <h1
            class="font-inter lg:text-[52px] text-4xl text-green-dark font-bold capitalize lg:text-left md:text-left text-center"
          >
            Kenapa Perpus App?
          </h1>
          <p
            class="text-base text-black-light lg:text-right md:text-right text-center mt-4"
          >
            Dengan manfaat-manfaat ini, Perpus App bukan hanya sebuah aplikasi
            pengelolaan perpustakaan, tetapi juga mitra strategis yang membantu
            perpustakaan berkembang dan memberikan pelayanan terbaik kepada
            penggunanya
          </p>
        </div>
      </div>
    </section>
    <!-- Akhir Kenapa Perpus App -->
    <!-- Awal Testimoni -->
    <section class="lg:p-40 md:p-20 p-5 lg:h-[930px]">
      <div
        class="bg-green-light w-full h-full lg:flex md:flex md:justify-end justify-center items-center p-5 pr-0"
      >
        <div
          class="lg:w-[560px] mr-6 lg:h-[420px] flex flex-col justify-between"
        >
          <div class="w-full">
            <h2
              class="text-green-dark lg:text-4xl md:text-4xl text-2xl font-bold font-inter"
            >
              Testimoni
            </h2>
            <p
              class="font-inter text-green-dark lg:text-4xl md:text-4xl text-xl leading-tight lg:mt-4 md:mt-4 mt-2"
            >
              "Sebagai admin, Perpus App mempermudah pengelolaan koleksi,
              peminjaman, dan interaksi pengguna. Solusi terbaik!"
            </p>
          </div>
          <p class="md:text-base text-sm lg:my-0 md:my-0 my-2 text-green-dark">
            Aisha, Admin Perpustakaan, Sekolah Menengah XYZ
          </p>
        </div>
        <div class="lg:w-full md:w-full">
          <img src="../assets/image-testimoni.png" alt="image-testimoni" />
        </div>
      </div>
    </section>
    <!-- Akhir Testimoni -->
    <!-- Awal Hubungi Kami -->
    <section class="lg:p-40 md:p-20 p-5 bg-green-light lg:h-[660px]">
      <div
        class="w-full h-full flex flex-col items-center py-8 justify-between"
      >
        <h1
          class="text-green-dark font-inter text-center md:text-[52px] text-4xl font-bold"
        >
          Bergabunglah dengan Kami!
        </h1>
        <p class="text-base text-black-light text-center mt-4 lg:w-[750px]">
          Saatnya meningkatkan pengelolaan perpustakaan Anda ke level
          berikutnya. Bergabunglah dengan Perpus App dan temukan kemudahan
          pengelolaan koleksi, interaksi yang lebih baik dengan pengguna, dan
          pertumbuhan komunitas yang berarti.
        </p>
        <nuxt-link to="/daftar" class="mt-4">
          <button
            class="mr-5 lg:w-60 md:w-60 w-44 h-12 bg-green-dark font-inter text-white"
          >
            Daftar 🚀
          </button>
        </nuxt-link>
      </div>
    </section>
    <!-- Akir Hubungi Kami -->
    <!-- Footer -->
    <FooterLandingPage />
    <!-- Footer -->
  </div>
</template>
<script>
import FooterLandingPage from './FooterLandingPage.vue'
import HeaderLandingPage from './HeaderLandingPage.vue'

export default {
  name: 'LandingPage',
  components: { HeaderLandingPage, FooterLandingPage },
}
</script>
