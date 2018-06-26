//var $dylay = jQuery('#dylay');
//
//// init
//$dylay.dylay({
//// speed of animation
//	speed: 1500,
//// make your animation yummy
//	easing: 'easeOutElastic',
//// selector to define elements
//	selector: '>li'
//});

// controls
jQuery('#filters a').on('click', function () {
	$dylay.dylay('filter', jQuery(this).data('filter'));	
	return false;
})

jQuery('#sorts a').on('click', function () {
	$dylay.dylay('sort', jQuery(this).data('sort-by'), jQuery(this).data('sort-way'));	
	return false;
})

var $header = $(".navbar-default");
var $logo = $("h1.navbar-brand-to-scroll > a");
var $bg =  $(".navbar-nav>li>a");
$(window).scroll(function () {
    var e = $(this).scrollTop();
    if (e > 120) {
        $header.css("background", "#fff").css("color","#141519");
        $logo.addClass('navbar-brand-scroll');
        $bg.css("color", "#141519");
    } else {
        $header.css("background", "transparent").css("color", "#141519");
        $logo.removeClass('navbar-brand-scroll');
        $bg.css("color", "#141519");
    }
});