$(function(){
	//定义一个总变量
	var c = 0;
	//鼠标触碰
	
		//mouseover => mouseenter 移入事件
		//mouseout => mouseleave 移出事件
	$("#banner_yuan ul li").mouseenter(function(){
			
		c = $(this).index();
		
		var left = c * -930;
			//图片自动轮播
		$("#banner_img").stop().animate({'left':left+'px'},300);
//		小圆点更改颜色
		$("#banner_yuan ul li").eq(c).addClass("yuan_one").siblings().removeClass("yuan_one");
		
		clearInterval(time);			
		
	})
	//鼠标离开效果
	$("#banner_yuan ul li").mouseleave(function(){
		
		time = setInterval(run,2500);
		
	})
	
	
//	定时器开始
	function run(){
	//自动轮播 ++
		c++;
//		超过当前图片自动回为第一张

		//无缝滚动  判断
		if( c == 7){
			$("#banner_img").stop().css({'left':'0px'});
			c = 1;
		}else if(c == 6){
			$("#banner_yuan ul li").eq(0).addClass("yuan_one").siblings().removeClass("yuan_one");
		}
		
		var q = c*-930;
		//图片自动轮播
		$("#banner_img").stop().animate({'left':q+'px'},300);
//		小圆点更改颜色
		$("#banner_yuan ul li").eq(c).addClass("yuan_one").siblings().removeClass("yuan_one");
	}
	
	time = setInterval(run,2500);
	
})
