var app =new Vue({
	el:'#app',
	delimiters: ['[[', ']]'],
	data:{
			recv_infos:[
				{
					id: 1,
					'default':true,
					recv_name:'蒋哲',
					recv_phone: '13068640035',
					recv_localtion:{
						dormi:'210',
						building:'A栋',
					}
				},
				// {
				// 	id: 2,
				// 	'default':false,
				// 	recv_name:'jz',
				// 	recv_phone: '13068640035',
				// 	recv_location:{
				// 		dormi:'210',
				// 		building:'H栋',
				// 	}
				// },
			],
	},
	methods:{
		returnTo(){
			window.location.href = "/pay/";
		},
		
		delete_self(index){
			//ajax
			let that = this;
			
			var xmlHttp = new XMLHttpRequest;
			xmlHttp.open("POST","/manager/delete_recv_infos/");
			xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlHttp.onreadystatechange =function(){
				if(xmlHttp.readyState==4 && xmlHttp.status ==200)
				{
					(that.recv_infos).splice(index,1);
				}
				else
				{
					if(xmlHttp.status !=200)
					{
						alert("无法删除，服务器错误...");
					}
					return false;
				}
			}
			xmlHttp.send("id="+this.recv_infos[index].id);
		},
		
		edit_self(index){			
			window.location.href="/manager/edit_address/"+ this.recv_infos[index].id +"//manager/address_list_from_pay/"
		},
		
		add_address(){
			window.location.href="/manager/add_address//manager/address_list_from_pay/";
		},
		
		href_to(index){
			//遍历地址数组，将所有default值设为false
			for(var i=0 ;i<this.recv_infos.length ;i++ ) {
				this.recv_infos[i].default = false;
				}
			//将点击的那个地址对象的default值设为true
			this.recv_infos[index].default = true;
			//ajax发送请求
			var xmlHttp = new XMLHttpRequest;
			xmlHttp.open("POST","/manager/select_recv_infos/",true);
			xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			// xmlHttp.setRequestHeader("X-CSRFToken", Cookies.get('csrftoken'));
			xmlHttp.send("id="+this.recv_infos[index].id);
			// xmlHttp.onreadystatechange =function(){
			// 	if(xmlHttp.readyState == 4 && xmlHttp.status ==200){
			// 		alert('成功')
			// 	}
			// 	else
			// 	{
			// 		alert('失败')
			// 	}
			// }
		}
		
	}
})