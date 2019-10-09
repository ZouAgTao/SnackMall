var app =new Vue({
	el:'#app',
	delimiters: ['[[', ']]'],
	data:{
		recv_infos: {
			list:[
				{
					recv_name:'蒋哲',
					recv_phone: '13068640035',
					recv_location:{
						dormi:'210',
						building:'A栋',
					}
				},
				{
					recv_name:'jz',
					recv_phone: '13068640035',
					recv_location:{
						dormi:'210',
						building:'H栋',
					}
				},
			],
			selected: {},
		},
	},
	methods:{
		returnTo(){
			window.history.back();
		},
		
		delete_self(index){
			this.recv_infos.list.splice(index,1);
		},
		
		edit_self(){
			window.location.href="../"
		},
		
		add_address(){
			window.location.href="/manager/add_address//manager/address_list/";
		}
		
	}
})