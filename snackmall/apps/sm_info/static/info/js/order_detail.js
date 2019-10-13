var app = new Vue({
	el: '#app',
	delimiters: ['[[', ']]'],
	data: {
		total: 0,
		return_route : 'from_index',
		order: {
			id: 12345,
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
		}
	},
	methods: {
		cancel_order() {
			var that = this;
			//ajax发送异步请求
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open("post", "/info/cacel_order/");
			xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status ==200 )
				{
					var json = JSON.parse(xmlHttp.responseText);
					if(json.result)
					{ //如果result 返回值是true更改状态
						that.order.statue = "已取消";
						window.location.reload();
					}
					else
					{
						alert("订单取消失败！");
						return;
					}
				}
			}
			
			xmlHttp.send('order_id=' + this.order.id);
		},
		
		//左上角返回按钮
		returnTo()
		{
			if(this.return_route == 'from_pay')
			{
				window.location.href = '/index/';
			}
			else
			{
				window.location.href = '/info/my_orders/'+ this.return_route +'/';
			}
		},
		
	}
})
