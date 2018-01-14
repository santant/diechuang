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
	
	
	//产品和方案js
	$("#product .nav_left dl").click(function(){
		$(this).find("dd").slideToggle()
		$(this).find("i").toggleClass("sc_180")
	})
	$("#product .nav_left dl dd").hover(function(){
		$(".dd_active").removeClass("dd_active")
		$(this).toggleClass("dd_active")
	})
})
