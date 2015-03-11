function emptyProjects(){
	console.log('Hide all projects');

	$("div.project-load").hide();
	$("div.animals").hide();
	$("div.flowers").hide();

	$('#project-nav li').removeClass('project-nav-hover');

}

function animalProjects(){
	var animals = $('.animals');
	var animalButton = $('#animal-button');
	animalButton.addClass('project-nav-hover');
	animals.fadeIn(1000, function(){
		animals.show();
	});
	console.log('showing animals');
}

function flowerProjects(){
	var flowers = $('.flowers');
	var flowerButton = $('#flower-button');
	flowerButton.addClass('project-nav-hover');
	flowers.fadeIn(1000, function(){
		flowers.show();
	});
	console.log('showing flowers');
}

