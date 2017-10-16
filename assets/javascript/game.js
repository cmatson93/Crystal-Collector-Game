
$(document).ready(function() {

	var newGame = true;
	  
	  var yourScore = 0;
	  var wins = 0;
	  var losses = 0;
	  var targetNumber = 0;

	// generate target number 

	var minTargetNumber = 30;

	function generateNumber () {
		var maxTargetNumber = 100;
	  targetNumber = Math.floor(Math.random() * (maxTargetNumber - minTargetNumber) + minTargetNumber);
	  // change html of target number 
	  $(".target-score").html(targetNumber);
	} 
	
	 generateNumber();


  	$(".crystals").on("click", function () {
  		

	  yourScore = yourScore + (parseInt(($(this)).attr("value")));
	  

	  $(".your-score").html(yourScore);

	  console.log(yourScore);

	  if (yourScore > targetNumber) {
	  	alert("Sorry you loose...");
	  	losses ++;
	  	$(".losses").html(losses);
	  	yourScore = 0; 
	  	$(".your-score").html(yourScore);
	  	generateNumber();
	  } 

	  else if (yourScore == targetNumber) {
	  	alert("Yay you win!");
	  	wins ++;
	  	$(".wins").html(wins);
	  	yourScore = 0; 
	  	$(".your-score").html(yourScore);
	  	generateNumber();
	  }

   	});



});

