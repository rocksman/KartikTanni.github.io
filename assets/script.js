// first script in index wala file
//Login popup-----------------------------------------------------------------------
var position;
//show popup on click/drag
function showLog(){
  $(".loginPopup").animate({opacity:0},0);
  $(".loginPopup").animate({top:"145%",opacity:1},"slow");
}
//hide login on close button
function hideLogin(){
  $(function() {
     var x= position.top;
      if(x<0){
        wid=$(document).width();
        if (wid>1000) {
          $('#draggable2').css('padding-top','240px');
          $('#draggable2').css('padding-left','180px');
        }
        else{
          $('#draggable2').css('padding-top','7%');
          $('#draggable2').css('padding-left','25px');
        }
      }
      $(".loginPopup").css('display','block');
      $(".loginPopup").animate({opacity:1},0);
      $(".loginPopup").animate({top:"-60%",opacity:0},"slow");
  })
}
//login popup ends -----------------------------------------------------------------


// second wala script

//close the first popup when clicked anywhere---------------------------------------
$(function() {
    $("#closepop0").click(function(e) {
        if (e.target.id == "canvas" || $(e.target).parents("#canvas").length) {
          //Outside canvas
          //dd
        } else {
          //In the canvas : Get the popup back to the hidden state
          $(".pop").css('display','block');
          $(".pop").animate({opacity:1},0);
          $(".pop,#closepop0").animate({top:"-150%",opacity:0},"slow");
          $('.vignette').css('box-shadow',' 0 0 0 rgba(0,0,0,0.0) inset');
          $('.pop').css('display','hidden');
          $('.pop').css('z-index','-10');
          //$('.vignette').css('display','hidden');
          $('.vignette').css('z-index','-10');
           var p = $( "#draggable2" );
          position = p.position();
        }
      });
});
//closing first popup ends -----------------------------------------------------------

// developers----------------------------------------------------------------------
//close the developers popup
$('#closepop').click(function(){
    $(".pop1").animate({opacity:1},1);
    $(".pop1,.pop2,.pop3,.pop4,.pop5,.pop6,.pop7,.pop8,.pop9,#closepop").animate({top:"-37.5%",opacity:0},"slow");
    $('.pop2,.pop3,.pop4,.pop5,.pop6,.pop7,.pop8,.pop9').css('z-index','-10');
    $('.vignette').css('z-index','-3');
  })
   //open the developers popup on click
$("#tle2").click(function() {

  $(".pop1").css('display','block');
  $(".pop1").animate({opacity:0},0);
  $(".pop1,.pop2,.pop3,.pop4,.pop5,.pop6,.pop7,.pop8,.pop9,#closepop").animate({top:"30.5%",opacity:1},"slow");
  //$('.vignette').css('display','visible');
  $('.vignette').css('z-index','3');
  $('.vignette').css('box-shadow','0 0 600px rgba(0,0,0,0.9) inset');
  $('.pop1').fadeIn();

  var p1 = document.getElementsByClassName('pop2')[0];
  var p2 = document.getElementsByClassName('pop3')[0];
  var p3 = document.getElementsByClassName('pop4')[0];
  var p4 = document.getElementsByClassName('pop5')[0];
  var p5 = document.getElementsByClassName('pop6')[0];
  var p6 = document.getElementsByClassName('pop7')[0];
  var p7 = document.getElementsByClassName('pop8')[0];
  var p8 = document.getElementsByClassName('pop9')[0];

  //setting the css3 animation to none
  p1.style.webkitAnimation = 'none';
  p2.style.webkitAnimation = 'none';
  p3.style.webkitAnimation = 'none';
  p4.style.webkitAnimation = 'none';
  p5.style.webkitAnimation = 'none';
  p6.style.webkitAnimation = 'none';
  p7.style.webkitAnimation = 'none';
  p8.style.webkitAnimation = 'none';

  //animating each name separately using css
  var x=900,y=400;
  setTimeout(function() {
    $('.pop2').css('z-index','10');
      p1.style.webkitAnimation = '';

  }, x );
   setTimeout(function() {
    $('.pop3').css('z-index','10');
      p2.style.webkitAnimation = '';

  }, x+y);
    setTimeout(function() {
    $('.pop4').css('z-index','10');
      p3.style.webkitAnimation = '';

  }, x+3*y);
     setTimeout(function() {
    $('.pop5').css('z-index','10');
      p4.style.webkitAnimation = '';

  }, x+5*y);
      setTimeout(function() {
    $('.pop6').css('z-index','10');
      p5.style.webkitAnimation = '';

  }, x+7*y);
       setTimeout(function() {
    $('.pop7').css('z-index','10');
      p6.style.webkitAnimation = '';

  }, x+2*y);
        setTimeout(function() {
    $('.pop8').css('z-index','10');
      p7.style.webkitAnimation = '';

  }, x+4*y);
         setTimeout(function() {
    $('.pop9').css('z-index','10');
      p8.style.webkitAnimation = '';

  }, x+6*y);
});

//developers part ends here---------------------------------------------------------------

//initializing the parallax----------------------------
var $html = $scene = $('#scene');
      $scene.parallax();
//parallax ends ---------------------------------------

//function to check if the bubble is on top of magnovite bubble (returns a boolean)--
      doElsCollide = function(el1, el2) {
          el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
          el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
          el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
          el2.offsetRight = el2.offsetLeft + el2.offsetWidth;

          return !((el1.offsetBottom < el2.offsetTop) ||
                   (el1.offsetTop > el2.offsetBottom) ||
                   (el1.offsetRight < el2.offsetLeft) ||
                   (el1.offsetLeft > el2.offsetRight))
    };
//function ends here-----------------------------------------------------------------


//this gets executed in the begining ---------------------------------------------------------------------------------------------
$( function() {
      //x is the width of screen
      x=$(document).width();
      //if the width of screen is greater than 1000 pixels (a desktop)
      //then animate the first gif popup and add a vignette
      if (x>1000) {
        $('.vignette').css('box-shadow','0 0 600px rgba(0,0,0,0.9) inset');
        $(".pop,#closepop0").css('display','block');
        $(".pop,#closepop0").animate({opacity:0},0);
        $(".pop").animate({top:"145%",opacity:1},"slow");
        $("#closepop0").animate({top:"26%",opacity:1},"slow");
      }
      //if a mobile no vignette
      else{
        $('.vignette').css('box-shadow','0 0 0px rgba(0,0,0,0.0) inset');
      }

      //setting draggable property for each element except the about
      $( "#draggable1" ).draggable();
      $( "#draggable2" ).draggable();
      $( "#draggable3" ).draggable();


      //to detect if an object is dropped in the magnovie bubble
      $( "#droppable" ).droppable({
        drop: function( event, ui ) {
         //saving each element in a variable for later use
      var el2 = document.getElementById('draggable1'),
          el4 = document.getElementById('draggable2'),
          el5 = document.getElementById('draggable3'),
          el3 = document.getElementById('droppable');

      //these variables return a boolean value if any of the draggable element is on top of the magno bubble
      var i1 = (doElsCollide(el5, el3));
      var i2 = (doElsCollide(el2, el3));
      var i3 = (doElsCollide(el4, el3));
      //if its on top of it then bounce the dragged element and load the particular webpage
      if(i1==true){
         $( "#draggable3" ).toggle( "bounce", { times: 3 },650 );
        location.href = 'workshops.html';
      }

      else if(i2==true){
         $( "#draggable1" ).toggle( "bounce", { times: 3 },650 );
        location.href = 'events.html';
      }

      if(i3==true){
      }

        }
      });
    } );
//the beg function ends ---------------------------------------------------------------------------------------------------------------------
