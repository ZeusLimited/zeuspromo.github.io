$(document).ready(function () {
	var slides = $('.slide');
	$('.zeus-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 0,
		adaptiveHeight: true,
		draggable: false,
		prevArrow: $('.zeus-slider-buttons .slick-prev'),
		nextArrow: $('.zeus-slider-buttons .slick-next')
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.slide').find('.text-wrap').removeClass('fadeIn');
		$('.slide').find('.img-wrap').removeClass('slideInRight');

		if(currentSlide < nextSlide){
			$('.slick-active').next().find('.text-wrap').addClass('fadeIn');
			$('.slick-active').next().find('.img-wrap').addClass('slideInRight');
		 }
		else {
			$('.slick-active').prev().find('.text-wrap').addClass('fadeIn');
			$('.slick-active').prev().find('.img-wrap').addClass('slideInRight');
		 }
		if(nextSlide > 3){
			$('.zeus-slider-buttons').hide();
		}
	});
});
