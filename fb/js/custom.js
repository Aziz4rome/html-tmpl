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

	function masonryBlog() {
			var ul = $('.content-list-blog'),
				widthScreen = $('.b-content').width(),
				n = 20,
				items = ul.find('li'),
				liWidth = $(items[0]).outerWidth()+n,
				itemBlogWidth = $(items[0]).outerWidth(),
				liHeight = $(items[0]).outerHeight()+n,
				total = Math.floor(widthScreen/liWidth),
				ulWidth = total*liWidth,
				ulleft = widthScreen/2 - ulWidth/2;
				console.log(liWidth, total, items.length, widthScreen);
			ul.css({
				position: 'absolute',
				left: ulleft + 10,
				width: liWidth
			});
			items.css({
				position: 'absolute',
				width: itemBlogWidth
			});
			var row = Math.floor(items.length/total);
			for (var m = 0; m <= row; m++) {
				for (var i = 0, k = 0; i < total; i++ ) {
					var h = liHeight*k;
					if((m+1)*total > total) {
						h = $(items[i+ m*total-total]).outerHeight() + $(items[i+ m*total-total]).offset().top + 20 - ul.offset().top - $(items[0]).offset().top;
					}
					

					$(items[i+ m*total]).css({
						left: liWidth*i,
						top: h + 40
					});	
				}
					
			}
		}
	
	setTimeout(function() {
		(function masonryGallery() {
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
		})();
		(function masonryBlog() {
			var ul = $('.content-list-blog'),
				widthScreen = $('.b-content').width(),
				n = 20,
				items = ul.find('li'),
				liWidth = $(items[0]).outerWidth()+n,
				itemBlogWidth = $(items[0]).outerWidth(),
				liHeight = $(items[0]).outerHeight()+n,
				total = Math.floor(widthScreen/liWidth),
				ulWidth = total*liWidth,
				ulleft = widthScreen/2 - ulWidth/2;
				console.log(liWidth, total, items.length, widthScreen);
			ul.css({
				position: 'absolute',
				left: ulleft + 10,
				width: liWidth
			});
			items.css({
				position: 'absolute',
				width: itemBlogWidth
			});
			var row = Math.floor(items.length/total);
			for (var m = 0; m <= row; m++) {
				for (var i = 0, k = 0; i < total; i++ ) {
					var h = liHeight*k;
					if((m+1)*total > total) {
						h = $(items[i+ m*total-total]).outerHeight() + $(items[i+ m*total-total]).offset().top + 20 - ul.offset().top - $(items[0]).offset().top;
					}
					

					$(items[i+ m*total]).css({
						left: liWidth*i,
						top: h + 40
					});	
				}
					
			}
		})();
	}, 200);

	$(window).resize(function() {
		masonry();
		masonryBlog();
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
		
		var $this = $(this),
			height = $this.height(),
			width = $this.width(),
			top = $this.offset().top + $('.b-content').scrollTop(),
			left = $this.offset().left - contentList.offset().left,
			currentLink = $this.find('.link'),
			href = $this.find('.link').attr('href'),
			src = $this.find('.image').attr('src'),
			rel = $this.find('.link').attr('rel'),
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
			zIndex: 1,
			transform: 'rotate(0deg)'
		});

		imageLink.animate({
			left: iconLeft - 30,
			top: iconTop
		}, speed).attr('href', href);

		imageZoom.animate({
			left: iconLeft + 30,
			top: iconTop
		}, speed).attr('href', src);

		contentList.on('mouseleave', function() {
			bg.css({
			width: width + 1000,
			height: height + 1000,
			top: top - 500,
			left: left - 500,
			opacity: 0,
			zIndex: 0,
			transform: 'rotate(-90deg)'
		});

		});

		imageZoom.on('click', function(e) {
			currentLink.click();
			e.preventDefault();
		});

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
	

	var contentFilter = $('.content-filter'),
		filterLi = contentFilter.find('li'),
		contentFilterWidth = contentFilter.width();
	contentFilter.css({
		width: 60
	});
	filterLi.css({
		display: 'none',
		opacity: 0
	});

	$('.filter-menu-icon').on('click', function() {
		var $this = $(this),
			filterItems = filterList.find('li');
		if($this.hasClass('filterMenuOpened')) {
			filterItems.stop().animate({
				opacity: 0
			})
			contentFilter.stop().animate({
				width: 0
			}, function() {
				$this.removeClass('filterMenuOpened');
				filterItems.css('display', 'none');
				contentFilter.css('background', 'transparent');				
				contentFilter.stop().animate({
					width: 70,
					width: 60
				}, speed);
			});
			return
		}
		contentFilter.stop().css('background', '#000').animate({
			width: contentFilterWidth
		}, 600, function() {
			filterItems.css('display', 'inline').stop().animate({
				opacity: 1
			}, 200)
		});
		$this.addClass('filterMenuOpened');

	});

	$('.link').fancybox();


});