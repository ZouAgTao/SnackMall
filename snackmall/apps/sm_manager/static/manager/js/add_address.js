var app =new Vue({
	el:'#app',
	delimiters: ['[[', ']]'],
	data:{
		default : false,
		recv_name: '',
		recv_phone: '',
		recv_location:{
			building: '',
			dormi: '',
		},
		
	},
	
	methods:{
		confirm(){
			//点击确认按钮，判断手机号是否填写正确
			var regPhoneStr = /^1[0-9]{10}$/;
			if(!regPhoneStr.test(this.recv_phone)){
				alert("请填写正确的手机号");
				return false;
			}
			else{
				document.getElementById("address_info").submit();
			}
		},
		
		returnTo(){
			window.history.back();
		}
	},
	
})