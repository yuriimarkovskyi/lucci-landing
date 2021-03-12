$(document).ready(function(){
	$('.shop-products-slider-big').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		asNavFor: '.shop-products-slider-small'
	});
	$('.shop-products-slider-small').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.shop-products-slider-big',
		vertical: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 976,
			settings: {
				vertical: false
			}
		}
		]
	});
	$('.reviews-slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	$('.shop-color-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false
	});
});