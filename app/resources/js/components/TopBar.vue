<script setup>
import { RouterLink } from 'vue-router'
import ChangeLocale from '@/components/ChangeLocale.vue'
</script>

<template>
	<nav>
		<RouterLink to="/" class="menu-link">{{ $t('page.Home') }}</RouterLink>
		<RouterLink to="/about" class="menu-link">{{ $t('page.About') }}</RouterLink>
		<RouterLink to="/error404" class="menu-link">404</RouterLink>
		<ChangeLocale />
	</nav>
</template>
