<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="bg-white md:p-5 p-2 shadow-lg rounded-lg">
    <div class="flex md:gap-7 w-full">
      <CardBook :image="buku.image" :judul="buku.judul" :bookId="buku.id" />
      <div
        class="text-green-dark text-base w-full font-inter flex flex-col justify-between"
      >
        <div class="">
          <tr>
            <td class="font-bold">Judul</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">{{ buku.judul }}</td>
          </tr>
          <tr>
            <td class="font-bold">Penulis</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">{{ buku.penulis }}</td>
          </tr>
          <tr>
            <td class="font-bold">Penerbit</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">{{ buku.penerbit }}</td>
          </tr>
          <tr>
            <td class="font-bold">Kota</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">{{ buku.kota }}</td>
          </tr>
          <tr>
            <td class="font-bold">Tahun</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">{{ buku.tahun }}</td>
          </tr>
          <tr>
            <td class="font-bold">ISBN</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">{{ buku.isbn }}</td>
          </tr>
          <tr>
            <td class="font-bold">Deskripsi</td>
            <td class="font-bold block mr-3">:</td>
            <td class="ml-2">
              {{ buku.deskripsi }}
            </td>
          </tr>
        </div>
        <div class="flex w-full justify-end md:my-4 my-2 md:gap-5 gap-2">
          <button
            class="bg-red-500 lg:w-48 md:w-32 md:text-base text-sm md:font-bold w-24 h-12 shadow-lg rounded-md text-white"
            @click="deleteBook"
          >
            Hapus
          </button>
          <button
            class="bg-green-dark lg:w-48 md:w-32 md:text-base md:font-bold w-24 text-sm h-12 shadow-lg rounded-md text-white"
            @click="click"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardBook from './CardBook.vue'

export default {
  name: 'CardDetail',
  components: { CardBook },
  props: {
    buku: {
      type: Object,
      default: () => {},
    },
    click: {
      type: Function,
      required: true,
    },
    deleteBook: {
      type: Function,
      required: true,
    },
  },
}
</script>
