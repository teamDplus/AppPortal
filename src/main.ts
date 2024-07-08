import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import './index.css' 

const app = createApp(App)
  .use(router)
  .use(createPinia());

let isAppInitialized = false;

onAuthStateChanged(auth, (user) => {
  if (!isAppInitialized) {
    app.mount('#app');
    isAppInitialized = true;
  }

  if (user) {
    console.log('ユーザーがログインしています:', user);
    // ユーザー情報をグローバルステートやコンポーネントのデータに保存するロジックを追加
  } else {
    console.log('ユーザーはログインしていません');
  }
});
