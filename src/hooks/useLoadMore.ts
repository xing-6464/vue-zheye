import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'

interface LoadParams {
  currentPage: number;
  pageSize: number;
}
const useLoadMore = (actionsName: string, total: ComputedRef<number>,
  params: LoadParams = { currentPage: 2, pageSize: 5 }) => {
  const store = useStore()
  const currentPage = ref(params.currentPage)
  const requestParams = computed(() => ({
    currentPage: currentPage.value,
    pageSize: params.pageSize
  }))
  const loadMorePage = () => {
    store.dispatch(actionsName, requestParams.value).then(() => {
      currentPage.value++
    })
  }
  const isLastPage = computed(() => {
    return Math.ceil(total.value / params.pageSize) < currentPage.value
  })

  return {
    loadMorePage,
    isLastPage,
    currentPage
  }
}

export default useLoadMore
