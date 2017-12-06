$.noConflict();

(function($){
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

  $('#questionform').on('submit', function(e){
    var name = $('#nameinput').val();
    var email = $('#emailinput').val();
    var question = $('#questioninput').val();

    e.preventDefault();

    if (name === '' || email === '' || question === '') {
      alert("Please fill in all the fields");
      return false;
    }else{
      console.log("form submitted", name, email, question);
      alert("Form submited");
    }

  });

})(jQuery);
