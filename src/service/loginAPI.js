import axios from 'axios'
import { LoaderOptionsPlugin } from 'webpack'

const getUserInfo = (uid, password) => {
	return axios.get('/endpoint-for-get-user-info', {
		params: {
			'uid': uid,
			'password': password
		}
	})
}

const isFinished = uid => {
	return axios.get('/endpoint-for-is-finished', {
		params: {
			'uid': uid
		}
	})
}

export default {
	async login(uid, password) {
		try {
			const getUserInfoPromise = await getUserInfo(uid, password)
			const isFinishedPromise = await isFinished(uid)
			const [userInfoResponse, isFinishedResponse] = await Promise.all([getUserInfoPromise, isFinishedPromise])
			
			if (userInfoResponse.data.length === 0) return 'noAuth'
			if (isFinishedResponse.data[0]).CNT > 0) return 'done'
			return userInfoResponse
		}
		catch( err ) {
			console.error(err)
		}
	}
}