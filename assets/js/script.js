$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".nav-link-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
	});
	// navbar js end ---

	// --tab js start--
	$('.tab-nav-item:first-child').addClass('active');
	$('.tab-content-item').hide();
	$('.tab-content-item:first').show();

	$('.tab-nav-btn').on("mouseenter", function () {
		$('.tab-nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$('.tab-content-item').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).fadeIn();
		return false;
	});
	// --tab js end--

	// **..faq-accordion js start..**
	$('.faq-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

		// **..select-accordion js start..**
	$('.custom-select-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..select-accordion js end..**
})

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---