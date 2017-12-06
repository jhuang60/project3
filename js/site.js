$.noConflict();

(function($){
  $('#questionform').on('submit', function(e){
  e.preventDefault();
  var name = $('#nameinput').val();
  var email = $('emailinput').val();
  var question = $('questioninput').val();
  console.log("form submitted", name);
  });
})(jQuery);
