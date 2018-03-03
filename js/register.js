

//点击切换
$(function(){
	$(".re-box-right").find("span").on('click',function(){
//		console.log($(this))
		var cutIndex=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".mail-phone").find('ul').eq(cutIndex).show().siblings().hide();
	})
})


//注册简单验证
$(function(){
	
//	判断
	var flag1=false,flag2=false,flag3=false,flag4=false,flag5=false,flag6=false,flag7=false,flag8=false;
//	点击发送验证,验证输入的手机号是否输入合法
//	$('.send').on('click',function(e){//点击的版本
////		console.log('4324')
//		e.stopPropagation();
//		var iphone=$('.iphone').val();
//		flag1= /^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test(iphone);//判断手机号是否合法
//		if(flag1){
//			$('.label').eq(0).text("");
//		}else{
//			$('.label').eq(0).text("手机号输入不合法");
//		}
//		
////		console.log(iphone);
//	})
//	不点击的版本
	$('.iphone').on('keyup',function(e){//不点击的版本
//		console.log('4324')
		e.stopPropagation();
		var iphone=$('.iphone').val();
		flag1= /^((13[0-9])|(14[5|7])(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test(iphone);//判断手机号是否合法
		if(flag1){
			$('.label').eq(0).text("");
		}else{
			$('.label').eq(0).text("手机号输入不合法");
		}
		
//		console.log(iphone);
	})

//	鼠标按下密码的时候
	
	$('.pwd').on('keyup',function(e){
		e.stopPropagation();
		flag2 = /^\w{6,20}$/.test($(this).val());//判断密码长度是否合法
		if(flag2){
			$('.label').eq(2).text("");
		}else{
			$('.label').eq(2).text("密码不合法");
		}
	})
	$('.pwd1').on('keyup',function(e){
		e.stopPropagation();
		if($('.pwd').val()==$('.pwd1').val()){//判断两次输入的密码是否一致
			$('.label').eq(3).text("");
			flag3=true;
		}else{
			$('.label').eq(3).text("两次输入的密码不一致");
			flag3=false;
		}
		
	})
	
//	&& flag8控制手机号接收的验证码


//	手机号验证所有的输入如果都合法了就表示注册成功
	//	邮箱号注册下验证所有的输入如果都合法了就表示注册成功
	$('.phonebtn').on('click',function(){
		if($('.check1').is(':checked')){//判断是否勾选了用户协议
//			console.log('fadfs');
			if( flag1 && flag2 && flag3){
				console.log($('.iphone').val());
				console.log($('.pwd').val());
				$.ajax({
					url:"http://127.0.0.1/hanyidushe/php/register2.php",
					type:'post',
					data:{
						tell:$('.iphone').val(),
						tellpwd:$('.pwd').val(),
//						mail:$('.mail1').val(),
//						mailpwd:$('.pwdword').val()
					},
					success:function(res){
						console.log(res);
//						console.log();
					}
				})
				
				var con=confirm('注册成功,是否跳转登录界面');
				if(con==true){
					window.location.href="login.html";
				}
			}else{
	//			window.location.href='login.html';
				alert("用户信息输入有误");
			}

		}else{
			alert('请先阅读用户协议');
		}
	})
	
	
	
	
	
//	邮箱验证
	$('.mail1').on('keyup',function(e){
//		console.log('42')
//		var nameValue=oName.value;
		e.stopPropagation();
		flag4= /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test($(this).val());//判断邮箱号是否合法
		if(flag4){
			e.stopPropagation();
//			console.log('323')
			$('.label1').eq(0).text("");
		}else{
			$('.label1').eq(0).text("邮箱输入不合法");
			$('.label1').eq(0).css('color','red');
		}
	})
	//	鼠标按下密码的时候
	
	$('.pwdword').on('keyup',function(e){
		e.stopPropagation();
		flag5 = /^\w{8,24}$/.test($(this).val());//判断密码长度是否合法
//		console.log(flag5)
		if(flag5){
			console.log('232')
			$('.label1').eq(1).text("");
		}else{
			$('.label1').eq(1).text("密码不合法");
			$('.label1').eq(1).css('color','red');
		}
	})
	$('.pwdword1').on('keyup',function(e){
		e.stopPropagation();
		if($('.pwdword').val()==$('.pwdword1').val()){//判断两次输入的密码是否一致
			$('.label1').eq(2).text("");
			flag6=true;
		}else{
			$('.label1').eq(2).text("两次输入的密码不一致");
			$('.label1').eq(2).css('color','red');
			flag6=false;
		}
		
	})

	//生成随机的4位数
	function randomNum(n){ 
		 var t=''; 
		 for(var i=0;i<4;i++){ 
		 t+=Math.floor(Math.random()*10);
		 } 
		 return t; 
	} 
	//验证码
	$('.code').on('click',function(){
		$(this).text(randomNum())
	})
	$('#input').on('keyup',function(){
		if($('.code').text()==$(this).val()){
			$('.label1').eq(3).text("");
			flag7=true;
		}else{
			$('.label1').eq(3).text("验证码输入不正确");
			$('.label1').eq(3).css('color','red');
			flag7=false;
		}
	})
	
	//	邮箱号注册下验证所有的输入如果都合法了就表示注册成功
	$('.mailbtn').on('click',function(){
		
		if($('.check2').is(':checked')){//判断是否勾选了用户协议
//			console.log('fadfs');
			if( flag4 && flag5 && flag6 && flag7){
				
//				连接数据库,把邮箱密码保存到数据库中去
//				点击获取值
				$.ajax({
					url:"http://127.0.0.1/hanyidushe/php/register1.php",
					type:'post',
					data:{
//						$tell:$('.iphone').val(),
//						$tellpwd:$('.pwd').val(),
						mail:$('.mail1').val(),
						mailpwd:$('.pwdword').val()
					},
					success:function(res){
						console.log(res);
//						console.log();
					}
				})
				
//					var obj = {
//	                    user : input[0].value,//账号
//	                    upwd : input[1].value,//密码
//	                    mailbox : input[5].value,//邮箱
//	                }
//	                saveList.push(obj);
//	                setCookie("reg", JSON.stringify(saveList), 10);
//	                saveList = JSON.parse(getCookie("reg"));
//	                window.location.href='login.html';
				var con=confirm('注册成功,是否跳转登录界面');
				if(con==true){
					window.location.href="login.html";
				}
			}else{
	//			window.location.href='login.html';
				alert("用户信息输入有误");
			}

		}else{
			alert('请先阅读用户协议');
		}
	})
	
	
	
})
