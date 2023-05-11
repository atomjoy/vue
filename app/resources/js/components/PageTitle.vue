<!--
// Require in main.js createI18n(options)
allowComposition: true,
globalInjection: true,
legacy: false,
-->

<template></template>
<script setup>
import { watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })

const props = defineProps({
	title: {
		type: String,
		default: 'error404.title', // Translation key from lang_en.json
	},
})

const title = props.title

onMounted(() => {
	document.title = t(title)
})

watch(
	() => locale.value,
	(lang) => {
		document.title = t(title)
	}
)
</script>
