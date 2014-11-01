$(document).ready(function() {
    //confirm password
    $('#email').focus(function(e){
        $('#envelope').removeClass('default-iconCol');
        $('#envelope').addClass('blue-iconCol');
    })
    $('#email').focusout(function(e){
        $('#envelope').removeClass('blue-iconCol');
        $('#envelope').addClass('default-iconCol');


/*	var email = $('#email').val();
	var isStud = /\w+@hawk.iit.edu/.test(email);
	var isStaff = /\w+@iit.edu/.test(email);
	if(isStud){
	    $('#stud').slideDown();
	    $('#invalid').slideUp();
	    $('#staff').slideUp();
	}
	else if(isStaff){
	    $('#staff').slideDown();
	    $('#invalid').slideUp();
	    $('#stud').slideUp();
	}
	else{
	    $('#staff').slideUp();
	    $('#invalid').slideDown();
	    $('#stud').slideUp();
	}
*/

    })
    $('#password').focus(function(e){
        $('#lock').removeClass('default-iconCol');
        $('#lock').addClass('blue-iconCol');
    })
    $('#password').focusout(function(e){
        $('#lock').removeClass('blue-iconCol');
        $('#lock').addClass('default-iconCol');
    })
    $('#confpassword').focus(function(e){
        $('#lock2').removeClass('default-iconCol');
        $('#lock2').addClass('blue-iconCol');
    })
    $('#confpassword').focusout(function(e){
        $('#lock2').removeClass('blue-iconCol');
        $('#lock2').addClass('default-iconCol');
    })
    $('#confpassword').keyup(function(e){
      var pass1 = $('#password').val();
      var pass2 = $('#confpassword').val();
      var mail = $('#email').val();
      if(pass1 !== pass2){
        $('#match').slideUp();
        $('#no_match').slideDown();
      } else {
        $('#no_match').slideUp();
        $('#match').slideDown();
      }
    })

    $('#password').keyup(function(e){
      var password = $('#password').val();
      var hasUpperCase = /[A-Z]/.test(password);
      var hasLowerCase = /[a-z]/.test(password);
      var hasNumbers = /\d/.test(password);
      var hasNonalphas = /\W/.test(password);
      if (!hasUpperCase)
        $('#pass_up').slideDown();
      else
        $('#pass_up').slideUp();
      if (!hasNumbers)
        $('#pass_num').slideDown();
      else
        $('#pass_num').slideUp();
      if (!hasNonalphas)
        $('#pass_special').slideDown();
      else
        $('#pass_special').slideUp();
      if (password.length < 6)
        $('#pass_long').slideDown();
      else
        $('#pass_long').slideUp();
      if (hasUpperCase + hasNumbers + hasNonalphas == 3 && password.length >= 6){
        $('#pass_ok').show();
        $('#pass_bad').hide();
      }
      else{
        $('#pass_bad').show();
        $('#pass_ok').hide();
      }
    })

    $('#reg-form').submit(function(e){
      if($('#no_match').is(':visible') || $('#pass_bad').is(':visible') || $('#email').val() === "")
        e.preventDefault();
    })
    });
