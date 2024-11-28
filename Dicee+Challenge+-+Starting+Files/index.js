//method 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
console.log(randomNumber1)

if(randomNumber1 == 1){
    document.querySelector(".img1").src=("./images/dice1.png")
}
else if(randomNumber1 == 2){
    document.querySelector(".img1").src=("./images/dice2.png")
}
else if(randomNumber1 == 3){
    document.querySelector(".img1").src=("./images/dice3.png")
}
else if(randomNumber1 == 4){
    document.querySelector(".img1").src=("./images/dice4.png")
}
else if(randomNumber1 == 5){
    document.querySelector(".img1").src=("./images/dice5.png")
}
else if(randomNumber1 == 6){
    document.querySelector(".img1").src=("./images/dice6.png")
}
let randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
console.log(randomNumber2)
if(randomNumber2 == 1){
    document.querySelector(".img2").src=("./images/dice1.png")
}
else if(randomNumber2 == 2){
    document.querySelector(".img2").src=("./images/dice2.png")
}
else if(randomNumber2 == 3){
    document.querySelector(".img2").src=("./images/dice3.png")
}
else if(randomNumber2 == 4){
    document.querySelector(".img2").src=("./images/dice4.png")
}
else if(randomNumber2 == 5){
    document.querySelector(".img2").src=("./images/dice5.png")
}
else if(randomNumber2 == 6){
    document.querySelector(".img2").src=("./images/dice6.png")
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Players 1 wins";
    console.log("win 1");
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Players 2 wins";
    console.log("win 2");

}
else{
    document.querySelector("h1").innerHTML = "Draw";
    console.log("draw");
}

// method 2 
// let randomno1 = Math.floor(Math.random() * 6) + 1;
//  let randomdiceimage = "dice"+randomno1+".png";
//  let randomdiceimagesoruce = "./images/"+randomdiceimage;
//  let img1 = document.querySelector(".img1")
//  img1.setAttribute("src",randomdiceimagesoruce)

//  let randomno2 = Math.floor(Math.random() * 6) + 1;
//  let randomdiceimage2 = "dice"+randomno2+".png";
//  let randomdiceimagesoruce2 = "./images/"+randomdiceimage2;
//  let img2 = document.querySelector(".img2")
//  img1.setAttribute("src",randomdiceimagesoruce2)

