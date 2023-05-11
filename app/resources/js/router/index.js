import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/HomeView.vue'
// import authRoutes from '../views/page/auth/router/routes.js'
// import { useAuthStore } from '@/views/page/auth/stores/auth.js'

const router = createRouter({
	linkActiveClass: 'router-link-active',
	history: createWebHistory('/'),
	routes: [
		// Authentication, Logout
		// ...authRoutes,
		// Page
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/page/AboutView.vue'),
		},
		{
			path: '/panel',
			name: 'panel',
			component: () => import('../views/panel/DashboardView.vue'),
			meta: { requiresAuth: true },
		},
		// Catch all
		{
			path: '/:catchAll(.*)',
			name: 'error.page',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
})

// router.beforeEach(async (to, from, next) => {
// 	// ✅ This will work make sure the correct store is used for the current running app
// 	const auth = useAuthStore()
// 	// ✅ Login with remember me token and/or check is user authenticated
// 	await auth.isAuthenticated()
// 	// ✅ Redirect to panel if logged
// 	if (to.name == 'login' && auth.isLoggedIn.value) {
// 		next({ name: 'panel' })
// 	} else if (to.meta.requiresAuth && !auth.isLoggedIn.value) {
// 		// ✅ Redirect to login if not logged
// 		next({ name: 'login', query: { redirected_from: to.fullPath } })
// 	} else {
// 		// ✅ Continue
// 		next()
// 	}
// })

export default router
