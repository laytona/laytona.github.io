// Fancybox
$(document).ready(function() {
	$(".fancybox").fancybox();
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {},
			title : {}
		}
	});
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

// hero carousel resize fix
window.onresize = function(event){
    if ($('.hero-carousel').length > 0)
    {
        var carousel = $('.hero-carousel'),
            elements = carousel.children();
            childWidth = elements.width(),
    		childHeight = elements.height(),
            carouselWidth = Math.round(childWidth * elements.length),
            carouselMarginLeft = '-'+ Math.round(childWidth + Math.round(childWidth / 2) ) +'px',
            carouselPrevMarginLeft = parseFloat(carousel.css('margin-left'));
            
        $('.hero-carousel').css({
    		'left': '50%',
    		'width': carouselWidth,
    		'height': childHeight,
    		'margin-left': carouselMarginLeft
    	});
    }
}

// Mobile Navigation
selectnav('navigation', {
	nested: true,
	indent: '-'
});


// Flexslider
$(function(){
	//SyntaxHighlighter.all();
	});
		$(window).load(function(){
		$('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
		  $('body').removeClass('loading');
		}
	});
});