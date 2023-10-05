<template>
  <div class="w-full">
    <!-- Awal Navbar Landing Page  -->
    <HeaderLandingPage />
    <!-- Akhir Navbar Landing Page -->
    <!-- Awal Halaman Platform -->
    <section class="h-[840px] bg-white flex justify-center items-center">
      <div class="flex justify-between">
        <div class="w-[635px]">
          <h1
            class="font-inter text-[64px] text-green-dark font-bold capitalize leading-normal"
          >
            Platform Pustaka Digital & Komunitas Pintar!
          </h1>
          <p class="text-black-light text-lg my-5 w-4/5">
            Perpus App adalah solusi terbaik untuk pengelolaan perpustakaan
            digital Anda. Dengan antarmuka yang intuitif dan fitur-fitur
            canggih, kami menyediakan pengalaman terbaik untuk para admin
            perpustakaan. Mengapa memilih Perpus App?
          </p>
          <div class="flex w-full items-center justify-start">
            <button class="mr-5 w-60 h-12 bg-green-dark text-white">
              Daftar 🚀
            </button>
            <div class="w-60">
              <p class="text-base text-black-light">
                Disini anda bisa mendaftar Sebagai Admin
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-center h-auto">
          <img src="../assets/image-platform.svg" alt="image-platform" />
        </div>
      </div>
    </section>
    <!-- Akhir Halaman Platform -->
    <!-- Awal Kenapa Perpus App -->
    <section class="flex justify-center items-center h-[550px] w-full p-40">
      <div class="flex justify-between w-full">
        <div class="w-full bg-white h-auto">
          <div class="flex justify-start items-center mb-4">
            <div>
              <div
                class="rounded-full h-10 w-10 bg-green-light flex justify-center items-center"
              >
                <img src="../assets/icon-satu.svg" alt="" />
              </div>
            </div>
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
        <div class="w-full flex flex-col items-end">
          <h1
            class="font-inter text-[52px] text-green-dark font-bold capitalize text-left"
          >
            Kenapa Perpus App?
          </h1>
          <p class="text-base text-black-light text-right">
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
    <section class="p-40 h-[930px]">
      <div class="bg-green-light w-full h-full flex justify-end items-center">
        <div class="w-[560px] mr-6 h-[420px] flex flex-col justify-between">
          <div>
            <h2 class="text-green-dark text-4xl font-bold font-inter">
              Testimoni
            </h2>
            <p class="font-inter text-green-dark text-4xl leading-tight mt-4">
              "Sebagai admin, Perpus App mempermudah pengelolaan koleksi,
              peminjaman, dan interaksi pengguna. Solusi terbaik!"
            </p>
          </div>
          <p class="text-base text-green-dark">
            Aisha, Admin Perpustakaan, Sekolah Menengah XYZ
          </p>
        </div>
        <div>
          <img src="../assets/image-testimoni.png" alt="image-testimoni" />
        </div>
      </div>
    </section>
    <!-- Akhir Testimoni -->
    <!-- Awal Hubungi Kami -->
    <section class="p-40 bg-green-light h-[660px]">
      <div
        class="w-full h-full flex flex-col items-center py-8 justify-between"
      >
        <h1
          class="text-green-dark font-inter text-center text-[52px] font-bold"
        >
          Bergabunglah dengan Kami!
        </h1>
        <p class="text-base text-black-light text-center w-[750px]">
          Saatnya meningkatkan pengelolaan perpustakaan Anda ke level
          berikutnya. Bergabunglah dengan Perpus App dan temukan kemudahan
          pengelolaan koleksi, interaksi yang lebih baik dengan pengguna, dan
          pertumbuhan komunitas yang berarti.
        </p>
        <button class="mr-5 w-60 h-12 bg-green-dark font-inter text-white">
          Daftar 🚀
        </button>
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
