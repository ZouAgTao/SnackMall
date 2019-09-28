var app =new Vue({
	el:'#bd',
	delimiters:['[[',']]'],
	data:	{
		usn:null,
		upw:null
	},
	methods: {
		//核查填入信息是否符合规范
		checkInfo() {
			var regPhoneStr = /^1[0-9]{10}$/;
			var regPswStr = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
			alert("usn:" + this.usn + "upw:" + this.upw );
			if (this.usn == null || this.upw == null ) {
				alert("请填写信息");
			} else if (!regPhoneStr.test(this.usn)) {
				alert("手机号格式错误！");
				this.usn = null;
				this.upw=null;
				// return false;
			} else if (!regPswStr.test(this.upw)) {
				//附加提示信息，密码哪里错误了。格式错误（具体格式）or不匹配
				alert("密码格式错误！");
				this.upw = null;
				this.code = null;
				// return false;
			}
			//测试,注册成功
			else {
				document.getElementById("loginBtn").submit();
			}
		
		},
	}
})