import { createApp } from 'vue'

import axios from 'axios'
import store from './store'
import router from './router'

import App from './App.vue'
import 'easymde/dist/easymde.min.css'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'

axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  store.commit('setError', { status: false, message: '' })
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: 'E41E15DBC14A6D18' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', 'E41E15DBC14A6D18')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: 'E41E15DBC14A6D18' }
  }
  return config
})
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
}, e => {
  const { error } = e.response.data
  store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  return Promise.reject(error)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
