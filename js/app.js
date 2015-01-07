$(document).ready(function() {
	
	
	
	$('#submit').click(function(){
		var userInput = $("#new-item").val();
		var box = $('.box').css( {
			'display': 'inline-block',
			'float': 'right',
			'margin-right': '1em'

		});
		$('.list-items').append("<li>" + userInput + "</li>" + box);
		$('#new-item').val("");
        });

	//$('.new-items').on('click', 'box', function() {
	//	var check = $('.fa .fa-check-square-o').css({
	//	'display': 'inline-block';
	//			'float' : 'right';
	//			'margin-right' : '1em'
	//	});

//$('check').show();
//		$('box.').hide();
	//});	



});