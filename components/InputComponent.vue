<template>
  <div class="mt-2">
    <label
      :for="id"
      class="block font-inter text-sm font-medium leading-6 text-green-dark"
      >{{ label }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :name="name"
        class="block font-inter w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-green-dark ring-1 ring-inset ring-green-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-dark sm:text-sm sm:leading-6"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputComponent',

  props: {
    label: {
      type: String,
      default: 'Label',
    },
    id: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: 'name',
    },
    modelValue: {
      type: [String, Number, Boolean, Function],
      default: '',
    },
  },

  methods: {},
}
</script>
