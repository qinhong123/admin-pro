import { RouteRecordRaw } from 'vue-router';

export default {
	path: '/login',
	name: 'Login',
	component: () => import('@/views/login/index.vue'),
	meta: {
		role: ['admin', 'common'],
	},
} as RouteRecordRaw;
