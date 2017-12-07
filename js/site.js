$.noConflict();

(function($){
  var track = true;
  var numbers = new Array(7);
  var tellnumber = document.getElementById("tellnumber");
  var tellfortune = document.getElementById("tellfortune");
  var item = " ";
  var i = 0;
  var luckynum = " ";
  var arrrayoffortunes = ["Today is your lucky day. Go get that lottery ticket!",
    "Look behind!", "oops, wrong cookie", "This fortune is not good. Try another.", "meh",
    "Many fortune cookies contain no fortune... Not this one though!",
    "I know you are hungry", "JUST DO IT!", "Javascript, javascript everywhere",
    "Am I hired yet?", "You will find your fortune in another cookie", "Run!",
    "Senpai notice me!", "You are probably thinking that you can come up with better fortunes.",
    "Despide of all the negative fortunes covfefe"];


  $("#popsound").remove();

  $(document).ready(function(){
    function messagesubmit() {
      var popsound = new Audio('media/pop.mp3');
      popsound.play();
    }

    $("#submit").on("click", function(){
      messagesubmit();
    });

  });

  function luckynumbers() {
    if (track === true){
      for (i=0; i<numbers.length; i++) {
        luckynum = " " + Math.floor(Math.random()*70);
        numbers[i] = luckynum;
      }
    }
    tellnumber.textContent = "Your lucky numbers are: " + numbers.toString();
  }

  function fortunes(){

    if (track === true){
      item = arrrayoffortunes[Math.floor(Math.random()*arrrayoffortunes.length)];
    }
    tellfortune.textContent = item;
  }

  function cookieimage() {

    var image = document.getElementById("myimage");
    if(track === true){
      image.src = "../images/open.png";
      luckynumbers();
      fortunes();
      track = false;}
    else {image.src = "../images/close.png";
      tellnumber.textContent = "";
      tellfortune.textContent = "";
      track = true;
    }

  }

  $("#myimage").on("click", function(){
    cookieimage();
  } );


  $('#questionform').on('submit', function(e){
    var name = $('#nameinput').val();
    var email = $('#emailinput').val();
    var question = $('#questioninput').val();
    var status = document.getElementById("status");
    var fill = "Please fill in all the fields";
    var done = "Form submitted";

    e.preventDefault();

    if (name === '' || email === '' || question === '') {
      status.textContent = fill;
      document.getElementById("status").style.color = 'red';

    } else{
      console.log("form submitted", name, email, question);
      status.textContent = done;
      document.getElementById("status").style.color = 'green';
    }

  });

})(jQuery);
