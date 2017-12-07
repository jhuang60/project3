$.noConflict();

(function($){
  var track = true;


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
