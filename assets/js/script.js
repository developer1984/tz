$(document).ready(function () {
	var mobileMenuToggle = function () {
		if (!$('#menu').is(':visible')) {
			$('#menu').slicknav();
			$('.slicknav_menu').show();
		} else {
			$('.slicknav_menu').hide();
		};
	};
	mobileMenuToggle();
	$(window).resize(mobileMenuToggle)
	});