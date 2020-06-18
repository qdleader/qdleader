在 router.js 中需要在每一个路由下面多添加一个 meta:{title:'主页'}，比如：




`			 {
	            path: '',
                name: 'Main',
                meta:{title: '首页'},
	            component: home
	        },
	        {
	            path: '/home',
                name: 'home',
                meta:{
                    title:'首页'
                },
	            component: home
	        },
			{
				path: '/activity',
                name: 'activity',
                meta:{
                    title:'分类'
                },
				component: activity,
			},
			{
				path: '/my',
                name: 'my',
                meta:{
                    title:'我的'
                },
				component: my,
			}`



##在main.js
`
import router from './router'

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})`
