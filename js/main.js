(function($)
{"use strict"
	$(window).on('load',function(){
		$('#preloader-active').delay(450).fadeOut('slow');
		$('body').delay(450).css({'overflow':'visible'});
	});
	$(window).on('scroll',function(){
		var scroll=$(window).scrollTop();
		if(scroll<400){
			$(".header-sticky").removeClass("sticky-bar");
			$('#back-top').fadeOut(500);
		}else{
			$(".header-sticky").addClass("sticky-bar");
			$('#back-top').fadeIn(500);
		}
	});
	$('#back-top a').on("click",function(){
		$('body,html').animate({scrollTop:0},800);
		return false;
	});
	var menu=$('ul#navigation');
	if(menu.length){
		menu.slicknav({
			prependTo:".mobile_menu",
			closedSymbol:'+',
			openedSymbol:'-'
		});
	};


	var testimonial=$('.h1-testimonial-active');
	if(testimonial.length){
		testimonial.slick({
			dots:false,
			infinite:true,
			speed:1000,
			autoplay:false,
			arrows:true,
			prevArrow:'<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
			nextArrow:'<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
			slidesToShow:1,
			slidesToScroll:1,
			responsive:[{
				breakpoint:1024,
				settings:{slidesToShow:1,slidesToScroll:1,infinite:true,dots:false,arrow:false}
				},{
					breakpoint:600,
					settings:{slidesToShow:1,slidesToScroll:1,arrows:false}
				},{
					breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,}
				}]
			});
	}
	var nice_Select=$('select');
	if(nice_Select.length){
		nice_Select.niceSelect();
	}
	$("[data-background]").each(function(){
		$(this).css("background-image","url("+$(this).attr("data-background")+")")
	});
	
	var popUp=$('.single_gallery_part, .img-pop-up');
	if(popUp.length){
		popUp.magnificPopup({type:'image',gallery:{enabled:true}});
	}}
)(jQuery);
