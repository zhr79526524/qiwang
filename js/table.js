$(function(){
	
	
	$("#table_1 .title ul li").mousemove(function(){
		
		c = $(this).index();

		$("#table_1 .title ul li").eq(c).addClass('hover').siblings().removeClass('hover');
		
		$("#table_1 .box ul").eq(c).css({'display':'block'}).siblings().css({'display':'none'});
		
	})
	
	$("#table_2 .title ul li").mousemove(function(){
		
		b = $(this).index();
		
		$("#table_2 .title ul li").eq(b).addClass('hover').siblings().removeClass('hover');
		
		$("#table_2 .box ul").eq(b).css({'display':'block'}).siblings().css({'display':'none'});
		
	})
	
	$("#table_3 .title ul li").mousemove(function(){
		
		q = $(this).index();
		
		$("#table_3 .title ul li").eq(q).addClass('hover').siblings().removeClass('hover');
		
		$("#table_3 .box ul").eq(q).css({'display':'block'}).siblings().css({'display':'none'});
		
	})
	
})
