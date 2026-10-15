//player1
var randomnumber1=Math.floor(Math.random()*6) +1;//1-6

var randomdiceimage="dice" + randomnumber1 + ".png";//dice1.png-dice6.png

var randomimagesource="images/" + randomdiceimage;//images/dice1.png- images/dice1.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

//player2
var randomnumber2=Math.floor(Math.random()*6) +1;

var randomdiceimage2="dice" +randomnumber2 +".png";
 
var randomimagesource2="images/" + randomdiceimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesource2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="player 1 Wins🚩!";
}
else if(  randomnumber2 > randomnumber1)
{
   document.querySelector("h1").innerHTML="player 2 Wins🚩!";
}

 else {
 
     document.querySelector("h1").innerHTML=" Match Draw🤝!";
 }