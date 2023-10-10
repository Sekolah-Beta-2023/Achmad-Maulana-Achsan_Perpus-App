<template>
  <div
    class="bg-white shadow-md rounded-2xl w-60 h-96 flex flex-col items-center p-3"
  >
    <button class="w-52 h-72 mb-1" @click="$router.push('/detail/' + bookId)">
      <img
        class="rounded-xl object-cover w-full h-72"
        :src="image"
        :alt="image"
      />
    </button>
    <div class="w-full h-full flex justify-center items-center">
      <h1 class="text-base font-inter text-green-dark text-center">
        {{ judul }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardBook',
  props: {
    image: {
      type: String,
      default:
        'https://th.bing.com/th/id/OIP.Kj03Qz6N55oaupU7v4TenwHaJ_?pid=ImgDet&rs=1',
    },
    judul: {
      type: String,
      default: 'Judul',
    },
    bookId: {
      type: [String, Number],
      required: true,
    },
    // book: {
    //   type: Object,
    //   default: () => {
    //     return {
    //       image:
    //         'https://th.bing.com/th/id/OIP.Kj03Qz6N55oaupU7v4TenwHaJ_?pid=ImgDet&rs=1',
    //     }
    //   },
    // },
  },
}
</script>
