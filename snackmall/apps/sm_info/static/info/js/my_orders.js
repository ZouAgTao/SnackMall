var app = new Vue({
	el: '#app',
	delimiters: ['[[', ']]'],
	data: {
		now_page : 1,
		return_url : '/index/',
		is_show: true,
		orderList: [],
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
			// xmlHttp.timeout = 3000;
			xmlHttp.open("POST", "/info/get_orders_list_info/", false);
			xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			
			// xmlHttp.onreadystatechange = function() {
			// 	if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			// 		var json = JSON.parse(xmlHttp.responseText);
			// 		return json;
			// 	}
			// 	// else{
			// 	// 	if(xmlHttp.status != 200){ //此处仍会执行多次！！！ readyState为2.3.4，时触发3次
			// 	// 	alert("false");
			// 	// 	return false;		
			// 	// 	}
			// 	// }
			// };
			// xmlHttp.ontimeout = function(){
			// 	alert("请求超时，请重试");
			// 	return false;
			// }
			
			xmlHttp.send("page="+page);
			
			if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
			{
				var json = JSON.parse(xmlHttp.responseText);
				return json;
			}
			
			return null;
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
			this.now_page = this.now_page + 1;
			var page = this.now_page;
			var json = get_orderList( page );
			if(json.result){
				for (let i = 0; i < json.list.length; i++) {
					this.orderList.push(json.list[i]);
				}
			}else{
				this.is_show = false;
			}
		},
		
		linkTo(index)
		{
			order_id = this.orderList[index].id;
			
			if(this.return_url == '/index/')
			{
				window.location.href="/info/order_detail/"+ order_id +"/from_index/";
			}
			else if(this.return_url == '/manager/user_home/')
			{
				window.location.href="/info/order_detail/"+ order_id +"/from_homepage/";
			}
		},

	}


})
