//入口文件
import Vue from 'vue';
import App from './App';
import router from "@/router";
import store from "@/store";
import "@/api";

import showMessage from '@/utils/showMessage';
Vue.prototype.$showMessage = showMessage;

import vloading from '@/directives/loading';
Vue.directive('loading', vloading);

import vlazy from "@/directives/lazy";
Vue.directive('lazy', vlazy);

//事件总线
import "./eventBus";

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
