$(document).ready(function() {
	
	$('#submit').click(function(){
		var userInput = $("#new-item").val();
		$('.list-items').append("<li>" + userInput + "</li>");
		$('#new-item').val("");
        });
	


});