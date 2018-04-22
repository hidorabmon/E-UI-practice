import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicContainer from '@/components/BasicContainer'
import BasicLayout from '@/components/BasicLayout'
import FormCheckbox from '@/components/FormCheckbox'
import FormRadio from '@/components/FormRadio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BasicContainer',
      name: 'BasicContainer',
      component: BasicContainer
    },
    {
      path: '/BasicLayout',
      name: 'BasicLayout',
      component: BasicLayout
    },
    {
      path: '/FormCheckbox',
      name: 'FormCheckbox',
      component: FormCheckbox
    },
    {
      path: '/FormRadio',
      name: 'FormRadio',
      component: FormRadio
    }
  ]
})
