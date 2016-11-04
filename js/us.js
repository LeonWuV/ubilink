$(function(){
	//获取浏览器可视窗口的宽和高
	(function(){
		//有坑，不能用document.body.clientWidth  document.body.clientHeight 
		var  innerHeight1 = document.documentElement.clientHeight;
		var innerWidth1 = document.documentElement.clientWidth;
		//让轮播图大小适应不同的浏览器第一屏
		$(".header").css({"height":innerHeight1,"width":innerWidth1});
	})();
	
	 //导航栏下划线移动
    	//鼠标放上去下划线跑动
    $(".nav-ul li").on("mouseover",function(){
    	$(".underline").stop().animate({
    		"margin-left":$(this).index()*132
    	},300);   	
    });
    	//如果不点击，鼠标离开下划线回到第初始位置
     $(".nav-ul li").on("mouseout",function(){
    	$(".underline").stop().animate({
    		"margin-left":396
    	},600);   	
    });
    
    
    
    
	
	
});
