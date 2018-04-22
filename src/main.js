// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//  引入UI函式庫
import ElementUI from 'element-ui'

//  引入英文字型
import locale from 'element-ui/lib/locale/lang/en'

//  css主題，一定要引入不然排版很奇怪
import 'element-ui/lib/theme-chalk/index.css'

//  加入主題相關 CSS 設定
//  這邊要先執行
//  npm i normalize.css -D
//  npm i vue-awesome -D
//  import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

//  不知作用
Vue.config.productionTip = false

//  宣告使用配合引入英文字型
Vue.use(ElementUI, { locale })
Vue.component('icon', Icon)

//  宣告使用，無引入英文字型
// Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
