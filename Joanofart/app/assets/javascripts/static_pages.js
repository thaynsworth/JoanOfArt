  	
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
}

$(function(){

  mainUnderline();
  homeButtonAnimate();
  $('#home-button').on('click', function() {
    mainUnderline();
  });

});


 