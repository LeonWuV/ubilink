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
