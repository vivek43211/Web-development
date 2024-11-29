// const btn = document.querySelector("button").addEventListener("click",()=>{
//     alert("click !!!")
//     });


const numberbutton = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
       MakeSound(buttoninnerhtml);
       AddAmination(buttoninnerhtml);

        })
    }

document.addEventListener("keypress", function (event) {
    MakeSound(event.key);
    AddAmination(event.key);
    })

function MakeSound (event){
    switch (event) {
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var carsh = new Audio("./sounds/crash.mp3");
            carsh.play();
            break;
        case "l":
            var kickbass = new Audio("./sounds/kick-bass.mp3");
            kickbass.play();
            break;

        default:
            console.log("no valid input");
    }
}
function AddAmination(currentkey){
let activekey = document.querySelector("."+currentkey) 
activekey.classList.add("pressed")
setTimeout(function(){
    activekey.classList.remove("pressed")
},100)
}