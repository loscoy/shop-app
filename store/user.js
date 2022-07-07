import {defineStore} from 'pinia';

export const userState = defineStore('user',{
	state:()=>{
		return {
			loginState:false
		};
	},
	actions:{
		setLoginState(state){
			this.loginState = state;
		}
	}
});