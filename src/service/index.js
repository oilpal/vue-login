import loginAPI from './loginAPI'

export default {
	async login(uid, password) {
		try {
			const loginResposne = await loginAPI.login(uid, password)
			return loginResposne
		} catch (err) {
			console.error(err)
		}
	},
}
