/*global $, window*/
$.fn.toggleClassWidget = function () {
	'use strict';
	var element = this;
	element.filter('[data-mm-key]').each(function () {
		var button = $(this);
		$(window).keydown(button.data('mm-key'), function (evt) {
			button.click();
			evt.preventDefault();
		});
	});
	element.click(function () {
		var target = $($(this).data('mm-target')),
			targetClass = $(this).data('mm-class');
		if (target.hasClass(targetClass)) {
			target.removeClass(targetClass);
		} else {
			target.addClass(targetClass);
		}
	});
	return element;
};
