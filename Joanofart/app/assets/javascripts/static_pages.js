  	
  $(function(){

    $(window).load(function(){
	    $('#border-bottom').animate({
	    	'width':'100%',
	    	'left': 0
	    	}, 1500);
	   });

  	$('.home-main li').mouseenter(function(){
  		$(this).animate({
  			'opacity': '1'
  		}, 100);
  	})
  	$('.home-main li').mouseleave(function(){
  		$(this).animate({
  			'opacity': '.8',

  		}, 100);
  	})
  });