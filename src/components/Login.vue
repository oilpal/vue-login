/* eslint-disable no-undef */
<template>
	<div>
		<h2>Log In</h2>
		<form @submit="onSubmit">
			<input placeholder="Enter your ID" v-model="uid" />
			<input placeholder="Enter your password" v-model="password" />
			<button type="submit">Login</button>
		</form>
		<div class="alert-danger" v-if="errorState">
			<p></p>
		</div>
	</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Login',
	data: () => ({
		uid: '',
		password: '',
	}),
	methods: {
		...mapActions(['login']),
		async onSubmit() {
			console.log(this.uid)
			console.log(this.password)

			try {
				let loginResult = await this.login({
					uid: this.uid,
					password: this.password,
				})
				console.log(loginResult) // 로그인 성공하면 true, 아니면 false
				if (loginResult) this.goToPages()
			} catch (err) {
				console.error(err)
			}
		},
		gotoPages() {
			this.$router.push({
				name: 'HelloWorld',
			})
		},
	},
	computed: {
		...mapGetters({
			errorState: 'getErrorState',
		}),
	},
}
</script>

<style scoped>
.alert-danager p {
	color: red;
}
</style>
