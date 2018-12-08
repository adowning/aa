import Vue from 'vue'
import { Ionic, IonicVueRouter, IonicAPI } from '@modus/ionic-vue'
import Home from './views/Home'
import Page from './components/HelloWorld'
import App from './App.vue'

Ionic.init();
Vue.use(IonicVueRouter)
Vue.use(IonicAPI)

// new Vue({
//   router: new IonicVueRouter({
//     routes: [{ path: '/', component: Home }, { path: '/page', component: Page }],
//   }),
// }).$mount('ion-app')
new Vue({
  router: new IonicVueRouter({
    routes: [{ path: '/', component: Home }, { path: '/page', component: Page }],
  }),
  render: h => h(App)
}).$mount('ion-app')



// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
