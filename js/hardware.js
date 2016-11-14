$(function(){
	//全局变量，保存点击的那个p
	var n = 0;
	
	//下划线跟着鼠标跑
	$(".content-top2>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*100
		});							
	});
	$(".content-top3>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*100
		});							
	});
	$(".content-top4>p").on("mouseover",function(){
		$(".content-span").stop().animate({
			"left":$(this).index()*100
		});							
	});
	
	//鼠标离开复原
	$(".content-top2>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*100
    		});
	});
	$(".content-top3>p").on("mouseout",function(){
	    	$(".content-span").stop().animate({
	    		"left":n*100
    		});
	});$(".content-top4>p").on("mouseout",function(){
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
	    		"left":n*100
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
		$(".content-span").css({"left":n*100});
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
			$(".content-span").css({"left":n*100});
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
			$(".content-span").css({"left":n*100});
			//变颜色
			$(".content-top4>p").css({"color":"#333333"});
			$(".content-top4>p").eq(n).css({"color":"#19b1e8"});
		});
	
	
	 //地图API封装函数
    function showMap(long,lat){
    	var map = new BMap.Map("myMap");
    	var point = new BMap.Point(long, lat);
    	map.centerAndZoom(point, 17);
    	map.enableScrollWheelZoom();
    	map.addControl(new BMap.NavigationControl());    
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());    
		map.addControl(new BMap.MapTypeControl()); 
		map.setCurrentCity("北京");
		var marker = new BMap.Marker(point);        // 创建标注    
		map.addOverlay(marker);	
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//		
//		var opts = {    
//				 width : 250,     // 信息窗口宽度    
//				 height: 100,     // 信息窗口高度    
//				 title : "Hello" // 信息窗口标题  
//				
//			}    
//			var infoWindow = new BMap.InfoWindow("World", opts,"red");// 创建信息窗口对象
//			map.openInfoWindow(infoWindow, map.getCenter()); 
//			// 打开信息窗口
			    	
	}
    
    
    //点击按钮，地图显示
    $(".clickmap1").click(function(){
    	$(".coverWrap").show();
    	showMap(106.651187,26.624632)
    	$("body").css("overflow","hidden");
    	
    });
    
    $(".clickmap2").click(function(){
    	$(".coverWrap").show();
    	$("body").css("overflow","hidden");
    	showMap(116.317672,40.0432)
    	
    });
    
    //点击关闭，地图隐藏
    $(".closeCover").click(function(){
    	$(".coverWrap").hide();
    	$("body").css("overflow","auto");
    });
	
});
