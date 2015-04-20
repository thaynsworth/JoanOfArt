  	
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
      'font-size': '22px'
    }, 300);
    $('#email i').addClass('email-color');
    
  });
  $('#email').mouseleave(function(){
    $('#email ul').animate({
      'font-size': '18px'
    }, 300);
    $('#email i').removeClass('email-color');    
  })
}

function contactFacebookAnimate() {
  $('#facebook').mouseenter(function(){
    $('#facebook ul').animate({
      'font-size': '22px'
    }, 300);
    $(this).css({
      'background-color': 'white'
    });
    $('#facebook i').addClass('facebook-color');
  });
  $('#facebook').mouseleave(function(){
    $('#facebook ul').animate({
      'font-size': '18px'
    }, 300);
    $(this).css({
      'background-color': 'white'
    });
    $('#facebook i').removeClass('facebook-color');    
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


 