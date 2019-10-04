var app = new Vue({
	el: '#app',
	delimiters: ['[[', ']]'],
	data: {
		navs: ['早餐大礼包', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
		// shopList储存购物车 商品对象的数组
		shopList: [],
		selector: 0,
		IsShowlist: false,
		IsHidden: true,
		// totalPrice :0,
		goods: [{
				title: 'A',
				items: [{
						src: "shop/img/1.jpg",
						name: 'XXXXXXXXXXXXXXXXXXXXXXXXXXLLL',
						price: 1.11,
						tag: '',
						num: 0,
						type: 'A'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'A'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'A'
					}
				]
			},
			{
				title: 'B',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'B'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'B'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'B'
					}
				]
			},
			{
				title: 'C',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'C'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'C'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'C'
					}
				]
			},
			{
				title: 'D',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'D'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'D'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'D'
					}
				]
			},
			{
				title: 'E',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'E'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'E'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'E'
					}
				]
			},
			{
				title: 'F',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'F'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'F'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'F'
					}
				]
			},
			{
				title: 'G',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'G'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'G'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'G'
					}
				]
			},
			{
				title: 'H',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'H'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'H'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'H'
					}
				]
			},
			{
				title: 'I',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'I'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'I'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'I'
					}
				]
			},
			{
				title: 'J',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'J'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'J'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'J'
					}
				]
			},
			{
				title: 'K',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'K'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'K'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'K'
					}
				]
			},
			{
				title: 'L',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'L'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'L'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'L'
					}
				]
			},
			{
				title: 'M',
				items: [{
						src: "shop/img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0,
						type: 'M'
					},
					{
						src: "shop/img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0,
						type: 'M'
					},
					{
						src: "shop/img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0,
						type: 'M'
					}
				]
			},
		],
		// total: 0, // 购买总量

	},
	computed: {
		totalPrice: function() {
			let totalPrice = 0;
			// for (var i = 0; i < localStorage.length; i++) {
			// 	//获取本地储存的key
			// 	let key = localStorage.key(i);
			// 	let good = localStorage.getItem(key);
			// 	good = JSON.parse(good);
			// 	total += good.price * good.num ;
			// }

			for (let i = 0; i < this.shopList.length; i++) {
				totalPrice += this.shopList[i].price * this.shopList[i].num;
			}
			return totalPrice;
		},

		total: {
			//getter
			get: function() {
				let total = 0;
				for (let i = 0; i < this.shopList.length; i++) {
					total += this.shopList[i].num;
				}
				return total;
			},
			set: function(newValue) {
				total = 0;
			}

		}
	},


	methods: {
		// 点击右侧导航栏
		toHash(item, index) {
			this.selector = index;
			window.location.hash = item;

			// 导航栏向上滚动相应距离，一个li的高度为54px
			this.$refs.left.scrollTop = (index > 7 ? index - 7 : 0) * 38;
		},

		// 食品选购按钮
		increase(index1, index2, event) {
			this.total++;
			this.goods[index1].items[index2].num++;
			//将该商品信息存入localStorage 
			goodInfo = JSON.stringify(this.goods[index1].items[index2]);
			localStorage.setItem(this.goods[index1].items[index2].name, goodInfo);
			
			//添加商品到购物车，购物车列表商品信息更新
			if (this.goods[index1].items[index2].num == 1) {
				this.shopList.push(this.goods[index1].items[index2]);
			}
			//选购按钮修改逻辑
			// else{
			// 	for(let i=0; i<this.shopList.length; i++){
			// 		if(this.shopList[i].name ==this.goods[index1].items[index2].name){
			// 			this.shopList[i].num = this.goods[index1].items[index2].num;
			// 		}
			// 	}
			// }
			

			// 小球动画 
			var top = event.clientY, // 小球降落起点
				left = event.clientX,
				endTop = window.innerHeight - 30, // 小球降落终点
				endLeft = 20;

			// // 小球到达起点
			var outer = $('#points .pointPre').first().removeClass("pointPre").css({
				left: left + 'px',
				top: top + 'px'
			});
			var inner = outer.find(".point-inner");

			setTimeout(function() {
				// 将jquery对象转换为DOM对象
				outer[0].style.webkitTransform = 'translate3d(0,' + (endTop - top) + 'px,0)';
				inner[0].style.webkitTransform = 'translate3d(' + (endLeft - left) + 'px,0,0)';

				// 小球运动完毕恢复到原点
				setTimeout(function() {
					outer.removeAttr("style").addClass("pointPre");
					inner.removeAttr("style");
				}, 1000); //这里的延迟值和小球的运动时间相关
			}, 1);
		},

		reduce(index1, index2) {
			if (this.goods[index1].items[index2].num > 0) {
				this.total--;
				this.goods[index1].items[index2].num--;
				//添加商品到购物车，购物车列表商品信息更新 当前状态商品数量为1时删除，非1时数量减1
				if (this.goods[index1].items[index2].num == 0) {
					for (var i = 0; i < this.shopList.length; i++) {
						if (this.shopList[i] == this.goods[index1].items[index2]) {
							this.shopList.splice(i, 1);
						}
					}
				}
				//选购按钮修改逻辑
				// else{
				// 	for(let i=0; i<this.shopList.length; i++){
				// 		if(this.shopList[i].name ==this.goods[index1].items[index2].name){
				// 			this.shopList[i].num = this.goods[index1].items[index2].num;
				// 		}
				// 	}
				// }
				//对localStorage进行操作
				if (this.goods[index1].items[index2].num == 0) {
					localStorage.removeItem(this.goods[index1].items[index2].name);
				} else {
					goodInfo = JSON.stringify(this.goods[index1].items[index2]);
					localStorage.setItem(this.goods[index1].items[index2].name, goodInfo);
				}

			}
		},

		//增加删减 在弹出框里操作
		increaseInTab(index3) {
			this.shopList[index3].num++;
			this.total++;
			//对localStorage进行操作
			goodInfo = JSON.stringify( this.shopList[index3] );
			localStorage.setItem(this.shopList[index3].name, goodInfo);
			
		},

		reduceInTab(index3) {
			if (this.shopList[index3].num > 0) {
				this.shopList[index3].num--;
				this.total--;
				//对localStorage操作
				goodInfo = JSON.stringify( this.shopList[index3] );
				localStorage.setItem(this.shopList[index3].name, goodInfo);
			}
			if (this.shopList[index3].num == 0) {
				//对localStorage操作
				localStorage.removeItem(this.shopList[index3].name);
				this.shopList.splice(index3, 1);
			}
		},

		// 右侧菜单滑动
		listScroll() {
			// 为了达到联动效果，右侧滑动则改变左侧导航栏样式
			var titles = document.getElementsByClassName('goodTitle');
			for (var i = 0; i < titles.length; i++) {
				var style = titles[i].getBoundingClientRect();
				if (style.top == 132) {
					this.toHash(titles[i].innerHTML, i);
				}
			}
		},
		//显示购物车内商品信息
		showShop() {
			//当购物车内有商品的时候才能查看
			if (this.total > 0) {
				this.IsShowlist = !this.IsShowlist;
				this.IsHidden = !this.IsHidden;
			}
		},
		//返回显示首页
		showIndex() {
			this.IsShowlist = !this.IsShowlist;
			this.IsHidden = !this.IsHidden;
		},

		//清空
		clearAll() {
			// alert(this.shopList.length);
			//清除对应商品的勾选数量
			this.shopList.splice(0, this.shopList.length);
			this.total = 0;
			localStorage.clear();
		},

		// 计算总价格
		// returnPrice(){
		// 	for (var i = 0; i < localStorage.length; i++) {
		// 		//获取本地储存的key
		// 		let key = localStorage.key(i);
		// 		let good = localStorage.getItem(key);
		// 		good = JSON.parse(good);
		// 		this.totalPrice += good.price * good.num ;
		// 	}
		// 	// for (let i = 0; i < this.shopList.length; i++) {
		// 	// 	total += this.shopList[i].price * this.shopList[i].num;
		// 	// }
		// }
		// 


	}
});
