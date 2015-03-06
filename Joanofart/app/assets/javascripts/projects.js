function emptyProjects(){
	console.log('Hide all projects');

	$("div.project-load").hide();
	$("div.animals").hide();
	$("div.flowers").hide();

	$('#project-nav li').css({
		'border-bottom': 'none',
		'color': 'black'
	})

}

function animalProjects(){
	var animals = $('.animals');
	var animalButton = $('#animal-button');
	animalButton.css({
		'border-bottom': '3px solid grey',
		'color': 'grey'
	});
	animals.fadeIn(1000, function(){
		animals.show();
	});
	console.log('showing animals');
}

function flowerProjects(){
	var flowers = $('.flowers');
	var flowerButton = $('#flower-button');
	flowerButton.css({
		'border-bottom': '3px solid grey',
		'color': 'grey'		
	})
	flowers.fadeIn(1000, function(){
		flowers.show();
	});
	console.log('showing flowers');
}

