/* 
 * bio object 
 */
var bio = {
	'name': 'PO TONG',
	'role': 'Full Stack Web Developer',
	'contacts': {
		'mobile': '555-867-5309',
		'email': 'potong616@gmail.com',
		'github': 'powebdev',
		'location': 'Richmond, CA'
	},
	'welcomeMessage': 'Welcome to my site. Here you can check out my projects and my education/work information.',
	'skills': ['Python', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'Jasmine', 'Java', 'SQLite', 'PostgreSQL', 'Google App Engine', 'AWS', 'Flask', 'Django', 'OAuth', 'Linux', 'Apache', 'Polymer', 'bootstrap', 'API', 'GIMP', 'Inkscape', 'Git', 'Android'],
	'biopic': 'images/po.png'
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedContactGeneric = '';
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedSkills = '';

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	for (var key in bio.contacts) {
		if (bio.contacts.hasOwnProperty(key)) {
			formattedContactGeneric = HTMLcontactGeneric.replace('%contact%', key);
			formattedContactGeneric = formattedContactGeneric.replace('%data%', bio.contacts[key]);
			$("#topContacts").append(formattedContactGeneric);
			$("#footerContacts").append(formattedContactGeneric);
		}
	}

	$("#header").append(formattedBiopic);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);

	for (var skills_i = 0; skills_i < bio.skills.length; skills_i++) {
		formattedSkills = HTMLskills.replace('%data%', bio.skills[skills_i]);
		$("#skills").append(formattedSkills);
	}
};

/* education object */
var education = {};

education.schools = [{
	'name': 'University of California, Berkeley',
	'location': 'Berkeley, CA',
	'degree': 'Bachelor of Arts',
	'majors': ['Physics', 'Astrophysics'],
	'dates': 2012,
	'url': 'http://www.berkeley.edu/'
}];

education.onlineCourses = [
	{
		'title': 'Intro to HTML and CSS',
		'school': 'Udacity',
		'date': 2015,
		'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
	},
	{
		'title': 'JavaScript Basics',
		'school': 'Udacity',
		'date': 2015,
		'url': 'https://www.udacity.com/course/javascript-basics--ud804'
	},
	{
		'title': 'Intro to Relational Database',
		'school': 'Udacity',
		'date': 2015,
		'url': 'https://www.udacity.com/course/intro-to-relational-databases--ud197'
	}
];

education.display = function() {
	var formattedSchoolName = '';
	var formattedSchoolLocation = '';
	var formattedDegree = '';
	var formattedSchoolMajor = '';
	var formattedSchoolDates;
	var formattedSchoolUrl = '';
	var formattedSchoolAndDegree = '';

	// inserting school(s)
	for (var schools_i = 0; schools_i < education.schools.length; schools_i++) {
		formattedSchoolName = HTMLschoolName.replace(
			'%data%', education.schools[schools_i].name);
		formattedSchoolLocation = HTMLschoolLocation.replace(
			'%data%', education.schools[schools_i].location);
		formattedDegree = HTMLschoolDegree.replace(
			'%data%', education.schools[schools_i].degree);
		formattedSchoolAndDegree = formattedSchoolName + formattedDegree;
		formattedSchoolDates = HTMLschoolDates.replace(
			'%data%', education.schools[schools_i].dates);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolAndDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last > a").attr("href", education.schools[schools_i].url);

		for (var majors_i = 0; majors_i < education.schools[schools_i].majors.length; majors_i++) {
			formattedSchoolMajor = HTMLschoolMajor.replace(
				'%data%', education.schools[schools_i].majors[majors_i]);
				$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	var formattedCourseTitle = '';
	var formattedOnlineSchool = '';
	var formattedCourseDate = '';
	var formattedCourseUrl = '';
	var formattedTitleAndSchool = '';
	var courseUrl = '';
	$("#education").append(HTMLonlineClasses);
	//inserting online courses
	for (var courses_i = 0; courses_i < education.onlineCourses.length; courses_i++) {
		formattedCourseTitle = HTMLonlineTitle.replace(
			'%data%', education.onlineCourses[courses_i].title);
		formattedOnlineSchool = HTMLonlineSchool.replace(
			'%data%', education.onlineCourses[courses_i].school);
		formattedTitleAndSchool = formattedCourseTitle + formattedOnlineSchool;
		formattedCourseDate = HTMLonlineDates.replace(
			'%data%', education.onlineCourses[courses_i].date);
		courseUrl = education.onlineCourses[courses_i].url;
		formattedCourseUrl = HTMLonlineURL.replace(
			'%data%', courseUrl);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedTitleAndSchool);
		$(".education-entry:last").append(formattedCourseDate);
		$(".education-entry:last").append(formattedCourseUrl);
		$(".education-entry:last > a").last().attr("href", courseUrl);
	}
};

/* work object */
var work = {};
work.jobs = [
	{
		'employer': 'Chevron',
		'title': 'Lab Technologist',
		'location': 'Richmond, CA',
		'dates': 'July 2014 - December 2015',
		'description': 'Designed and implemented data acquisition software using Python, C++, and Qt framework.<br>Collaborated with principal scientists to devise proposal for new projects.<br>Performed troubleshooting and maintenance of over 60 pieces of equipment.'
	},
	{
		'employer': 'On Assignment Lab Support',
		'title': 'Lab Technician',
		'location': 'Richmond, CA',
		'dates': 'November 2013 - July 2014',
		'description': 'Performed experiments to analyze rock and fluid properties.<br>Maintained laboratory equipment including test cells, plumbing system, and computer equipment.<br>Worked with equipment under high pressure and high temperature condition.<br>Worked with potentially hazardous materials such as crude oils and solvents.<br>Trained new personnel on lab procedures.'
	},
	{
		'employer': 'University of California, Berkeley',
		'title': 'Lab Assistant',
		'location': 'Berkeley, CA',
		'dates': 'August 2012 - May 2013',
		'description': 'Maintained laboratory equipment.<br>Organized instructional physics lab.<br>Maintained physics lecture demonstration website.'
	},
	{
		'employer': 'Berkeley National Laboratory',
		'title': 'Undergraduate Research Assistant',
		'location': 'Berkeley, CA',
		'dates': 'September 2011 - May 2012',
		'description': 'Investigated the properties of superconducting materials with high precision and accuracy on nano scale.<br>Created and maintained LabView programs to facilitate experiment.<br>Utilized analytical software to interpret and present experiment results.<br>Built apparatus to perform experiment under cryogenic condition.'
	},
	{
		'employer': 'California Army National Guard',
		'title': 'Aircraft Mechanic',
		'location': 'Fresno, CA',
		'dates': 'August 2008 - August 2011',
		'description': 'Identified and fixed rotary wing aircraft malfunctions.<br>Maintained Material Safety Data Sheets on chemicals used in the workplace.<br>Managed aircraft parts inventory to support maintenance activities.<br>Maintained aircraft maintenance documents in accordance to US Army regulations.'
	},
	{
		'employer': 'US Army',
		'title': 'Aircraft Mechanic',
		'location': 'Tacoma, WA',
		'dates': 'August 2002 - August 2008',
		'description': 'Performed maintenance on rotary wing aircraft.<br>Created and maintained aircraft parts inventory system using MS Access and SQL.<br>Served as shop supervisor and supervised a team of five.<br>Maintained personnel training records in accordance to US Army regulations.'
	}
];

work.display = function() {
	var formattedEmployer = '';
	var formattedTitle = '';
	var formattedEmployerTitle = '';
	var formattedWorkLocation = '';
	var formattedDates = '';
	var foramttedDescription = '';

	for (var jobs_i = 0; jobs_i < work.jobs.length; jobs_i++) {
		formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[jobs_i].employer);
		formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[jobs_i].title);
		formattedEmployerTitle = formattedEmployer + formattedTitle;
		formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[jobs_i].location);
		formattedDates = HTMLworkDates.replace('%data%', work.jobs[jobs_i].dates);
		foramttedDescription = HTMLworkDescription.replace('%data%', work.jobs[jobs_i].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(foramttedDescription);
	}
};

/* projects */
var projects = {};
projects.projects = [
	{
		'title': 'Video Game Catalog',
		'dates': 'December 2015',
		'description': "A database backed website for cataloging video games. This was created as one of the projects from Udacity's Full Stack Web Developer Nanodegree. Python/Flask was used for the back-end and Bootstrap for the front-end portion. SQLite/SQLAlchemy was used for database management. OAuth 2.0 was also utilize to allow users to login and perform CRUD functionalities on entries belonging to them.",
		'images': ['images/vgdb.png'],
		'icon': 'images/vgdb-sm.png',
		'url': 'http://powebdev.github.io/catalog_project/'
	},
	{
		'title': 'Conference Organization App',
		'dates': 'December 2015',
		'description': "A web app which allows users to organize and signup for conferences. This was one of the projects from Udacity's Full Stack Web Developer Nanodegree. The main purpose of this project was to learn how to use Google App Engine to create/host scalable apps. Python was used to write the API endpoints. Google's Cloud Datastore, which is a NoSQL database, was used for data storage. Google+ was utilize to allow users to login and perform CRUD functionalities on entries belonging to them.",
		'images': ['images/conference.png'],
		'icon': 'images/conference-sm.png',
		'url': 'http://powebdev.github.io/p4_conference/'
	},
	{
		'title': 'Website Optimization',
		'dates': 'January 2016',
		'description': "This is one of the projets from Udacity's Front End Web Developer Nanodegree. The goal of the project was to optimize a website by analyzing its critical rendering path and also its frame rate performance to ensure people can have a pleasant experience while using the site. The two critical tools used in this projects are Google's PageSpeed Insight and Chrome DevTools. Gulp is also used to create a optimized production version of the site from its devlopment version to be served on the web.",
		'images': ['images/webperf.png'],
		'icon': 'images/webperf.png',
		'url': 'http://powebdev.github.io/webperf/'
	},
	{
		'title': 'Frogger Style Arcade Game',
		'dates': 'January 2016',
		'description': "A mini-game in the style of classic frogger arcade game. This is one of the projects from Udacity's Front End Web Developer Nanodegree. The goal of the project was to utilize JavaScript's object oriented pattern, more specifically the pseudo-classical pattern to create the entities in the game. The assets and game engine were provided by Udacity.",
		'images': ['images/frogger.png'],
		'icon': 'images/frogger.png',
		'url': 'https://github.com/powebdev/js_frogger'
	},
	{
		'title': 'Sequoia Wildflowers',
		'dates': 'Work in progress',
		'description': 'A website for cataloging wildflowers one may find in the Sequoia National Park. The website was originally a static website and the creator has to update the site manually when new flowers are added. The goal of the project was to convert it into a database backed dynamic website to ease the process of updating the site. The framework of choice for this project is Django and data are stored using SQLite. Current status of the site: The back-end is mostly done, and the next major focus is the layout and to make the site responsive. An API for the site will be implemented in the future. The website is currently hosted on AWS using Apache',
		'images': ['images/wildflowers.png'],
		'icon': 'images/wildflowers-sm.png',
		'url': 'http://ec2-52-32-25-251.us-west-2.compute.amazonaws.com/webapp/wildflowers/'
	},
];

projects.displayResume = function() {
	var formattedProjectTitle = '';
	var formattedProjectDates = '';
	var formattedProjectDescription = '';
	var formattedProjectImage = '';
	var numberOfImages = 0;
	for (var projects_i = 0; projects_i < projects.projects.length; projects_i++) {
		formattedProjectTitle = HTMLprojectTitle.replace(
			'%data%', projects.projects[projects_i].title);
		formattedProjectDates = HTMLprojectDates.replace(
			'%data%', projects.projects[projects_i].dates);
		formattedProjectDescription = HTMLprojectDescription.replace(
			'%data%', projects.projects[projects_i].description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		numberOfImages = projects.projects[projects_i].images.length;
		if (numberOfImages > 0) {
			for (var images_i = 0; images_i < numberOfImages; images_i++) {
				formattedProjectImage = HTMLprojectImage.replace(
					'%data%', projects.projects[projects_i].images[images_i]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.displayPortfolio = function() {
	var HTMLprojectContainer = '<div class="container" id="projects"><h3 id="projects-header">Projects</h3></div>';
	var HTMLprojectCard = '<div class="box" id="project"><project-card name="Portfolio Page" image="" icon="" url="" description="" dates=""></project-card></div>';

	$("#content").append(HTMLprojectContainer);
	for (var projects_i = 0; projects_i < projects.projects.length; projects_i++) {
		var project = projects.projects[projects_i];

		$("#projects").append(HTMLprojectCard);
		$("project-card:last").attr(
			"name", project.title);
		$("project-card:last").attr(
			"image", project.images[0]);
		$("project-card:last").attr(
			"icon", project.icon);
		$("project-card:last").attr(
			"url", project.url);
		$("project-card:last").attr(
			"description", project.description);
		$("project-card:last").attr(
			"dates", project.dates);
	}
};
