  	
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
    $('#email ul').animate({
      // 'margin-top': '20%',
      'font-size': '22px'
    }, 300);
    $('#email i').addClass('email-color');
    
  });
  $('#email').mouseleave(function(){
    $('#email ul').animate({
      // 'margin-top': '17%',
      'font-size': '18px'
    }, 300);
    $('#email i').removeClass('email-color');    
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


 