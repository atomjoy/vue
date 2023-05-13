<script setup>
import TopMenu from '@/components/TopBar.vue'
import PageTitle from '@/components/PageTitle.vue';
import Input from '@/components/input/Input.vue'
import Button from '@/components/input/Button.vue'
import SelectPrefix from '@/components/input/SelectPrefix.vue'
import { ref } from 'vue';

let email = ref('')
let country = ref(48)
</script>

<template>
	<PageTitle :title="'page.Home'" />
	<TopMenu />

	<h1>{{ $t('page.Home') }}</h1>

	<div class="form" @submit.prevent="">
		<form>
			<Input name="email" v-model="email" :label="$t('login.Email_address')" />
			<SelectPrefix name="prefix" v-model="country" :label="$t('register.Prefix')" />
			<Button :text="$t('docs.Subscribe')" />
		</form>
	</div>
</template>

<style>
div.form
{
    display: block;
    text-align: center;
}

form
{
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
	margin-top: 50px;
    text-align: left;
	width: 90%;
	max-width: 480px;
}
</style>
