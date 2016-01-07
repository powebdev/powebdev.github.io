projects.displayPortfolio();

/*
 * Open the drawer when the menu icon is clicked.
 */

var hamburger = document.querySelector('.box#hamburger');
var nav_links = document.querySelector('.link-container');

hamburger.addEventListener('click', function(e) {
	nav_links.classList.toggle('link-container-open');
	e.stopPropagation();
});	

$("div.card").mouseover(function() {
	$(this).find(".project-description").toggleClass("show");
});
$("div.card").mouseout(function() {
	$(this).find(".project-description").toggleClass("show");
});



