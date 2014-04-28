$(document).ready(function() {
	var feature = $('.features-item-link');
	feature.on('mouseover', function() {
		var $this = $(this),
			hexagon = $this.find('.hex-after'),
			hegondAfter = $this.find('.hex-after-after'),
			hexagondWrap = $this.find('.hex-wrap-after'),
			hexagondWrapAfter = $this.find('.hex-wrap-after-after');
		hexagon.css({
			width: 150,
			height: 86,
			opacity: 1
		});
		hegondAfter.css({
			width: 160,
			height: 92,
			opacity: 0.5
		});
		hexagondWrap.css({
			top: -3
		});
		hexagondWrapAfter.css({
			top: -6
		});
	}).on('mouseleave', function() {
		var $this = $(this),
			hexagon = $this.find('.hex-after'),
			hegondAfter = $this.find('.hex-after-after'),
			hexagondWrap = $this.find('.hex-wrap-after'),
			hexagondWrapAfter = $this.find('.hex-wrap-after-after');
		hexagon.css({
			width: 140,
			height: 80,
			opacity: 0
		});
		hegondAfter.css({
			width: 140,
			height: 80,
			opacity: 0
		});
		hexagondWrap.css({
			top: 0
		});
		hexagondWrapAfter.css({
			top: 0
		});
	});
});