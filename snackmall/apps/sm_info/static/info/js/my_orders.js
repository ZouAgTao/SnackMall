var app = new Vue({
	el: '#app',
	delimiters: ['[[', ']]'],
	data: {
		return_url : '/index/',
		is_show: true,
		orderList: [{
			status: '已接单',
			dt: '2019-10-04 12:21',
			shopList: {
				list: [{
						src: "shop/img/1.jpg",
						name: '小白心里暖',
						price: 1.11,
						tag: '',
						num: 5,
						type: 'A',
					},
					{
						src: "shop/img/1.jpg",
						name: '小白心里暖',
						price: 1.11,
						tag: '',
						num: 5,
						type: 'A',
					},
					{
						src: "shop/img/1.jpg",
						name: '小白心里暖',
						price: 1.11,
						tag: '',
						num: 5,
						type: 'A',
					},
				],
				sum: 10,
			},
		}, {
			status: '已取消',
			dt: '2019-10-04 12:21',
			shopList: {
				list: [{
						src: "shop/img/1.jpg",
						name: '小白心里暖',
						price: 1.11,
						tag: '',
						num: 5,
						type: 'A',
					},
					{
						src: "shop/img/1.jpg",
						name: '小白心里暖',
						price: 1.11,
						tag: '',
						num: 5,
						type: 'A',
					},
					{
						src: "shop/img/1.jpg",
						name: '小白心里暖',
						price: 1.11,
						tag: '',
						num: 5,
						type: 'A',
					},
				],
				sum: 10,
			},
		}],


	},
	methods: {
		toReturn()
		{
			window.location.href = this.return_url;
		},
		
		//传当前所需要的page信息，返回后端服务器传来的一个对象
		get_orderList( page ){
			xmlHttp = new XMLHttpRequest();
			//设置请求的超时时间
			xmlHttp.timeout = 3000;
			xmlHttp.open("POST", "");
			xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlHttp.send("page="+page);
			
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					var json = JSON.parse(xmlHttp.responseText);
					return json;
				}
				else{
					if(xmlHttp.status != 200){ //此处仍会执行多次！！！ readyState为2.3.4，时触发3次
					alert("false");
					return false;		
					}
				}
			};
			xmlHttp.ontimeout = function(){
				alert("请求超时，请重试");
				return false;
			}
		},
		// more_order() {
		// 	let that = this;
		// 	page++;
		// 	console.log(page);
		// 	xmlHttp = new XMLHttpRequest();
		// 	//设置请求的超时时间
		// 	xmlHttp.timeout = 3000;
		// 	xmlHttp.open("GET", "" + 'id=' + this.id + '&page=' + page);
		// 	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// 	//只需要发送用户id？
		// 	xmlHttp.send();
		// 	xmlHttp.onreadystatechange = function() {
		// 		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		// 			//请求返回一个新的订单对象数组
		// 			// {
		// 			// 	result: 1,
		// 			// 	list:[]
		// 			// }
		// 			var json = JSON.parse(xmlHttp.responseText);
		// 			if (json.result == 1) { //如果result 返回值是true。则正确收到
		// 				for (let i = 0; i < json.list.length; i++) {
		// 					this.orderList.push(json.list[i]);
		// 				}
		// 			} else {
		// 				that.is_show = false;
		// 			}
		// 		} else {
		// 				if(xmlHttp.status != 200){ //此处仍会执行多次！！！ readyState为2.3.4，时触发3次
		// 				alert("false");
		// 				return false;		
		// 				}
		// 		}
		// 	};
		// 	//请求超时的回调函数
		// 	xmlHttp.ontimeout = function(){
		// 		alert("请求超时，请重试");
		// 	}
		// },
		
		//点击加载更多按钮，请求更多订单信息
		more_order() {
			page++;
			var json = get_orderList( page );
			if(json.result){
				for (let i = 0; i < json.list.length; i++) {
					this.orderList.push(json.list[i]);
				}
			}else{
				this.is_show = false;
			}
		},
		
		linkTo( index ){
			window.location.href=" "+"?id=" + this.orderList[index].id
		},

	}


})
