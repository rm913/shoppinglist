$(document).ready(function() {
	
	
	
	$('#submit').click(function(){
		var userInput = $("#new-item").val();
		
		$('.list-items').append("<li>" + userInput +"<i class='fa fa-square-o'></i>"+"<li>");
		$('.fa-square-o').css({
			
			'font-size': '1.5em'
			
	});
		$('#new-item').val("");
        });




});