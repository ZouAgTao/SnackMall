var app = new Vue({
	el:'#app',
	delimiters:['[[',']]'],
	data:{
		shopList : [],
		hh:'jj',
		isDelivery : true,
		isDoor : false,
		isLogin: true,
		RecvInfoC:{
			recv_name : '蒋哲',
			recv_phone: 13068640035,
			recv_location: '学生宿舍A栋210',
		},
		RecvInfoB:{
			recv_name : 'HJL',
			recv_phone: 13068640035,
			recv_location: '学生宿舍H栋111',
		},
	},
	computed:{
		totalPrice:function(){
			let totalPrice =0 ;
			for(let i=0 ;i<this.shopList.length ;i++){
				totalPrice +=this.shopList[i].num *this.shopList[i].price;
			}
			return totalPrice;
		},
		total:function(){
			let totalNum =0 ;
			for(let i=0 ;i<this.shopList.length ;i++){
				totalNum+=this.shopList[i].num;
			}
			return totalNum;
		}
	},
	methods:{
		switchDeli(){
			this.isDelivery = !this.isDelivery;
			this.isDoor = !this.isDoor;
		}
		
	}
	
})