
function emptyProjects(){
	console.log('Hide all projects');
	$('#project-nav li').removeClass('active');
	$("div.project-load").hide();
	$("div.animals").hide();
	$("div.flowers").hide();
	$("div.landscapes").hide();

}

function updateProjects(obj) {
	emptyProjects();
	var topic = obj.attr('id');
	if (topic === 'project-main-button') {
		var main = $('.project-load');
		main.fadeIn(400, function(){
			main.show();
		})
	} else if (topic === 'flower-button') {
		var flowers = $('.flowers');
		flowers.fadeIn(400, function(){
			flowers.show();
		});
		console.log('showing flowers');		
	} else if (topic === 'animal-button') {
		var animals = $('.animals');
		animals.fadeIn(400, function(){
			animals.show();
		});
		console.log('showing animals');
	} else if (topic === 'landscape-button') {
		var landscapes = $('.landscapes');
		landscapes.fadeIn(400, function(){
			landscapes.show();
		});
		console.log('showing landscapes');
	}
}

function adjustActiveTab(el) {
	if ($(el).hasClass('active') === false) {
		$(el).addClass('active');
	} else {
		$(el).removeClass('active');
	}
	console.log('adjusting active tab')
}

