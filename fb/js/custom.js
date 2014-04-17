$(document).ready(function() {
	function masonry() {
		var ul = $('.content-list'),
			widthScreen = $(window).width(),
			n = 0,
			items = ul.find('li'),
			liWidth = $(items[0]).outerWidth()+n,
			liHeight = $(items[0]).outerHeight()+n,
			total = 4;
		items.css({
			position: 'absolute'
		});
		var row = Math.floor(items.length/total);
		for (var m = 0; m <= row; m++) {
			for (var i = 0, k = 0; i < total; i++ ) {
				var h = liHeight*k;
				if((m+1)*total > total) {
					h = $(items[i+ m*total-total]).outerHeight() + $(items[i+ m*total-total]).offset().top - ul.offset().top;
				}
				

				$(items[i+ m*total]).css({
					left: liWidth*i,
					top: h
				});	
			}
				
		}
		
	};
	
	setTimeout(function() {
		var ul = $('.content-list'),
			widthScreen = $(window).width(),
			n = 0,
			items = ul.find('li'),
			liWidth = $(items[0]).outerWidth()+n,
			liHeight = $(items[0]).outerHeight()+n,
			total = 4;
		items.css({
			position: 'absolute'
		});
		var row = Math.floor(items.length/total);
		for (var m = 0; m <= row; m++) {
			for (var i = 0, k = 0; i < total; i++ ) {
				var h = liHeight*k;
				if((m+1)*total > total) {
					h = $(items[i+ m*total-total]).outerHeight() + $(items[i+ m*total-total]).offset().top - ul.offset().top;
				}
				

				$(items[i+ m*total]).css({
					left: liWidth*i,
					top: h
				});	
			}
				
		}
	}, 200);

	$(window).resize(function() {
		masonry();
	});
});