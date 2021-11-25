import { createApp } from 'vue'
import App from './App.vue'




let instance = null
function render() {
  instance = createApp(App).mount('#app')
}

if(!window.__MICRO_WEB__){
  render()
}

export async function bootstrap() {
  console.log('vue3.0 app bootstrap');
}

export async function mount() {
  render();
}

export async function unmount(ctx) {
  instance.unmount();
  instance = null;
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}