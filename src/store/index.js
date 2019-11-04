import Vue from 'vue'
import Vuex from 'vuex'
import vuePersistence from 'vuex-persist';
import mutations from './mutation';
import action from './action'
Vue.use(Vuex)
const vuexLocal = new vuePersistence({
  storage: window.localStorage
});
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state: {
    sending: false,
    error: null,
    user: [],
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  getters: {
    hasError: state=> state.error? true: false
  },
  mutations,
  action,
  plugins: [vuexLocal.plugin],
  strict: debug,
  modules: {
  }
})
