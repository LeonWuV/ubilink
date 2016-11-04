$(function(){
	//全局变量，保存点击的那个p
	var n = 0;
	//下划线跟着鼠标跑
	$(".content-top>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*150
		});							
	});
	//鼠标离开复原
	$(".content-top>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*150
    		});
	});
	//tab切换
	$(".content-top>p").click(function(){
		n = $(this).index();
//		console.log(n)
		$(".content-main>div").hide();
		$(".content-main>div").eq($(this).index()).show();
		//下划线变换
		$(".content-span").css({"left":n*150});
		//变颜色
		$(".content-top>p").css({"color":"#333333"});
		$(".content-top>p").eq(n).css({"color":"#19b1e8"});
		
	})
	
	
	
	
});
