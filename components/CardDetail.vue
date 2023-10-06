<template>
  <div class="bg-white p-5 shadow-lg rounded-lg">
    <div class="flex gap-7">
      <CardBook :image="buku.urlImage" />
      <div
        class="text-green-dark text-base font-inter flex flex-col justify-between"
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
        <div class="flex w-full justify-end my-4 gap-5">
          <button
            class="bg-red-500 w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
          >
            Hapus
          </button>
          <button
            type="submit"
            class="bg-green-dark w-48 text-base font-bold h-12 shadow-lg rounded-md text-white"
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
  },
}
</script>
