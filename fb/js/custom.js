$(document).ready(function() {
	function masonry() {
		var ul = $('.content-list-masonry'),
			widthScreen = $(window).width(),
			n = 0,
			items = ul.find('li:visible'),
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
		var ul = $('.content-list-masonry'),
			widthScreen = $(window).width(),
			n = 0,
			items = ul.find('li:visible'),
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
	});

	var contentList = $('.content-list'),
		contentItem = contentList.children('li');
	contentItem.on('mouseover', function() {
		console.log(contentList.scrollTop());
		var $this = $(this),
			height = $this.height(),
			width = $this.width(),
			top = $this.offset().top + $('.b-content').scrollTop(),
			left = $this.offset().left - contentList.offset().left,
			href = $this.find('.link').attr('href'),
			src = $this.find('.image').attr('src'),
			bg = $('.meta-wrap'),
			imageLink = bg.find('.image-link'),
			imageZoom = bg.find('.image-zoom'),
			iconTop = height/2 - imageLink.height()/2,
			iconLeft = width/2 - imageLink.width()/2;		

		bg.css({
			width: width,
			height: height,
			top: top,
			left: left,
			opacity: 1,
			zIndex: 1
		});

		imageLink.animate({
			left: iconLeft-40,
			top: iconTop
		}, speed).attr('href', href);

		imageZoom.animate({
			left: iconLeft+40,
			top: iconTop
		}, speed).attr('src', src);;

		contentList.on('mouseleave', function() {
			bg.css({
			width: width+1000,
			height: height+1000,
			top: top-500,
			left: left-500,
			opacity: 0,
			zIndex: 0
		});

		})
	});

	var filterList = $('.content-filter-list'),
		filterLink = filterList.find('a');
	filterLink.on('click', function(e) {
		var $this = $(this),
				filter = $this.text(),
				itemsList = $('.content-list-masonry'),
				items = itemsList.find('li');

			itemsList.animate({
				width: 0,
				height: 0,
				opacity: 0
			}, function() {
				items.each(function(index, elem) {
					if (filter === 'all') {
						$(elem).css('display', 'block').removeClass('hiddenElem');
						return
					}
					else if ($(elem).attr('name') === filter) {
						$(elem).css('display', 'block').removeClass('hiddenElem');
					} else {
						$(elem).css('display', 'none').addClass('hiddenElem');
					}
				});
				setTimeout(function() {
					itemsList.animate({						
						opacity: 1,
						width: 'auto',
						height: 'auto'
					}, masonry())
				}, 200)
			});
			e.preventDefault();
		});
	



});