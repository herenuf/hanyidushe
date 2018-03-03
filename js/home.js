

$(function(){
	//鼠标移入网站导航显示导航列表
//	$('.site-map').mouseleave(function(){
//		console.log('42432');
//		$(".hide-site").hide();
//	})
	$(".site-map").on("mouseenter",function(){
//		console.log('42')
		$(".hide-site").show();
	})
	//移除的时候隐藏
	$(".hide-site").mouseleave(function(){
//		$(".hide-site").css("display","none");
		$(".hide-site").hide();
	})

//	移入轮播图的左列表3级联动
//	....------------------------.---------------------------------------------------..........
	$('.slideshow-content-top-left').on('mouseleave',function(){
			$(".slideshow-left-hide").hide();
	})
	$(".slideshow-left").on("mouseenter","li",function(){
//		console.log($(this).index())//下标
		$(".slideshow-left-hide").show();
		$(this).css("background","#333333").siblings().css("background","#e3e3e3");
		$(this).find('a').css("color","#fff");
		$(this).find('span').css("color","#fff");
		$(this).find('.red').css("color","red");
		$(this).find(".slideshow-leftmove").animate({"left":"20px"},300);
//		移动获取当前li的下标,然后然隐藏区域一一对应显示
		var leftIndex=$(this).index();
//		console.log(leftIndex);
//		console.log($(".slideshow-left-hide").find("ul").eq(leftIndex));
//		让隐藏的右侧列表显示
		$(".slideshow-left-hide").find("ul").eq(leftIndex).fadeIn(500).show().siblings().fadeOut(500).hide();
//		$(".slideshow-left-hide ul").index(leftIndex).css("display","block");
		$(".slideshow-left-hide").find("ul").eq(leftIndex).on('mouseleave',function(){//右边隐藏
			$(this).hide();
		})
//	....-----------------------------------------------------------------		
		$(this).parent().find(".slideshow-left").on('mouseleave',function(){
			console.log($(this).index());
			$(".slideshow-left-hide").find("ul").eq(leftIndex).hide();
			
		})
	})
	
	$(".slideshow-left").on("mouseleave","li",function(){
		$(this).css("background","#e3e3e3");
		$(this).find('a').css("color","#666");
		$(this).find('span').css("color","#000");
		$(this).find('.red').css("color","red");
		//stop(true,false)防止点击动画多次
		$(this).find(".slideshow-leftmove").stop(true,false).animate({"left":"10px"},300);
//		$(".slideshow-left-hide").hide();
	})
	
	
//	....-----------------------------------------------------------------...........
	
	
//	互联网品牌生态运营集团
	$(".network-one-list").find("img").on("mouseenter",function(){
		$(this).parent().children().eq(1).stop(true,false).fadeIn(100).show();
//		console.log($(this).parent().children().eq(1).show())
	})
	$(".network-one-list").find("img").on("mouseleave",function(){
		$(this).hide().parent().children().eq(0).stop(true,false).fadeIn(100).show(500);
//		console.log($(this).parent().children().eq(0).show())
	})
	
//	....-----------------------------------------------------------------...........	
	
//	韩都动态tab切换

	$(".network-two-list").on("mouseenter","li",function(){
		$(this).addClass('acitve-red').siblings().removeClass("acitve-red")
		console.log($(this).index());
		var tabIndex=$(this).index();
		$(".network-two-foot li").eq(tabIndex).show().siblings().hide();
//		console.log($(this).addClass('.acitve-red').siblings().removeClass(".acitve-red"));
	})
	
//	....-----------------------------------------------------------------...........	
	
//	热销排行榜手风琴
	$(".groupTitle").on("mouseenter",function () {
		$(this).hide().parent("li").siblings().children('span').show();
//		$(this).css("display","none").siblings().css("display","block");
        $(this).next("div").css("display","block");
        $(this).parent("li").siblings().children("div").css("display","none");
	})
	
//	....-----------------------------------------------------------------...........
})
//	顶部悬浮
$(function(){
   $(document).ready(function() {
        $(window).scroll(function(e){
            var juantop=$(document).scrollTop();
//          console.log(juantop);
//          console.log($(this).scrollTop())
            if($(this).scrollTop()>600){
            	$(".top-float").stop(true,false).fadeIn(100).show()
            }else{
            	$(".top-float").hide()
            }
        });
    });
})
//	....-----------------------------------------------------------------...........

//轮播图二

$(function(){
	
//	var ool = document.getElementById('ol')//下边 ol
//	
//  var olis = ool.children;//下边的li
    var olis=$(".new-arrival-right span");

//  var Oul = document.getElementById('ul')//上面ul
//  var oShowli = Oul.children;//上面的li
	var oShowli=$(".swiper-wrapper2 .swiper-slide");
	
    var imgIndex = -1;

    var timer = 0;
    move();//页面加载的时候,就默认自动轮播

    function move(){
        timer = setInterval(function(){
            imgIndex++;

            //图片值有5张索引最多到4
            if(imgIndex > 4){
                imgIndex = 0;
            }

            //所有的都模糊掉
            for(var i = 0; i < olis.length; i++){
                animate(olis[i], {"opacity" : 0.3})
                animate(oShowli[i], {"opacity" : 0},function(){
                	 for(var i = 0; i < olis.length; i++){
                	 	oShowli[i].style.position="absolute"; 
             		 	oShowli[i].style.zIndex=1;  
             		 
            		}
                	 oShowli[imgIndex].style.zIndex=3
                });//隐藏	
            }
 
            animate(olis[imgIndex], {"opacity" : 1});
            animate(oShowli[imgIndex], {"opacity" : 1})

        }, 3000)
		
    }

    //让所有  下边的li标签有一个鼠标移入 移出事件

    for(var i = 0; i < olis.length; i++){

        olis[i].index = i;
        //鼠标移入
        olis[i].onmouseover = function(){
            clearInterval(timer);//清除自动轮播的定时器

            //鼠标放在哪一张小图上,就应该显示哪一张图
            imgIndex = this.index;

            //在要做一次排他
            for(var j = 0; j < olis.length; j++){
                animate(olis[j], {"opacity" : 0.3});
                //上面的图片都隐藏
                animate(oShowli[j], {"opacity" : 0});
            }
            animate(olis[this.index], {"opacity" : 1});
            animate(oShowli[this.index], {"opacity" : 1});

        }
        // 移出事件
        olis[i].onmouseout = function(){
            move();
        }

    }
})


//	....-----------------------------------------------------------------...........
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
