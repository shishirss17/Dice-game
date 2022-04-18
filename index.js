var randomNumber1 = Math.floor(Math.random() * 6) + 1;// give random number between 1 to 6

var randomDiceImage= "dice" + randomNumber1 + ".png"; // dice image from 1 to 6

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png to dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "play 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "play 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "DrAW";
}
    