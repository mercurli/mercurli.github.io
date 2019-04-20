/**
	index.js
	@author mer
	@date 19/4/19
*/
(function($){
	$(document).ready(function(){
		$('.main').css({
			'min-height': $(window).outerHeight() - $('.header').height() - $('.footer').outerHeight()
		});
	})
})(jQuery)