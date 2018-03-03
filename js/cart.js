
$(function(){
	//鼠标移入网站导航显示导航列表
	$(".site-map").on("mouseenter",function(){
//		console.log('42')
		$(".hide-site").show();
	})
	//移除的时候隐藏
	$(".hide-site").mouseleave(function(){
//		$(".hide-site").css("display","none");
		$(".hide-site").hide();
	})
})



//侧边栏
$(function(){

//		$(document).ready(function() {
    $(window).scroll(function(e){
//      var jua=$(document).scrollTop();
        if($(this).scrollTop()>700){
        	$(".right1-fixed").stop(true,false).fadeIn(100).show();
        	$(".right1-fixed").find('.one-d').on('click',function(){
//      		console.log('4243')
        		$("html,body").stop(true,false).animate({scrollTop:0}, 500);
        	})
        }else{
        	$(".right1-fixed").hide()
        }
    });

})


//购物车
$(function(){
//	减
//'￥'+$('.price1').text()*$('.num').val()
//	console.log($(this));
//	var p=$('.subtotal').text($('.shopping').children().find('.price1').text());
//	console.log(p)

//	var num;
	$('.minus').bind('click',function(){
//		console.log($(this).parent().next());
		var num=$(this).parent().find('.num').val();
//		console.log(num);
		//获取到当前单个商品的价格
//		console.log(parseInt(pri))
//		console.log(num)
//		判断输入的是否为数字
		if(!isNaN(num)){
			if(num>1){
				num--;
				$(this).parent().find('.num').val(num);//把获取到的值赋给输入框
//				当鼠标松开的时候,就得计算出金额并赋值
//				console.log(num);
				var pri=$(this).parent().parent().prev().find('.price1').text();//获取到当前单个商品的价格
//				console.log(pri)
//				$('.piece').text($(this).parents().find('.num').val(num));//总共有几件商品
				var a=$(this).parents().siblings().find('.num').val();//其他的num
//				console.log(a);
				$('.piece').text(Number(a)+Number(num));//合计的商品数目

				var price=pri*num;//数量乘以价格
//				console.log(price)
				$(this).parent().parent().next().find('.subtotal').text(price)//按减后得小计
				
				$('.amount').text()
			}
		}else{
			alert('请输入正确的购买数量');
		}
		event.stopPropagation();
		return false;
	})
//	console.log(num);
//	加
	$('.plus').bind('click',function(){
//		console.log('432')
//		console.log($(this).parent().find('.num').val());
		var num=$(this).parent().find('.num').val();
//		console.log(num)
//		var pri=$(this).parents().find('.price1').eq(0).text();//获取到当前单个商品的价格
		
//		console.log(pri);
		if(!isNaN(num)){
			num++;
//			console.log(num);
//			$('.piece').text($(this).parents().find('.num').val(num));
			$(this).parent().find('.num').val(num);//把获取到的值赋给输入框
//			console.log(num);//正确获取到num值
			var pri=$(this).parent().parent().prev().find('.price1').text();//获取到当前单个商品的价格
//			console.log(pri);
//			console.log(num)
			//总共有几件商品
//			console.log(num);
			var price=pri*num;//数量乘以价格
//			console.log(price)
			var a=$(this).parents().siblings().find('.num').val();//其他的num
//			console.log(Number(a));
//			console.log(Number(num))
			$('.piece').text(Number(a)+Number(num));//合计的商品数目
			
			$(this).parent().parent().next().find('.subtotal').text(price);//按加后的小计
			var x=$(this).parent().parent().next().find('.subtotal').text();//当前的小计
//			console.log(Number(x));
//			console.log($(this).parents().find('.subtotal').text());
			var d=$(this).parents().siblings().find('.subtotal').text();
//				console.log(d)
			for(var i=0;i<d.length;i++){
				console.log(d);
			}
			if(num>50){
				alert('对不起，库存不足，请重新输入');
			}
		}else{
			alert('请输入正确的购买数量');
		}
		event.stopPropagation();
		return false;
	})
//	当在输入框输入数字的时候,就得计算价格数量
//	$(document).on('click',function(){
////		console.log($('.piece').text())
//		if($('.num').val()!=null){
////			console.log('4234')
////			console.log($('.num').val());
//			var num=$('.num').val();//数量
//			console.log(num);
//			$('.subtotal').text('￥'+$('.num').val()*$('.price1').text());//小计
//			$('.piece').text(num);
//		}
//	})
	
})













