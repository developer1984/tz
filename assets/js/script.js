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
	var setDimensions = function () {
		var vw = $(window).width();
		var x = Math.min(4, Math.floor(0.5 + 0.005*vw));
		$('.slicknav_icon-bar').css('height', x + 'px');
		var y = Math.min(5, Math.floor(3 + 0.0033*vw));
		$('.slicknav_icon-bar + .slicknav_icon-bar').css('margin-top', y + 'px');
	}
	setDimensions();
	$(window).resize(function () {
		mobileMenuToggle();
		setDimensions();
	});
});