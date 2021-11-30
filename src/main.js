import { createApp } from 'vue'
import App from './App.vue'
import router from './router';




let instance = null
function render () {
  instance = createApp(App)
  instance
    .use(router)
    .mount('#app')
}

if (!window.__MICRO_WEB__) {
  render()
}

export async function bootstrap () {
  console.log('vue3.0 app bootstrap');
}

export async function mount () {
  console.log('vue3 is render')
  render();
}

export async function unmount (ctx) {
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}