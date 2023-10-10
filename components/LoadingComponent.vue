<template>
  <div class="flex justify-center items-center h-96">
    <div
      class="animate-spin rounded-full border-t-4 border-green-dark h-16 w-16"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'LoadingComponent',
}
</script>
<style scoped>
/* Animasi Putar */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* animasi spin */
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
