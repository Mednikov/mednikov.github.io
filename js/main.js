$(document).ready(function(){
   
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	$('.scroll, .nav-link, .navbar-brand, .new-button').click(function() {
    		var sectionTo = $(this).attr('href');
    		$('html, body').animate({
      			scrollTop: $(sectionTo).offset().top
    		}, 1500);
	});
   
})
