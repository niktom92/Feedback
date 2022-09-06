

// проверка на ввод цифр (для номера)
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\+/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
    alert ("введите число");
  }
}
// Проверка E-mail
function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test( $email );
}

// Проверка телефона и ПК при отправке формы (при использовании bootstrap на пустые значение и корректность почты проверяется там)
	$('#feedback').submit(function () {
		
		var name = $.trim($(this).find('input[name="name_input"]').val());
		var phone = $.trim($(this).find('input[name="phone"]').val());
		var email = $.trim($(this).find('input[name="email_input"]').val());
		
		if (name  === '') {
			alert('Заполните поле с именем');
			return false;
		}

		if (phone  === '') {
			alert('Заполните поле с номером телефона');
			return false;
		} else if (phone.length < 8) {
			alert('Слишком короткий номер');
			return false;
		} else if (!((phone.lastIndexOf("+7", 0) === 0) || (phone.lastIndexOf("8", 0) === 0))) {
			alert('Введите корректный номер в формате +79998887766 или 89998887766');
			return false;
		}
		
		
		if(email  === '' || !validateEmail(email)) { 
			alert('Введите корректный E-mail');
			return false;
		}
		
		if (!$('input:checkbox[name="acceptance"]').is(':checked')) {
			alert('Вы должны ознакомиться с политикой конфиденциальности');
			return false;
		}
		
	});

