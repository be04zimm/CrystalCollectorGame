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


    // generating random computer #
    var random = Math.round(Math.random() * (120 - 19) + 19);
    console.log("Random Number To Match:  " + random);
    $("#computerNumber").text(random);

    var counter = 0;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    // crystal buttons

    //might only need ONE math.random for all 4 crystal buttons??

    var crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);


        //not sure if i need a for-loop here --> i think it's supposed to reference "var crystalRed" from lines 29-35 ...?? maybe?

        var crystalRed = $("<img>");
        crystalRed.addClass("crystalRed-image");
        crystalRed.toLocaleString("src", "assets/images/gem_red.png");
        crystalRed.attr("data-crystalValue", crystalRed [i]);
        $("#crystals").append(crystalRed);
    

    //add for-loop for other crystal colors


    //add click-event for crystals
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt (crystalValue);

        counter += crystalValue;
        alert("New score: " + counter);

        if(counter === random) {
            alert ("You win!");
        }
            else if (counter >= random) {
                alert ("You lose!");
            }
    });

}) //end document.ready function