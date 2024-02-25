import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 配置路由
// const routes:Array<RouteRecordRaw> =[
//   {
//     path: '/',
//     name:"home",
//     component:()=>import('../views/home/index.vue'),
//     meta:{title:'首页'},
//     children:[]
//   }
// ];
const aboutRoute: RouteRecordRaw = {
	path: '/about',
	name: 'about',
	component: () => import('../views/about/index.vue'),
};

// import.meta.glob 为 vite 提供的特殊导入方式
// 它可以将模块中全部内容导入并返回一个Record对象
// 默认为懒加载模式 加入配置项 eager 取消懒加载
const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
	eager: true,
});
console.log(modules);
const routes: Array<RouteRecordRaw> = [];
Object.keys(modules).forEach((key) => {
	const module = modules[key].default;
	routes.push(module);
});
// 自定义的路由
routes.push(aboutRoute);
const router = createRouter({
	history: createWebHistory(),
	routes,
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});
router.afterEach((to, from) => {
	NProgress.done();
});

export default router;
