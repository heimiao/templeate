$(function(){
	$(".js_leftArrow").click(function(){
		if($(this).parent().position().left==0){
			$(this).parent().animate({left:"-258px"}, "fast");
			$(this).parent().next().animate({"marginLeft":"0px"}, "fast");
			$(this).addClass("open");
		}else{
			$(this).parent().animate({left:"0px"}, "fast");
			$(this).parent().next().animate({"marginLeft":"258px"}, "fast");
			$(this).removeClass("open");
		} 
	});  
	$(".dt_center").height($(window).height()-60);
	$(window).resize(function(){
		$(".dt_center").height($(window).height()-60);
	})
})
