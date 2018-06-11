import getters from './getters'
import * as types from './types'

const state = {
	loginStatus : false         //true代表登录中，false代表已登出
}

const mutations = {
	[types.LOG_IN](state){
		state.loginStatus = true;
	},
	[types.LOG_OUT](state){
		state.loginStatus = false;
	}
}

export default {
	state,
	mutations,
	getters
}