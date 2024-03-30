console.log('\'Allo \'Allo!');

$('.menu_trigger').click(function(){
  console.log("Clicked");
// Within the header element, points towards the .menu class, then the ul element inside of it.
  $('header .menu  ul').addClass('d-block');
});
