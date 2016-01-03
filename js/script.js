//projects object stores all the objects which will be displayed on the portfolio website
var projects = [
	{
	'small_img': 'images/resume-sm.png',
	'reg_img': 'images/resume.png',
	'img_alt': 'Resume',
	'name': 'RESUME',
	'url': '#'
	},
	{'small_img': 'images/vgdb-sm.png',
	'reg_img': 'images/vgdb.png',
	'img_alt': 'Catalog',
	'name': 'VIDEO GAME CATALOG',
	'url': 'http://powebdev.github.io/catalog_project'
	},
	{'small_img': 'images/conference-sm.png',
	'reg_img': 'images/conference.png',
	'img_alt': 'Conference',
	'name': 'CONFERNCE ORGANIZATION APP',
	'url': 'http://powebdev.github.io/p4_conference'
	}
];

//create a DOM object with each project and append it to the webpage
for (var i = 0; i < projects.length; i++) {
	var HTMLproject = '<div class="project"><div class="project-img"><a href="data-link"><picture><source media="(max-width: 400px)" srcset="data-img-sm"><img class="alt-img" src="data-img-reg" alt="data-img-alt"></picture></a></div><div class="project-info"><h4 class="project-title">data-name</h4><p class="project-url">data-url</p></div></div>';

//replace placeholder strings with actual data from projects object
	var map_object = {
		'data-link': projects[i].url,
		'data-img-sm': projects[i].small_img,
		'data-img-reg': projects[i].reg_img,
		'data-img-alt': projects[i].img_alt,
		'data-name': projects[i].name,
		'data-url': projects[i].url
	};

	HTMLproject = HTMLproject.replace(/data-link|data-img-sm|data-img-reg|data-img-alt|data-name|data-url/gi, function(matched){return map_object[matched];});
	$(".project-content").append(HTMLproject);
}

