function emptyProjects(){
	console.log('Hide all projects')
	$("div.project-main").hide();
	$("div.animals").hide();
	$("div.flowers").hide();
}

function animalProjects(){
	$('.animals').show();
	console.log('showing animals');
}

function flowerProjects(){
	$('.flowers').show();
}

