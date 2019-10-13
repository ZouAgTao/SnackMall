var app = new Vue({
	el: '#app',
	delimiters: ['[[', ']]'],
	data: {
		total: 0,
		order: {
			id: 12345,
			user_id:'13068640035',
			dt: '2019-10-4 4:30',
			status: '已接单',
			recv_method: true,
			recv_info: {
				recv_name: '蒋哲',
				recv_phone: '13068640035',
				recv_location: {
					dormi_num: '210',
					building: 'A栋',
				}
			},
			shopList: {
				list: [{
					src: "shop/img/1.jpg",
					name: '小白心里暖',
					price: 1.11,
					tag: '',
					num: 5,
					type: 'A',
				}, ],
				sum: 10,
			},
		},
	},
	methods: {
		confirm(){
			var that = this;
			
			xmlHttp =new XMLHttpRequest();
			xmlHttp.open("POST","/bibubibu/order_confirm/");
			xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlHttp.onreadystatechange = function(){
				if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
				{
					var json_data = JSON.parse(xmlHttp.responseText);
					if(json_data.result)
					{
						that.order.status = "已完成";
					}
					else
					{
						alert('服务器出错');
					}
				}
			}
			xmlHttp.send("id="+that.order.id);
		},
		
		cancel_order(){
			var that = this;
			
			xmlHttp =new XMLHttpRequest();
			xmlHttp.open("POST","/bibubibu/order_cancel/");
			xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlHttp.onreadystatechange = function(){
				if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
				{
					var json_data = JSON.parse(xmlHttp.responseText);
					if(json_data.result)
					{
						that.order.status = "已取消";
					}
					else
					{
						alert('服务器出错');
					}
				}
			}
			xmlHttp.send("id="+that.order.id);
		},
		
		//左上角返回按钮
		returnTo(){
			window.location.href="/bibubibu/dashboard/";
		},
		
	}
})
