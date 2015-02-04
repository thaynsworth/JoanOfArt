function emptyProjects(){
	$("#projects").empty();
}

function animalProjects(){
	$("#animals").slideToggle();
}

$(function(){

	$("#animal-button").click(function(){
		emptyProjects();
		animalProjects();

	})

})