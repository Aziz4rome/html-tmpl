
$(document).ready(function() {
	var speed = 200;
	setTimeout(function() { 
		var postArrow = $('.post-arrow'),
			postImage = $('.content-list-item-image'),
			top = postImage.height() - 20;
		postArrow.animate({
			top: top,
			opacity: 1
		});
		window.footer = $('.footer'),
		window.bFooter = footer.parent('.b-footer'),
		window.bFooterBottom = footer.height();
		bFooter.animate({
			bottom: -bFooterBottom
		});
	}, speed);

	$('.footer-navigate').on('click', function() {
		if (bFooter.hasClass('opened')) {
			bFooter.animate({
				bottom: -bFooterBottom
			});
			bFooter.removeClass('opened');
			return
		}
		bFooter.animate({
			bottom: 0
		}).addClass('opened');
	});
	

});