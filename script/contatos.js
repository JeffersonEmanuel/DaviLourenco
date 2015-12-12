$(window).load(function() {

	$('.close').click(function() {

		var panel = $('.infopanel', $(this).parent().parent().parent());

		if ($(panel).is(":visible")) {

			$('.info', $(this).parent()).click();
		}

		$(this).parent().parent().parent().toggleClass('hover');
	});

	$('.yes').click(function() {
		$(this).parent().fadeOut(function() {
			$(this).parent().parent().slideUp();
		});
	});

	$('.no').click(function() {
		$(this).parent().parent().parent().toggleClass('hover');
	});

	$('.info').click(function() {

		var panel = $('.infopanel', $(this).parent().parent().parent());

		if ($(panel).is(":visible")) {

			$(panel).fadeOut(function() {
				$(this).parent().slideUp();
			});

		} else {

			$(panel).parent().slideDown(function() {
				$(panel).fadeIn();
			});
		}
	});

	setTimeout(function() {

		$('.card').each(function(i) {

			$(this).css({
				opacity : 0,
				left : '-50px'
			});

			var _this = this;

			setTimeout(function() {
				$(_this).animate({
					opacity : 1,
					left : 0
				});
			}, i * 300);
		});

	}, 500);

});

document.getElementById('close').onmousedown = function(e) {
	e.preventDefault();
	document.getElementById('info').style.display = 'none';
	return false;
}; 