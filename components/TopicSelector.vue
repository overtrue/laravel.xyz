<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="text-gray-700 space-x-2">
      <span class="text-xl font-semibold dark:text-gray-400">标签</span><span class="text-gray-500">{{ topics.length }}</span>
    </RadioGroupLabel>
    <div class="space-y-2 max-h-[65vh] overflow-y-auto mt-4 text-gray-600 dark:text-gray-400">
      <RadioGroupOption as="template" v-for="topic in topics" :key="topic.name" :value="topic.name" v-slot="{ checked }">
        <div
          :class="checked ? 'border-indigo-900 bg-indigo-900' : ' text-gray-500'"
          class="border dark:border-gray-700 hover:border-transparent hover:bg-indigo-900 hover:text-gray-500 relative flex cursor-pointer rounded px-2 py-1 focus:outline-none"
        >
          <div class="flex flex-1 items-center justify-between text-sm">
            <RadioGroupLabel as="span" :class="checked ? '' : 'text-gray-900 dark:text-gray-400'" class="truncated font-medium">
              {{ topic.name }}
            </RadioGroupLabel>
            <RadioGroupDescription as="span" :class="checked ? 'text-sky-100' : 'text-gray-400'" class="inline">
              <span> {{ topic.packages_count }}</span>
            </RadioGroupDescription>
          </div>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { RadioGroup, RadioGroupLabel, RadioGroupDescription, RadioGroupOption } from '@headlessui/vue'

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  },
  props: {
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      selected: '',
      topics: [],
    }
  },
  methods: {
    async fetchTopics() {
      const { body } = await queryContent('/compiled/topics').findOne()
      this.topics = body
    },
  },
  created() {
    this.fetchTopics()
  },
  watch: {
    modelValue(value) {
      if (this.selected !== value) {
        this.selected = value
      }
    },
    selected(value) {
      this.$emit('update:modelValue', value)
    },
  },
}
</script>
