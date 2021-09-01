var randomNo1=Math.floor(Math.random()*6)+1;
var imageSource1="images/dice" + randomNo1 + ".png";

var randomNo2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

