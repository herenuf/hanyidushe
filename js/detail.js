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
//	星星
	var num=0;
	for(var i=0;i<5;i++){
		num++;
//		console.log(num);
		html_=`<span class="start"></span>`
		$("#gray").append(html_);
	}
//	点击码数颜色
	$('.html-te').text("未选择");
	$('.size-span').on('click',function(){
		var index=$(this).index();
		$(this).css("border","1px solid #c80a28").siblings('.size-span').css('border','1px dashed #ccc');
		$(this).css('color',"#000000").siblings('.size-span').css('color','#ccc');
		$(this).children().show().parent().siblings().children().hide();
		$('.html-te').text("你选择了"+"["+$(this).text()+"码]");
//		console.log(size);
	})
//	console.log(size);
	$(".size-span1").on('click',function(){
//		console.log('432432');
		var index=$(this).index();
		$(this).css("border","1px solid #c80a28").siblings('.size-span1').css('border','1px dashed #ccc');
		$(this).css('color',"#000000").siblings('.size-span1').css('color','#ccc');
		$(this).children().show().parent().siblings().children().hide();
		$('.html-te1').text($(this).text());
	})
//	鼠标移上去显示微信二维码
	$('.wei').on('mouseenter',function(){
		$('.qrcode').stop(true,false).show();
	})
	$('.wei').on('mouseleave',function(){
		$('.qrcode').hide();
	})

//	点击加减
	$('.subtract').on('click',function(){
		var num1=$('.input-num').val();
//		console.log(num);
		if(!isNaN(num1)){
			if(num1>0){
					num1--;
					$('.input-num').val(num1);
				}
		}else{
			alert('请输入正确的购买数量')
		}
	})
	$('.plus-num').on('click',function(){
		var num1=$('.input-num').val();
//		console.log(num);
		if(!isNaN(num1)){
			num1++;
			$('.input-num').val(num1);
		}else{
			alert('请输入正确的购买数量')
		}
	})

//	点击购物车,弹出
	$('.join').on('click',function(){
		var num1=$('.input-num').val();
//		console.log(num);
		if(!isNaN(num1)){
			$('.go-buy').show();
		}else{
			alert('请输入正确的购买数量')
		}
//		如果购物车num1为0提示错误
		if(num1==0){
			alert('请输入正确的购买数量');
			$('.go-buy').hide();
		}
	})
	$('.close').on('click',function(){
			$('.go-buy').hide();
	})
	$('.continue').on('click',function(){
		$('.go-buy').hide();
	})
	
//	商品详情切换
	$('.cut-list li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
//		console.log(index)
//		console.log($(this).parent().parent().children('div'))
		$(this).parent().parent().parent().children('div').eq(index).show().siblings('div').hide();
	})

	
	
	
	
	//滚动显示导航条
	$(document).ready(function() {
        $(window).scroll(function(e){
            var juantop=$('.right-buy').height()+$('.nav-con-tittle').height()+$('.banner').height()+$('.header').height();
//          console.log(juantop);
//          console.log($(this).scrollTop())
            if($(this).scrollTop()>juantop){
//          	console.log('42343')
            	$(".cut-list").css('position','fixed');
            	$(".cut-list").css('width','1000px');
            	$(".cut-list").css('top','0');
            	$(".cut-list").find('.gobu').show()
            }else{
            	$(".cut-list").css('position','absolute');
            	$(".cut-list").css('top','0');
            	$(".cut-list").find('.gobu').hide()
            }
        });
    });
	
})

//放大镜

 $(function(){

    var _smallImg = $("#smallImg"); //小图
    var _bigImg = $("#bigImg"); //大图
    var _smallArea = $("#smallArea"); //小区域
    var _bigArea = $("#bigArea"); //大区域

    _smallArea.width((_smallImg.width() / _bigImg.width()) * _bigArea.width());
    _smallArea.height((_smallImg.height() / _bigImg.height()) * _bigArea.height());


    var scale = _bigImg.width() / _smallImg.width();

    //移入小图的时候,显示小区域
    _smallImg.on("mouseover", function(){
        _smallArea.show();
		_bigArea.show();
        $(document).on("mousemove", function(e){

//          console.log(111);
            //1.先想办法 拿到移动的值 X,Y
			//console.log(e.clientX);
			//console.log($('.box-right').position().left)
			//e.clientX - $('.box-right').position().left;
//			console.log($(".right-buy").offset().left,$(".right-buy").offset().top)
            var x = e.clientX-$(".right-buy").offset().left;
			
//			console.log(x);e.clientY - $('.box-right').position().top;
//			console.log($(".right-buy").offset().top);
            var y = e.clientY-$(".right-buy").offset().top+_smallArea.height()/2-20;
//			console.log(y)
//
            if(x < _smallArea.width() / 2){
                x = _smallArea.width() / 2
            } else if(x > _smallImg.width() - _smallArea.width() / 2){
                x = _smallImg.width() - _smallArea.width() / 2
            }

            if(y < _smallArea.height() / 2){
                y = _smallArea.height() / 2;
            } else if(y > _smallImg.height() - _smallArea.height() / 2){
                y = _smallImg.height() - _smallArea.height() / 2
            }


            _smallArea.css({
                left : x - _smallArea.width() / 2,
                top : y -_smallArea.height() / 2
            })

            _bigImg.css({
                left : -(x - _smallArea.width() / 2) * scale,
                top : -(y - _smallArea.height() / 2) * scale
            })
        })
    })
    _smallImg.on("mouseout", function(){
        _smallArea.hide();
        $(document).off("mousemove");
        _bigArea.hide()
    });

	var oli=$('.oli li img');
	for(var i=0;i<oli.length;i++){
//		console.log(i)
	}

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