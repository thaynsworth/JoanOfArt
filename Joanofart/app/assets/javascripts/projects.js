function emptyProjects(){
	console.log('Hide all projects')
	$("div.project-main").hide();
	$("table.animals").hide();
	$("table.flowers").hide();
}

function animalProjects(){
	$('table.animals').show();
	console.log('showing animals');
}

function flowerProjects(){
	$('.flowers').show();
}

