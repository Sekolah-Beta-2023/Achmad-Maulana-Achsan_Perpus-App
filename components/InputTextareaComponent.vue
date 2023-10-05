<template>
  <div class="mt-2">
    <label
      :for="id"
      class="block font-inter text-sm font-medium leading-6 text-green-dark"
      >{{ label }}</label
    >
    <div class="mt-2 rounded-md shadow-sm">
      <textarea
        :id="id"
        :name="name"
        :cols="cols"
        :rows="rows"
        class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
        :placeholder="placeholder"
      ></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputTextareaComponent',
  props: {
    label: {
      type: String,
      default: 'label',
    },
    id: {
      type: String,
      default: 'id',
    },
    name: {
      type: String,
      default: 'name',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    cols: {
      type: Number,
      default: 30,
    },
    rows: {
      type: Number,
      default: 4,
    },
  },
}
</script>
