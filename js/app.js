$(document).ready(function(){

	var num = $('#number').val();

	$('#submit').click(function(){

	

	if (num % 3 == 0) {
		
		$('.answer ul').append('<li>'+ "Fizz" + '</li>');
	}
	else if (num % 5 == 0) {
		$('.answer ul').append('<li>'+ "Buzz" + '</li>');
	}
	else if (num % 5 == 0 && num % 3 ==0) {
		$('.answer ul').append('<li>'+ "Fizz-Buzz" + '</li>');
	}
	else {
		('.answer ul').append('<li>'+ num + '</li>');
	}
	
});

});
