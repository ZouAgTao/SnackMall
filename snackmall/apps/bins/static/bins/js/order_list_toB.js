var app = new Vue({
	el: '#app',
	delimiters: ['[[', ']]'],
	data: {
		tabs: ["已接单", "已完成", "已取消"],
		is_show: true,
		return_url : '/index/',
		orderList:[{
			id:'13068640035',
			dt:'09月27日 13:40',
			status:'已接单',
			recv_method:true,
			recv_info:{
				recv_name :'蒋哲',
				recv_phone :'13068640035',
				recv_location:{
					dormi_num:'210',
					building:'A栋',
				},
			},
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
		},
		{
			id:'13068640035',
			dt:'09月27日 13:50',
			status:'已接单',
			recv_method:false,
			recv_info:{
				time:'7:30',
				},
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
		},
		{
			id:'13068640035',
			dt:'09月27日 13:40',
			status:'已完成',
			recv_method:true,
			recv_info:{
				recv_name :'蒋哲',
				recv_phone :'13068640035',
				recv_location:{
					dormi_num:'210',
					building:'A栋',
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
		},
		{
			id:'13068640035',
			dt:'09月27日 13:40',
			status:'已取消',
			recv_method:true,
			recv_info:{
				recv_name :'蒋哲',
				recv_phone :'13068640035',
				recv_location:{
					dormi_num:'210',
					building:'A栋',
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
		},],
		num :0,
		
			
			
		
	},
	methods: {
		tab(index) {
			this.num = index;
			
			var that = this;
			
			if(index==0)
			{
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open("POST","/bibubibu/get_A_list_fixed/");
				xmlHttp.send();
				xmlHttp.onreadystatechange = function(){
					if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
						var json = JSON.parse(xmlHttp.responseText);
						that.orderList = json.list;
					}
				};
			}
			else if(index==1)
			{
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open("POST","/bibubibu/get_S_list/");
				xmlHttp.send();
				xmlHttp.onreadystatechange = function(){
					if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
						var json = JSON.parse(xmlHttp.responseText);
						that.orderList = json.list;
					}
				};
			}
			else
			{
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open("POST","/bibubibu/get_C_list/");
				xmlHttp.send();
				xmlHttp.onreadystatechange = function(){
					if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
						var json = JSON.parse(xmlHttp.responseText);
						that.orderList = json.list;
					}
				};
			}
		},
		
		
		
		linkTo(index){
				order_id = this.orderList[index].id;
				
				window.location.href="/bibubibu/order_detail/"+ order_id +"/";
			},
			
			//点击确定按钮逻辑
			confirm(index){
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
							that.orderList.splice(index,1);
						}
						else
						{
							alert('服务器出错');
						}
					}
				}
				xmlHttp.send("id="+that.orderList[index].id);
			}
		
		},
})
