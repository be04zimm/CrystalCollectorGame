// Computer-generated random # for computer guess (19-120)
// Computer-generated random # for each crystal (1-12)
// User clicks crystal buttons
// User score (per button click) is added to score box
// With each click, calculate if total score >, <, or = to computer guess
// if: score < random #, game continues
// if: score > random #, game ends and add loss to wins/losses box
// if: score = random #, game ends and add win to wins/losses box

console.log("Ready to play?!")

$(document).ready(function() {


    var counter = 0;
    var wins = 0;
    var losses = 0;


	function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;

	}

	var targetNumber = randomNum(19,120);
	$("#target").html(targetNumber);

	var crystalOne= randomNum(1, 12);
	var crystalTwo= randomNum(1, 12);
	var crystalThree= randomNum(1, 12);
	var crystalFour= randomNum(1, 12);


	function reset(){
		counter = 0;
        targetNumber = randomNum(19,120);
        $("#target").html(targetNumber);
		$("#playerScore").text(counter);
		crystalOne= randomNum(1, 12);
		crystalTwo= randomNum(1, 12);
		crystalThree= randomNum(1, 12);
		crystalFour= randomNum(1, 12);

	}

	
	$("#greenGem").on("click", function(){
		counter += crystalOne;
		WinLose();
		$(playerScore).text(counter);
		
	});

	$("#blueGem").on("click", function(){
		counter += crystalTwo;
		WinLose();
		$(playerScore).text(counter);
		
	});

	$("#purpleGem").on("click", function(){
		counter += crystalThree;
		WinLose();
		$(playerScore).text(counter);
		
	});

	$("#redGem").on("click", function(){
		counter += crystalFour;
		WinLose();
		$(playerScore).text(counter);
		
	});

	function WinLose (){

	if (counter === targetNumber){
		wins += 1;
		alert("You Won! Great Job!");
		$(win).text(wins);
		reset();

	} else if(counter > targetNumber){
		losses += 1;
		alert("You lost. Try again!");
		$(loss).text(losses);
		reset();
	}
	
    }


}); //end document.ready function