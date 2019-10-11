import store from '@/store/index';
import adminRoutes from './admin';
import userRoutes from './user';
import ControlPanel from '@/views/ControlPanel/ControlPanel.vue';

export default [
	{
		path: '/user',
		name: 'user',
		redirect: () => {
			const user = store.getters.GET_USER;
			if (user) {
				switch (user.is_admin) {
					case true:
						return { name: 'user_admin-subscriptions' };
					case false:
						return { name: 'user_subscriptions' };
				}
			} else {
				return { name: 'login' };
			}
		},
		component: ControlPanel,
		children: [...userRoutes, ...adminRoutes],
		meta: {
			requaresAuth: true,
		}
	},
];
