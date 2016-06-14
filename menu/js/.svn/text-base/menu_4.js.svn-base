$(function() {
	//判断框架的上下结构
	/*_h();_w();*/
	//缩进效果
    $(".first-menu>span").click(_fm);
    $(".first-menu>ul>li>span").click(_sm);
    $(".first-menu>ul>li>ul>li>a").hover(function(){$(this).find("img").show()},function(){if($(this).attr("class")!="menuIn")$(this).find("img").hide()});
    $(".first-menu>ul>li>ul>li>a").click(_tm);
})
 
 
//左侧菜单下拉效果
function _fm()
{
	if($(this).next("ul")[0].style.display=="none"){
		$(this).next("ul").slideDown();
		$(this).removeClass("default-bg");
		$(this).addClass("show-bg"); 
		$(this).find("a").css("color","#FFF");
		var url1=$(this).find("img:eq(0)").attr("src"); 
		var url2=$(this).find("img:eq(1)").attr("src"); 
		$(this).find("img:eq(0)").attr("src",url1.replace(/black/,"blue"));
		$(this).find("img:eq(1)").attr("src",url2.replace(/right/,"right2")); 
		
	}else{
		$(this).next("ul").slideUp();
		$(this).removeClass("show-bg");
		$(this).addClass("default-bg"); 
		$(this).find("a").css("color","#819aaa");
		var url1=$(this).find("img:eq(0)").attr("src");
		var url2=$(this).find("img:eq(1)").attr("src");
		$(this).find("img:eq(0)").attr("src",url1.replace(/blue/,"black"));
		$(this).find("img:eq(1)").attr("src",url2.replace(/right2/,"right")); 
	} 
} 
function _sm()
{
	if($(this).next("ul")[0].style.display=="none"){
		$(this).next("ul").slideDown(); 
		$(this).find("a").css("color","#FFF");
		var url1=$(this).find("img:eq(0)").attr("src"); 
		var url2=$(this).find("img:eq(1)").attr("src"); 
		$(this).find("img:eq(0)").attr("src",url1.replace(/doubleArrow_grey/,"doubleArrow"));
		$(this).find("img:eq(1)").attr("src",url2.replace(/right/,"right2")); 
		
	}else{
		$(this).next("ul").slideUp(); 
		$(this).find("a").css("color","#819aaa");
		var url1=$(this).find("img:eq(0)").attr("src");
		var url2=$(this).find("img:eq(1)").attr("src");
		$(this).find("img:eq(0)").attr("src",url1.replace(/doubleArrow/,"doubleArrow_grey"));
		$(this).find("img:eq(1)").attr("src",url2.replace(/right2/,"right")); 
	} 
}  
function _tm(){
	$(".left-menu").find("a[class]").removeClass("menuIn");
	$(".left-menu").find("a[class]").addClass("menuOut");
	$(".left-menu").find("a[class]").find("img").hide();
	 $(this).removeClass("menuOut");
	 $(this).addClass("menuIn");
	 $(this).find("img").show(); 
}
