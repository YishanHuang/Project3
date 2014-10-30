$(document).ready(function() {
      $('#login').focus(function(e){
        $('#envelope').removeClass('default-iconCol');
        $('#envelope').addClass('blue-iconCol');
      })
      $('#login').focusout(function(e){
        $('#envelope').removeClass('blue-iconCol');
        $('#envelope').addClass('default-iconCol');
      })
      $('#password').focus(function(e){
        $('#lock').removeClass('default-iconCol');
        $('#lock').addClass('blue-iconCol');
      })
      $('#password').focusout(function(e){
        $('#lock').removeClass('blue-iconCol');
        $('#lock').addClass('default-iconCol');
      })
});