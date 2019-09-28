var app = new Vue({
	el: '#app',
	delimiters:['[[',']]'],
	data: {
		navs: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
		// shopList储存购物车 商品对象的数组
		shopList: [],
		selector: 0,
		IsShowlist: false,
		IsHidden: true,
		goods: [{
				title: 'A',
				items: [{
						src: "img/1.jpg",
						name: 'XXXXXXXXXXXXXXXXXXXXXXXXXXLLL',
						price: 1,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'B',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'C',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'D',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'E',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'F',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'G',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'H',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'I',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'J',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'K',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'L',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
			{
				title: 'M',
				items: [{
						src: "img/1.jpg",
						name: 'Beats Solo3',
						price: 1499,
						tag: '',
						num: 0
					},
					{
						src: "img/2.jpg",
						name: 'Beats Studio3',
						price: 1999,
						tag: '',
						num: 0
					},
					{
						src: "img/3.jpg",
						name: 'Beats urb',
						price: 2499,
						tag: '',
						num: 0
					}
				]
			},
		],
		total: 0, // 购买总量

	},
	computed: {
		totalPrice: function() {
			let total = 0;
			for (let i = 0; i < this.shopList.length; i++) {
				total += this.shopList[i].price * this.shopList[i].num;
			}
			return total;
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
			//添加商品到购物车，购物车列表商品信息更新
			if (this.goods[index1].items[index2].num == 1) {
				this.shopList.push(this.goods[index1].items[index2]);
			}

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
			if(this.goods[index1].items[index2].num>0){
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
			}
		},
		//增加删减 在弹出框里操作
		increaseInTab(index3){
			this.shopList[index3].num++;
			this.total++;
		},
		
		reduceInTab(index3){
			if(this.shopList[index3].num>0){
				this.shopList[index3].num--;
				this.total--;
			}
			if(this.shopList[index3].num == 0) {
				this.shopList.splice(index3,1);
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
		showIndex(){
			this.IsShowlist = !this.IsShowlist;
			this.IsHidden = !this.IsHidden;
		},
		
		//清空
		clearAll(){
			// alert(this.shopList.length);
			this.shopList.splice(0,this.shopList.length);
			this.total=0;
		}
	}
});
