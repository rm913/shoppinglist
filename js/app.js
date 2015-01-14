$(document).ready(function(){

	var num = prompt('Choose a number');
	if (num % 5 == 0) {
		console.log('weve got a fizzy!');
	}
	else if (num % 9 == 0){
		console.log('weve got a buzzy');
	}
	else {
		console.log(num);
	};
	


});
