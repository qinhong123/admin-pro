import { irefreshUserInfo, userLogin } from '@/api/user';
import { defineStore } from 'pinia';
import pinia from '@/store';
import { UserState } from './types';

// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStoreHook = defineStore('userInfo', {
	// 其他配置...
	state: ():UserState => ({
		username: '小洪',
		accessToken: '',
		refreshToken: '',
		roles:['common']
	}),
	getters: {},
	actions: {
		storeUserLogin(data) {
			return userLogin(data).then((res) => {
				this.username = res.username;
				this.accessToken = res.accessToken;
				this.roles = res.roles;
				return res;
			});
		},
		storeRefreshUserInfo(data) {
			return irefreshUserInfo(data).then((res) => {
				this.username = res.username;
				return res;
			});
		},
	},

	// 持久化保存 accessToken
	persist: {
		key: 'userInfo',
		storage: sessionStorage,
		paths: ['accessToken'],
	},
});

// 导出该store
export function useUserStore() {
	return useUserStoreHook(pinia);
}
