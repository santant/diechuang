$(function(){
	//返回顶部
	$("#toTop").on('click',function(){
		$('html , body').animate({scrollTop: 0},'slow');
	})
	//侧边栏js
	$("#ssr_help ul >li").on("mousemove",function(){
		
		$(this).find(".ssr_weixin").show()
	})
	$("#ssr_help ul >li").on("mouseout",function(){
		$(this).find(".ssr_weixin").hide()
	})
	$(".login_nav").on("mousemove",function(){
		$(this).addClass("flip")
	})
	$(".login_nav").on("mouseout",function(){
		$(this).removeClass("flip")
	})
})
