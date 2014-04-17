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


	var socialList = $('.social-list'),
		socialItems = socialList.find('li'),
		speed = 200;
	socialItems.on('mouseover', function() {
		var $this = $(this),
			socialPassive = $this.find('.social-passive'),
			socialActive = $this.find('.social-active');
		socialPassive.stop().animate({
			top: -40
		});
		socialActive.stop().animate({
			top: 0
		}, speed);
	}).on('mouseleave', function() {
		var $this = $(this),
			socialPassive = $this.find('.social-passive'),
			socialActive = $this.find('.social-active');
		socialPassive.stop().animate({
			top: 0
		}, speed);
		socialActive.stop().animate({
			top: 40
		});
	});

	var navList = $('.header-menu'),
		navLink = navList.find('a');
	navLink.on('mouseover', function() {
		var $this = $(this),
			currentBg = $this.siblings('.link-bg');
		currentBg.stop().animate({
			width: '100%'
		}, 300);
	}).on('mouseleave', function() {
		var $this = $(this),
			currentBg = $this.siblings('.link-bg');
		currentBg.stop().animate({
			width: 0
		}, 300);
	})


});