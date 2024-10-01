<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="column in list"
      :key="column.id"
      class="min-h-96 rounded-md border border-gray-300 shadow-sm"
    >
      <div class="flex h-full flex-col flex-wrap content-evenly justify-evenly py-6 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="my-3 w-24 rounded-full border border-slate-200"
        />
        <h5>{{ column.title }}</h5>
        <p class="flex-auto text-sm text-gray-500">{{ column.description }}</p>
        <a href="#" class="w-24 rounded border border-indigo-600 px-2 py-1 text-blue-600"
          >进入专栏</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ColumnProps } from './types'

defineOptions({
  name: 'ColumnList'
})
defineProps<{ list: ColumnProps[] }>()
</script>
