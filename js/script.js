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
	var HTMLproject_card = '<div class="project">';
	HTMLproject_card = HTMLproject_card + '<project-card ';
	HTMLproject_card = HTMLproject_card + 'url="%data-url%" ';
	HTMLproject_card = HTMLproject_card + 'name="%data-name%" ';
	HTMLproject_card = HTMLproject_card + 'pic_reg="../%data-image-reg%" ';
	HTMLproject_card = HTMLproject_card + 'pic_sm="../%data-image-sm%">';
	HTMLproject_card = HTMLproject_card + '</project-card></div>';

//replace placeholder strings with actual data from projects object
	HTMLproject_card = HTMLproject_card.replace('%data-url%', projects[i].url);
	HTMLproject_card = HTMLproject_card.replace('%data-name%', projects[i].name);
	HTMLproject_card = HTMLproject_card.replace('%data-image-reg%', projects[i].reg_img);
	HTMLproject_card = HTMLproject_card.replace('%data-image-sm%', projects[i].small_img);
	$(".project-content").append(HTMLproject_card);
	
}

