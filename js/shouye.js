$(function(){
	
	$("#nav_center ul li").mousemove(function(){
		
		c =$(this).index();
		
		$("#nav_center ul li").eq(c).addClass("yang").siblings().removeClass("yang");

////		$("#nav_center ul li").eq(1);
//		$("#nav_center .ul_li1").css({'display':'block'});
		
	})
	
	$("#nav_center ul li").mouseout(function(){
		
		$("#nav_center ul li").eq(c).removeClass("yang");
		
		$("#nav_center ul li").eq(0).addClass("yang");
		
//		$("#nav_center .ul_li1").css({'display':'none'});
	
	})
	
	$("#nav_center ul li").eq(1).mousemove(function(){
		
//		c =$(this).index();
		
//		$("#nav_center ul li").eq(c).addClass("yang").siblings().removeClass("yang");

//		$("#nav_center ul li").eq(1);
		$("#nav_center .ul_li1").css({'display':'block'});
		
	})
	
	$("#nav_center ul li").eq(1).mouseout(function(){
		
//		$("#nav_center ul li").eq(c).removeClass("yang");
		
//		$("#nav_center ul li").eq(0).addClass("yang");
		
		$("#nav_center .ul_li1").css({'display':'none'});
		
		
	})
	
})
