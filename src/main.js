import Vue from 'vue'
import App from './App'
//uView
import uView from 'uview-ui';
Vue.use(uView);

import utils from './utils';

Vue.config.productionTip = false

Vue.prototype.$http = utils.http;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
