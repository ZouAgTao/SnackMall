var hd =new Vue({
	el:'#hd',
	methods:{
		//返回按钮
		returnTo(){
			window.history.back();
		}
	}
})


var app = new Vue({
	el: '#bd',
	delimiters:['[[',']]'],
	data: {
		IsHide: true,
		IsVisible: false,
		show: true,
		count: '',
		timer: null,
		//以下 为v-model对数据双向绑定 -- usn 手机号,upw 密码,code 验证码
		usn: null,
		upw: null,
		code: null,
	},
	methods: {
		//密码显示与切换的函数
		showPsw() {
			//切换左边眼睛图标的样式
			this.IsHide = !this.IsHide;
			this.IsVisible = !this.IsVisible;
			//切换input框type属性
			var psw = document.getElementById("upw");
			if (psw.type == 'password') {
				psw.type = 'text';
			} else {
				psw.type = 'password';
			}
		},

		//获得验证码函数
		getCode() {
			if(!this.usn)
			{
				alert('请输入手机号')
				return;
			}
			var request = new XMLHttpRequest();
						request.open("GET","/auth/send_check_code/"+this.usn+"/");
						request.send();
						const TIME_COUNT = 60;
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.show = false;
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.show = true;
									clearInterval(this.timer);
									this.timer = null;
								}
							}, 1000)
							}

		},

		//核查填入信息是否符合规范
		checkInfo() {
			var regPhoneStr = /^1[0-9]{10}$/;
			var regPswStr = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
			var regCodeStr = /^\d{4}$/;
			
			if (this.usn == null || this.upw == null || this.code == null) {
				alert("请完善信息");
			} else if (!regPhoneStr.test(this.usn)) {
				alert("手机号格式错误！");
				this.usn = null;
				this.code = null;
				// return false;
			} else if (!regPswStr.test(this.upw)) {
				alert("密码格式错误！");
				this.upw = null;
				this.code = null;
				// return false;
			}
			//验证码是否符合规范
			else if (!regCodeStr.test(this.code)) {
				alert("验证码格式错误！");
				this.code = null;
			}
			//测试,注册成功
			else {
				document.getElementById("data_form").submit();
			}

		},


		toLogin() {
			// window.location.href = "login.html";
			window.history.back();
		}

	}



})
