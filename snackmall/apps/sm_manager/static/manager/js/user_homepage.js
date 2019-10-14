var app =new Vue({
	el:'#app',
	delimiters: ['[[', ']]'],
	data:{
		user_info : {
			nick :'232421XXX',
		}
		
	},
	methods:{
		logout()
		{
			window.location.href="/manager/logout/";
		},
		
		to_myorder(){
			window.location.href="/info/my_orders/from_homepage/";
		},
		
		to_addresslist(){
			window.location.href="/manager/address_list_from_homepage/";
		},
		
		returnTo(){
			window.location.href="/index/";
		}
		
		
	}
})