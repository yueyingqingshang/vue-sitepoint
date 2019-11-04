import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueChatScroll from 'vue-chat-scroll';
// 引入vue
// eslint-disable-next-line import/extensions
import './plugin/element.js';

// 引入公共样式
import './assets/css/common.css';

Vue.config.productionTip = false;
Vue.use(vueChatScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
