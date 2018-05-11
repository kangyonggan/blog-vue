import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Guest from '@/components/Guest'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {title: '首页'},
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      meta: {title: '关于我'},
      component: About
    },
    {
      path: '/guest',
      name: 'Guest',
      meta: {title: '留言'},
      component: Guest
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 更新title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 更新导航条

  next();
});

export default router;
