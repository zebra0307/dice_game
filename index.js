var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;//image/Dice1.png -image/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player wins

if (randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins!";
}else{
    document.querySelector("h1").innerHTML="draw";
}
