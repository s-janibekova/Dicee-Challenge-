// document.querySelector("img").setAttribute("src", "images/dice" + Math.floor(Math.random()*6 +1) + ".png")
// document.querySelector("img.img2").setAttribute("src", "images/dice" + Math.floor(Math.random()* 6 +1) + ".png")
// First image

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "The <em><strong style='color: #f73859'></em>first</strong> player WON"
  document.querySelector("h1").style.color = "#7ac7c4"

}

else {
  document.querySelector("h1").innerHTML = "The <strong style='color: #f73859'>second</strong> player WON"
  document.querySelector("h1").style.color = "#7ac7c4"
}
