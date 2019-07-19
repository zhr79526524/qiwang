$(function(){
	
	var q = 0;

	function dong(){
	
		q++;
		
		if( q == 4){
			$(".al_bann").stop().css({'left':'0px'});
			q = 1
		}
		var lef = q * -1168;
	
		$(".al_bann").stop().animate({'left':lef+'px'},1000);
		
	}
	
	shi = setInterval(dong,3000);
	
	//鼠标移入事件
	$(".kuang").mouseenter(function(){
		
		clearInterval(shi);
//		
    })
	//鼠标移除事件
	$(".kuang").mouseleave(function(){
		
		shi = setInterval(dong,3000);
		
	})
	
//	单机事件
	$(".right").click(function(){
		
		clearInterval(shi);
		
		q++;
		
		if( q == 4){
			$(".al_bann").stop().css({'left':'0px'});
			q = 1
		}
		var lef = q * -1168;
		
		$(".al_bann").stop().animate({'left':lef+'px'},1000);
		
		shi = setInterval(dong,3000);
		
	})
	
	$(".left").click(function(){
		
		clearInterval(shi);
		
		if( q == -1 ){
			$(".al_bann").stop().css({'left':'-2336px'});
			q = 2
		}
		
		q -- ;
		
		var lef = q * -1168;
		
		$(".al_bann").stop().animate({'left':lef+'px'},1000);
		
		shi = setInterval(dong,3000);		
		
	})
	
})
