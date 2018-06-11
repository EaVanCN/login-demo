import * as types from './types'

export default {
	login : ({commit}) => {
		commit(types.LOG_IN);
	},
	logout : ({commit}) => {
		commit(types.LOG_OUT);
	},
}