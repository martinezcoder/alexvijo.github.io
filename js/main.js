	/* NAVIGATION */
	$('#nav-open').click(function() {
		var nm = '#navigation';
			if ($(nm).hasClass('nav-open')) {

				$(nm).animate({height: 0}, 300);
				
				$(this).removeClass('nav-open-toggle');

				setTimeout(function() { 
					$(nm).removeClass('nav-open').attr('style',''); 
				},310);

				$('.wrapper').removeClass('nav-open-wrapper');
			}
			else {
				expandDown(nm,'nav-open',300);
				$(this).addClass('nav-open-toggle');
				$('.wrapper').addClass('nav-open-wrapper');
			}
	});
	// EXPAND DOWN
	function expandDown(id, open_class, time) {
		var	c = $(id).height(), a = $(id).css('height', 'auto').height();
		$(id).height(c).animate({height: a}, time);
		setTimeout(function() {
			$(id).addClass(open_class).removeAttr('style');
		},time+20);
	}