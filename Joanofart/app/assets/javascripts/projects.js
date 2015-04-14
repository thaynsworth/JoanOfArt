
function emptyProjects(){
	console.log('Hide all projects');
	$('#cssmenu li').removeClass('active');
	$("div.project-load").hide();
	$("div.animals").hide();
	$("div.flowers").hide();

}

function animalProjects(){
	var animals = $('.animals');
	animals.fadeIn(1000, function(){
		animals.show();
	});
	console.log('showing animals');
}

function flowerProjects(){
	var flowers = $('.flowers');
	flowers.fadeIn(1000, function(){
		flowers.show();
	});
	console.log('showing flowers');
}

function adjustActiveTab(el) {
	if ($(el).hasClass('active') === false) {
		$(el).addClass('active');
	} else {
		$(el).removeClass('active');
	}
	console.log('adjusting active tab')
}

