
$(document).ready(function(){

	// generate a random number, log it to the console
	var randomNumber = Math.floor(Math.random() * 100) + 1 ;
	console.log(randomNumber);
	// keep track of how many guesses the user has made
	var count = 0;
	// output each guess to the screen

	// compare the guess to our random number
	// see if they match
	// if they don't what's the difference
	
	$('form').submit(function(event){
		event.preventDefault();
		var userGuess = $('#userGuess').val();
		$('#userGuess').val('');
		count++;
		$('#count').text(count);
		$('#guessList').append('<li>'+userGuess+'</li>');
		compareGuess(userGuess);
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(e){
    	$(".overlay").fadeIn(1000);
    	e.preventDefault();
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.new').click(function(e){
  		e.preventDefault();
  		randomNumber = Math.floor(Math.random() * 100) + 1 ;
  		console.log(randomNumber);
  		count = 0;
  		$('#count').text(count);
  		$('#guessList').html('');
  		$('#feedback').text('Make your Guess!');
  	});


  	function compareGuess(userGuess){
  		var diff = Math.abs(userGuess - randomNumber);
  		if(diff===0){
  			$('#feedback').text('You guessed correctly');
  		} else if(diff>0 && diff<=10){
  			$('#feedback').text('Hot');
  		} else if(diff>10 && diff<=20){
  			$('#feedback').text('Warmer');
  		} else if(diff>20 && diff<=30){
  			$('#feedback').text('Warm');
  		} else if(diff>30 && diff<=40){
  			$('#feedback').text('Cool');
  		} else if(diff>40 && diff<=50){
  			$('#feedback').text('Cold');
  		} else if(diff>50){
  			$('#feedback').text('ice cold');
  		}
  	}

});


