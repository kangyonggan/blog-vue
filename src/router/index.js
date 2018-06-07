import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/pages/NotFound'
import Index from '@/pages/default/Index'
import About from '@/pages/default/About'
import Novel from '@/pages/default/Novel'
import Tool from '@/pages/default/Tool'

import ArticleDetail from '@/pages/article/Detail'
import ToolDetail from '@/pages/tool/Detail'
import NovelSections from '@/pages/novel/Sections'
import Section from '@/pages/novel/Section'

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
      path: '/tool',
      name: 'Tool',
      meta: {title: '工具'},
      component: Tool
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
      component: ArticleDetail
    },
    {
      path: '/tool/*',
      name: 'ToolDetail',
      component: ToolDetail
    },
    {
      path: '/novel/*',
      name: 'NovelSections',
      component: NovelSections
    },
    {
      path: '/section/*',
      name: 'Section',
      component: Section
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
    document.title = to.meta.title
  }
  next();
});

export default router;
