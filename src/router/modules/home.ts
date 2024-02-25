import { RouteRecordRaw } from 'vue-router';

export default {
	path: '/',
	name: 'Home',
	component: () => import('@/views/home/index.vue'),
	meta: {
		role: ['admin', 'common'],
	},
} as RouteRecordRaw;
