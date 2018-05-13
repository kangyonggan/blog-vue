import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import About from '@/pages/About'
import Guest from '@/pages/Guest'
import Novel from '@/pages/Novel'
import Photo from '@/pages/Photo'
import Tool from '@/pages/Tool'
import ArticleDetail from '@/pages/article/Detail'
import NotFound from '@/pages/NotFound'

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
    },
    {
      path: '/tool',
      name: 'Tool',
      meta: {title: '工具'},
      component: Tool
    },
    {
      path: '/photo',
      name: 'Photo',
      meta: {title: '相册'},
      component: Photo
    },
    {
      path: '/novel',
      name: 'Novel',
      meta: {title: '小说'},
      component: Novel
    },
    {
      path: '/article/*',
      name: 'ArticleDetail',
      meta: {title: '文章'},
      component: ArticleDetail
    },
    {
      path: '*',
      name: 'NotFound',
      meta: {title: '404'},
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 更新title
  if (to.meta.title) {
    document.title = to.meta.title + " · 康永敢"
  }
  next();
});

export default router;
