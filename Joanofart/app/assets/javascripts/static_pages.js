  	
function mainUnderline() {
  $('#border-bottom').animate({
    'width':'100%',
    'left': 0
    }, 1500);
  console.log('underline working?')
}

function homeButtonAnimate() {
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
    console.log('button hover animation')
}

function contactEmailAnimate() {
  $('#email').mouseenter(function(){
    $('#email i').animate({
      'padding-top': '75%'
    }, 500);
    $(this).css({
      'background-color': 'lightgrey'
    });
  });
  $('#email').mouseleave(function(){
    $('#email i').animate({
      'padding-top': '50%'
    }, 400);
    $(this).css({
      'background-color': 'white'
    });    
  })
}

function contactFacebookAnimate() {
  $('#facebook').mouseenter(function(){
    $('#facebook i').animate({
      'padding-top': '75%'
    }, 500);
    $(this).css({
      'background-color': 'lightgrey'
    });
  });
  $('#facebook').mouseleave(function(){
    $('#facebook i').animate({
      'padding-top': '50%'
    }, 400);
    $(this).css({
      'background-color': 'white'
    });    
  })
}  

function contactMarleyAnimate() {
  var el = $('.smiley')
  $('#marley').mouseenter(function(){
    el.slideToggle(600, function(){
      el.show();
    })
  });
  $('#marley').mouseleave(function(){
    el.slideToggle(600, function(){
      el.hide();
    })
  })
}


 