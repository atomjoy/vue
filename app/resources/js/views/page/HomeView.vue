<script setup>
import TopMenu from '@/components/TopBar.vue'
import PageTitle from '@/components/PageTitle.vue';
</script>

<template>
	<PageTitle :title="'page.Home'" />
	<TopMenu />

	<h1>{{ $t('page.Home') }}</h1>
</template>

<style>
</style>
