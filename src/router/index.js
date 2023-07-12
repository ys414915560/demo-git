import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/'
  },
{
  path:'/',
  name:'Module',
  component:()=>import('../views/module.vue'),
  meta:{},
  children:[
    {
      path:'/Module-A',
      name:'Module-A',
      component:()=>import('../views/module-A.vue'),
    }
  ]
},
{
  path:'/ModuleA',
  name:'ModuleA',
  component:()=>import('../views/moduleA.vue'),
  meta:{}
},
{
  path:'/ModuleB',
  name:'ModuleB',
  component:()=>import('../views/moduleB.vue'),
  meta:{}
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  console.log('to', to);
  console.log('from', from);
  next();
})
export default router
