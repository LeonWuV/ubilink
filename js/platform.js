$(function(){
	//全局变量，保存点击的那个p
	var n = 0;
	
	//下划线跟着鼠标跑
	$(".content-top2>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*140
		});							
	});
	$(".content-top3>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*140
		});							
	});
	$(".content-top4>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*140
		});							
	});
	
	//鼠标离开复原
	$(".content-top2>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*140
    		});
	});
	$(".content-top3>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*140
    		});
	});$(".content-top4>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*140
    		});
	});
	
	//开始2.3页面隐藏
	$(".content-main1").eq(1).hide();
	$(".content-main1").eq(2).hide();
	
	//tab一级切换
	$(".content-top1>p").click(function(){
		
		$(".content-main1").hide();
		$(".content-main1").eq($(this).index()).show();
		
		//hover效果
//		$(".content-top1>p").hover(function(){
//			$(this).css({
//				'background': '#19B1E8',
//				'border': 'none',
//				'color': 'white'
//			});
//		},function(){
//			$(this).css({
//				'background': 'white',
//				'border': '1px solid #666666',
//				'color': '#666666'
//			});
//		});
		
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
		
		
		//下划线回到第一个位置
		//n归0
		n = 0;
		$(".content-span").stop().animate({
	    		"left":n*140
    		});
    	//第一个默认显示，其余隐藏
		$(".content-main2>div").hide();
		$(".content-main3>div").hide();
		$(".content-main4>div").hide();
		$(".content-main2>div").eq(0).show();
		$(".content-main3>div").eq(0).show();
		$(".content-main4>div").eq(0).show();
		//第一个字体颜色变蓝色
		$(" .content-top2>p").css({"color":"#333333"});
		$(".content-top2>p").eq(0).css({"color":"#19b1e8"});
		
		$(" .content-top3>p").css({"color":"#333333"});
		$(".content-top3>p").eq(0).css({"color":"#19b1e8"});
		
		$(" .content-top4>p").css({"color":"#333333"});
		$(".content-top4>p").eq(0).css({"color":"#19b1e8"});
					
	});
	
	

	
	//tab二级切换
	$(".content-top2>p").click(function(){
		n = $(this).index();
		$(".content-main2>div").hide();
		$(".content-main3>div").hide();
		$(".content-main4>div").hide();
		$(".content-main2>div").eq($(this).index()).show();
		$(".content-main3>div").eq($(this).index()).show();
		$(".content-main4>div").eq($(this).index()).show();
		//下划线变换
		$(".content-span").css({"left":n*140});
		//变颜色
		$(".content-top2>p").css({"color":"#333333"});
		$(".content-top2>p").eq(n).css({"color":"#19b1e8"});
	});
	
	
	$(".content-top3>p").click(function(){
			n = $(this).index();
			$(".content-main2>div").hide();
			$(".content-main3>div").hide();
			$(".content-main4>div").hide();
			$(".content-main2>div").eq($(this).index()).show();
			$(".content-main3>div").eq($(this).index()).show();
			$(".content-main4>div").eq($(this).index()).show();
			//下划线变换
			$(".content-span").css({"left":n*140});
			//变颜色
			$(".content-top3>p").css({"color":"#333333"});
			$(".content-top3>p").eq(n).css({"color":"#19b1e8"});
	});
	
	
	$(".content-top4>p").click(function(){
			n = $(this).index();
			$(".content-main2>div").hide();
			$(".content-main3>div").hide();
			$(".content-main4>div").hide();
			$(".content-main2>div").eq($(this).index()).show();
			$(".content-main3>div").eq($(this).index()).show();
			$(".content-main4>div").eq($(this).index()).show();
			//下划线变换
			$(".content-span").css({"left":n*140});
			//变颜色
			$(".content-top4>p").css({"color":"#333333"});
			$(".content-top4>p").eq(n).css({"color":"#19b1e8"});
		});
	
	
	
	
});
