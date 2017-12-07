$.noConflict();

(function($){
  var track = true;
  var numbers = new Array(7);
  var tellnumber = document.getElementById("tellnumber");
  var i = 0;
  var luckynum = " ";



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
