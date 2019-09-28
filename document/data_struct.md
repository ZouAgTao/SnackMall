# 数据结构

## 文档信息

### 基础信息

**项目名：**SnacksMall

**版本号：**1.3.1

**建立日期：**2019-09-18><19:00:00

**更新日期：**2019-09-28><10:27:00

### 扩展信息

#### 文档概述

项目的数据结构/数据字典文档。

#### 备注

无

## [TABLE]类别

| 名称 | 数据类型    | 描述                       |
| ---- | ----------- | :------------------------- |
| id   | Integer     | 【*】类别的id，从1开始编号 |
| name | VarChar(50) | 【*】类别的名称            |

## [TABLE]标签

| 名称 | 数据类型    | 描述                       |
| ---- | ----------- | :------------------------- |
| id   | Integer     | 【*】标签的id，从1开始编号 |
| name | VarChar(50) | 【*】标签的名称            |

## [TABLE]商品

| 名称        | 数据类型                   | 描述                              |
| ----------- | -------------------------- | :-------------------------------- |
| id          | Integer                    | 【*】商品的id，从1开始编号        |
| type        | ForeignKey                 | 【*】类别的id，从1开始编号        |
| name        | VarChar(50)                | 【*】商品的名称                   |
| price       | Float(8,2)                 | 【*】商品的单价                   |
| tag         | ManyToMany                 | 标签的id                          |
| stock       | Integer                    | 【*】商品的库存量                 |
| image       | VarChar(len(id)+len(name)) | 【*】商品的图片的文件名           |
| description | Text/Text(JSON)            | 【*】商品的描述性介绍文字(txt/md) |
| statistics  | Text(JSON)                 | 【*】动态信息                     |

``` json
statistics : {
    sale_num_list : [
       {
           time : (String)[DateTime],
           num : (Integer)
       } 
    ],
    //...
}
```

## [TABLE]用户

| 名称          | 数据类型         | 描述                                             |
| ------------- | ---------------- | :----------------------------------------------- |
| id            | VarChar(11)      | 【*】用户的id，同时也是注册手机号                |
| passwd        | VarChar(18)      | 【*】用户的密码，6~16为字符长度要求（字母+数字） |
| nick          | VarChar(30)      | 【*】用户的昵称或用户名，最长15个中文或30个字母  |
| avator        | VarChar(len(id)) | 【*】用户的头像的图片的文件名                    |
| recv_name     | VarChar(30)      | 用户的收货姓名                                   |
| recv_phone    | VarChar(11)      | 用户的收货联系手机号                             |
| recv_location | Text(JSON)       | 用户的收货地址                                   |
| psn_gender    | Boolean          | 用户的性别                                       |
| psn_birthday  | DateTime         | 用户的生日                                       |
| psn_flavor    | Enum{...}        | 用户的口味信息                                   |
| goods         | Text(JSON)       | 【*】用户当前的购物车                            |
| reg_date      | DateTime         | 【*】用户的注册日期                              |
| used_time     | Text(JSON)       | 【*】用户的总使用时间                            |
| tab_click_num | Integer          | 【*】分类标签点击总次数                          |
| consumption   | Float(16,2)      | 【*】用户消费总金额                              |
| order_num     | Integer          | 【*】用户下单次数                                |
| bad_order_num | Integer          | 【*】异常订单次数                                |

> 【id】注册手机号（用于注册、登陆、找回密码）
>
> //默认为注册时提供的验证的手机号码
>
> 【passwd】密码（用于登陆、修改密码、敏感信息修改）
>
> //默认为注册时提供的“两次输入”验证的密码
>
> 【nick】昵称/用户名（用于展示）
>
> //默认是尾数6位随机化后的手机号
>
> 【avator】个人头像（用于展示）
>
> //默认是我们给的，后期迭代后变成可以上传
>
> 【recv_name】收货姓名（用于收货）
>
> //默认为空
>
> 【recv_phone】收货手机号（用于收货）
>
> //默认为空
>
> 【recv_location】收货地址（用于收货）
>
> //默认为空
>
> 【psn_gender】性别（用于数据分析）
>
> //默认是“无”，一旦修改就不能是“无”
>
> 【psn_birthday】生日（用于数据分析）
>
> //默认是“无”，一旦修改就不能是“无”
>
> 【psn_flavor】口味（用于数据分析）
>
> //默认是“无”，一旦修改就不能是“无”
>
> 【goods】购物车（用于存储记录）
>
> //默认是空
>
> 【reg_date】用户注册日期（用于数据分析）
>
> //固定为注册日期
>
> 【used_time】用户使用总时长（用于数据分析）
>
> //默认为“全0”
>
> 【tab_click_num】分类标签点击总次数（用于数据分析）
>
> //默认为0
>
> 【consumption】用户消费总金额（用于数据分析）
>
> //默认为0
>
> 【order_num】用户下单次数（用于数据分析）
>
> //默认为0
>
> 【bad_order_num】异常订单次数（用于数据分析）
>
> //默认为0

## [JSON]用户使用时间

```json
used_time : {
	hour : (Integer),
    min : (Integer),
    sec : (Integer)
}
```

> 【used_time】用户使用时间 - Object
>
> 【hour】小时数 - Integer
>
> 【min】分钟数(0<=min<=60) - Integer
>
> 【sec】秒数(0<=min<=60) - Integer

## [JSON]收货地址

```json
recv_location : {
	list : [
        {
            dormi : (String),
            building : (String)
        },
        //...
	],
    num : (Integer)
}
```

> 【recv_location】收货地址列表 - Object
>
> 【list】收货地址列表 - List
>
> 【num】收货地址数量 - Integer
>
> 【dormi】宿舍门牌号 - String
>
> 【building】宿舍所在楼号 - String

## [JSON]购物车

```json
goods : {
	list : [
		{
            id : (Integer),
    		name : (String),
			price : (Float),
			num : (Integer)
		},
	],
	sum : (Float)
}
```

> 【goods】购物车对象 - Object
>
> 【list】商品列表 - List
>
> 【sum】总价格 - Float(8,2)
>
> 【id】商品id - Integer
>
> 【name】商品名称 - String
>
> 【price】商品单价 - Float
>
> 【num】商品购买的数量 - Integer

## [TABLE]订单

| 名称        | 数据类型                 | 描述                          |
| ----------- | ------------------------ | :---------------------------- |
| id          | VarChar(4+2+2+2+2+2+4+4) | 【*】订单id编号               |
| dt          | DateTime                 | 【*】订单的建立的日期时间     |
| user_id     | ForeignKey               | 【*】订单所属的用户id         |
| status      | Enum{...}                | 【*】订单的状态               |
| recv_method | Boolean                  | 【*】收货方式（自提/送货）    |
| recv_info   | Text(JSON)               | 【*】收货信息（自变格式）     |
| goods       | Text(JSON)               | 【*】订单对应的购物车商品信息 |

> 【id】订单id（用于记录和查询订单）
>
> //固定为：**年**+**月**+**日**+**时**+**分**+**秒**+用户手机号的**后4位**+**4位**（1000-9999）随机数字
>
> //例如：2019091909042024653295
>
> //2019（年）09（月）19（日）09（时）04（分）20（秒）2465（手机后4位尾数）3295（4位数随机码）
>
> 【dt】订单建立的时间（用于记录和查询订单）
>
> //固定为订单建立的时间
>
> 【user_id】用户的id（用于记录和查询订单）
>
> //固定为订单建立的用户
>
> 【status】订单状态（用于记录和查询）
>
> //随订单生命周期而变化
>
> 【recv_method】收货方式（用于记录和决定收货信息类型）
>
> //固定为订单建立时的收货方式
>
> 【recv_info】收货信息（用于记录）
>
> //固定为订单建立时，且收货方式确定时的收货信息
>
> //格式随收货方式改变
>
> | 收货方式 | 收货信息          | 描述                       |
> | -------- | ----------------- | :------------------------- |
> | 自提     | **收货信息格式A** | 只记录提货的时间           |
> | 送货     | **收货信息格式B** | 记录收货地址、姓名、手机号 |
>
> **收货信息格式A**
>
> ```json
> recv_info:{
>     time : (String)[DateTime]
> }
> ```
>
> **货信息格式B**
>
> ```json
> recv_info:{
>  //pay_method : (String),
>  recv_name : (String),
>  recv_phone : (String),
>  recv_location : 
>     {
>         dormi_num : (String),
>         building : (String)
>  	}
> }
> ```
>
> 【goods】购物车（用于记录）
>
> //固定为订单建立时的购物车信息