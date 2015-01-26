
$(document).ready(function() {
	
	
	
	$('#submit').click(function(){
		var userInput = $("#new-item").val();
		
		 $('.list-items').append("<li>" + userInput+
		 	"<i class='fa fa-square-o square'></i>" +
		 	"<i class='fa fa-trash fa-4'></i>"+"</li>");
		$('#new-item').val("");
        });

	$(".list-items").on("click", ".fa-trash", function(){
		$(this).closest('li').remove();
		console.log('ths has been deleted');
});
	$(".list-items").on("click", ".fa-square-o",function(){
		$(this).toggleClass("fa-check-square-o fa-square-o");
		
	});
	$(".list-items").on("click", ".fa-check-square-o",function(){
		$(this).toggleClass("fa-check-square-o fa-square-o");
		
	});


});
