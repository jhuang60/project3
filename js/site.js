$.noConflict();

(function($){

  $("#popsound").remove();

  $(document).ready(function(){
    function messagesubmit() {
      var popsound = new Audio('media/pop.mp3');
      popsound.play();
    }

   $("#submitForm").on("click" , function(){
   messagesubmit();
    });

  });

  $('#questionform').on('submit', function(e){

  e.preventDefault();

  var name = $('#nameinput').val();
  var email = $('#emailinput').val();
  var question = $('#questioninput').val();

  if (name == '' || email == '' || question == '') {
           alert("Please fill in all the fields");
           return false;
       }

  console.log("form submitted", name, email, question);
  producePrompt ("Correct");

  });

})(jQuery);
