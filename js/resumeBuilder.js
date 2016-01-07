/*
 * construct the page by calling each object's display function.
 */
bio.display();
projects.displayResume();
education.display();
work.display();

/*
 * adding google map to resume
 */
$("#mapDiv").append(googleMap);

$("div.card").mouseover(function() {
	$(this).find(".project-description").toggleClass("show");
});
$("div.card").mouseout(function() {
	$(this).find(".project-description").toggleClass("show");
});
