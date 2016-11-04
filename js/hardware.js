$(function(){
	//全局变量，保存点击的那个p
	var n = 0;
	
	//下划线跟着鼠标跑
	$(".content-top>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*100
		});							
	});
	
	//鼠标离开复原
	$(".content-top>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*100
    		});
	});
	
	//开始2.3页面隐藏
	$(".content-main1").eq(1).hide();
	$(".content-main1").eq(2).hide();
	
	//tab一级切换
	$(".content-top1>p").click(function(){
		
		$(".content-main1").hide();
		$(".content-main1").eq($(this).index()).show();
		//点击完成变色
		$(".content-top1>p").css({
			'background': 'white',
			'border': '1px solid #666666',
			'color': '#666666'
		})
		$(this).css({
			'background': '#19B1E8',
			'border': 'none',
			'color': 'white'
		});
	})
	
	

	
	//tab二级切换
	$(".content-top>p").click(function(){
		n = $(this).index();
		$(".content-main2>div").hide();
		$(".content-main3>div").hide();
		$(".content-main4>div").hide();
		$(".content-main2>div").eq($(this).index()).show();
		$(".content-main3>div").eq($(this).index()).show();
		$(".content-main4>div").eq($(this).index()).show();
		//下划线变换
		$(".content-span").css({"left":n*100});
		//变颜色
		$(".content-top>p").css({"color":"#333333"});
		$(".content-top>p").eq(n).css({"color":"#19b1e8"});
	})
	
	
	
	
});
