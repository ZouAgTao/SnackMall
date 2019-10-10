var app =new Vue({
	el:'#app',
	delimiters: ['[[', ']]'],
	data:{
		user_info : {
			nick :'232421XXX',
		}
		
	},
	methods:{
		to_myorder(){
			window.location.href="";
		},
		
		to_addresslist(){
			window.location.href="/manager/address_list_from_homepage/";
		},
		
		returnTo(){
			window.location.href="/index/";
		}
		
		
	}
})