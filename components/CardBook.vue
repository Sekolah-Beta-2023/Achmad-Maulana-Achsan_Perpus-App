<template>
  <div
    class="bg-white shadow-md rounded-2xl w-60 h-96 flex flex-col items-center p-3"
  >
    <div class="w-52 h-72 mb-1">
      <img class="rounded-xl object-cover w-full h-72" :src="image" alt="" />
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <h1 class="text-base font-inter text-green-dark text-center">
        Etika Rambu-rambu kehidupan
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
      default: 'https://placehold.co/600x400.png',
    },
  },
}
</script>
