$(function(){
	//获取浏览器可视窗口的宽和高
	(function(){
		//有坑，不能用document.body.clientWidth  document.body.clientHeight 
		var  innerHeight1 = document.documentElement.clientHeight;
		var innerWidth1 = document.documentElement.clientWidth;
		//让轮播图大小适应不同的浏览器第一屏
		$(".header").css({"height":innerHeight1,"width":innerWidth1});
		$(".banner").css({"height":innerHeight1,"width":innerWidth1});
		$(".lastimg").css("height",innerHeight1);
	})();
	//首页轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    
	    // 分页器
	    pagination: '.swiper-pagination',
	    //分页器是否可以点击
	    paginationClickable :true,
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
		
		//滑动间隔时间
	    autoplay : 3000,
	    //滑动一张的时间
		speed:500
    });
    //导航栏下划线移动
    	//鼠标放上去下划线跑动
    $(".nav-ul li").on("mouseover",function(){
    	$(".underline").stop().animate({
    		"margin-left":$(this).index()*132
    	},300);   	
    });
    	//如果不点击，鼠标离开下划线回到第一个初始位置
     $(".nav-ul li").on("mouseout",function(){
    	$(".underline").stop().animate({
    		"margin-left":0
    	},600);   	
    })
  
});
