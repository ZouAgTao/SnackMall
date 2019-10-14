
var app = new Vue({
	el:'#app',
	delimiters:['[[',']]'],
	data:{
		shopList: {
			list: [],
			sum: null,
		},
		isDelivery : true,
		isDoor : false,
		isLogin: true,
		pickTime: null,
		RecvInfoC_DL:{
			recv_name : '蒋哲',
			recv_phone: '13068640035',
			recv_location: {
				dormi_num: '210',
				building: 'A栋',
			}
		},
		
		RecvInfoC_DO:{
			time : null,
		},
		
		RecvInfoB:{
			recv_name : '店长',
			recv_phone: 13129193950,
			recv_location: '华南师范大学G座一楼大门口',
		},
	},
	computed:{
		total:function(){
			let totalNum =0 ;
			for(let i=0 ;i<this.shopList.list.length ;i++){
				totalNum+=this.shopList.list[i].num;
			}
			return totalNum;
		}
	},
	methods:{
		address_list()
		{
			window.location.href='/manager/address_list_from_pay/';
		},
		
		add_address()
		{
			window.location.href='/manager/add_address//pay/';
		},
		
		switchDeli(){
			this.isDelivery = !this.isDelivery;
			this.isDoor = !this.isDoor;
		},
		
		submit_order(){
			//订单核查?是否需要
			
			//获取送货方式，true 为送货上门 false为自提
			document.getElementById("recv_method").value = this.isDelivery;
			// console.log("当前收货方式为："+document.getElementById("recv_method").value);
			//获取当前提交订单的时间
			var date =new Date();
			var seperator1 = "-";
			var seperator2 = ":";
			var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
			var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
			var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			+ " "  + date.getHours()  + seperator2  + date.getMinutes()
			+ seperator2 + date.getSeconds();
			document.getElementById("dt").value = currentdate;
			// console.log("当前时间为："+document.getElementById("dt").value);
			//收货信息/自提时间 转json 字符串
			if(this.isDelivery){
				var json_RecvInfo = JSON.stringify(this.RecvInfoC_DL);
				document.getElementById("recv_info").value = json_RecvInfo;
				// console.log("当前收货地址："+document.getElementById("recv_info").value);
			}else{
				document.getElementById("pick_time").value = this.RecvInfoC_DO.time;
				// console.log("上门自提时间："+document.getElementById("pick_time").value);
			}
			//商品信息
			var json_goods = JSON.stringify(this.shopList);
			document.getElementById("goods").value = json_goods;
			// console.log("当前商品信息："+document.getElementById("goods").value);
			
			document.getElementById("order_form").submit();
			
			this.shopList.list.splice(0,this.shopList.list.length);
			this.shopList.sum=0;
			shopList_info = JSON.stringify(this.shopList);
			localStorage.setItem('shopList',shopList_info);
		},
		
		returnTo(){
			window.history.back();
		},
		
	}
	
})