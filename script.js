/**
 * and here is where the magic happens!
 **/
$(document).ready(function(){
  // thanks stackoverflow for all your magic, I owe you a truck of beers
  // http://stackoverflow.com/questions/4979738/fire-jquery-event-on-div-change

  $('.col').bind('DOMNodeInserted',function(e){
    //alert($(this).find('div.ball').size());
    element = $(this).find('div.ball:first')
    setTimeout(function () {
      element.addClass('jq-enter-active');
    },100)
  });

  $('.col .ball').click(put_the_ball);
});

function put_the_ball() {
  var newball = $('<div>').addClass('ball jq-enter')
    .bind('click', put_the_ball);
  $(this).closest('.col').prepend(newball);
}