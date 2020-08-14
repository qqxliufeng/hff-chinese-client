import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style/main.css'
import './assets/style/reset.css'
import 'vant/lib/index.css'

import Navi from '@/views/components/navi'

import { Image as VanImage } from 'vant'
import { Col, Row } from 'vant'
import { Tab, Tabs } from 'vant'
import { Grid, GridItem } from 'vant'
import { Calendar } from 'vant'

import { Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup);

Vue.use(Calendar)

Vue.use(Grid)
Vue.use(GridItem)

Vue.use(Tab)
Vue.use(Tabs)

Vue.use(VanImage)
Vue.use(Col)
Vue.use(Row)
Vue.component('navi', Navi)

Vue.config.productionTip = false

document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'

window.onresize = () => {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
