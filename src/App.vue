<script setup lang="ts">
import logo from './assets/logo.svg'
import type { ColumnProps } from './components/types'
import ColumnList from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '待办事项',
    description:
      '待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表待办办事项表',
    avatar: logo
  },
  {
    id: 2,
    title: '工作进度',
    description: '工作进度列表',
    avatar: logo
  },
  {
    id: 3,
    title: '待办事项',
    description: '待办事项列表',
    avatar: logo
  },
  {
    id: 4,
    title: '待办事项',
    description: '待办事项列表',
    avatar: logo
  }
]
</script>

<template>
  <div class="container mx-auto">
    <column-list :list="testData"></column-list>
  </div>
</template>
