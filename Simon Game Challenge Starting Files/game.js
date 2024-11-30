let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
var started =  false ;
var level =0 ;

function nextSequence(){
    userClickedPattern = [];

level++;
$("h1").html("level "+level);

 const randomNumber = Math.floor(Math.random()*4);
let randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();
playSound(randomChosenColour);


 
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");;
    console.log(userChosenColour)
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(){
    if(!started){
     $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
  
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("sucess");
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
          nextSequence()
        },1000)
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
  
      }
    }
function startOver(){
level = 0;
gamePattern = [];
started = false;
}