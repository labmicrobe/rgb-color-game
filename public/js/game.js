var squares        = document.querySelectorAll(".square");
var temp           = document.querySelector("h1");
var numSquares     = 6;
var colorDisplay   = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetbutton    = document.getElementById("reset");
var easy           = document.getElementById("easy");
var hard           = document.getElementById("hard");
var colors         = colorgenerator(6);
var predictedColor = randomcolor();

  colorDisplay.textContent = predictedColor;
  temp.style.backgroundColor = "steelblue";  
 
  easy.addEventListener("click",function(){
  	easy.classList.add("selected");
  	hard.classList.remove("selected");
  	numSquares     = 3;
    colors         = colorgenerator(numSquares);
    predictedColor = randomcolor();	
     for(var i=0 ; i < 6 ; i++){
      if(colors[i]){ 	
       squares[i].style.backgroundColor = colors[i];	
      }
      else{
       squares[i].style.display= "none";
      }
     }
    messageDisplay.textContent = "";    
    colorDisplay.textContent = predictedColor;     
    temp.style.backgroundColor = "steelblue";  
  }) 

  hard.addEventListener("click",function(){
  	easy.classList.remove("selected");
  	hard.classList.add("selected");
  	numSquares     = 6;
    colors         = colorgenerator(numSquares);
    predictedColor = randomcolor();	
     for(var i=0 ; i < 6 ; i++){
       squares[i].style.backgroundColor = colors[i];	
      if(i>2){
       squares[i].style.display= "block";	
      } 
     }
    messageDisplay.textContent = "";
    colorDisplay.textContent = predictedColor;     
    temp.style.backgroundColor = "steelblue";  
  }) 

  reset.addEventListener("click", function() {
    colors         = colorgenerator(numSquares);
    predictedColor = randomcolor();	
     for(var i=0 ; i < numSquares ; i++){
      squares[i].style.backgroundColor = colors[i];	
     }
    colorDisplay.textContent   = predictedColor;     
    temp.style.backgroundColor = "steelblue";  
    messageDisplay.textContent = "";
    reset.textContent="New Colors";
  })



 for(var i=0 ; i < 6 ; i++){
    squares[i].style.backgroundColor = colors[i];	
    squares[i].addEventListener("click", function() {
      var pickedColor = this.style.backgroundColor;
      if(pickedColor === predictedColor){
      	 changecolor(predictedColor);
      	 messageDisplay.textContent="Correct!";
      	 temp.style.backgroundColor = predictedColor;
      	 reset.textContent="Play Again?";
      } else {
		 this.style.backgroundColor = "black";
      	 messageDisplay.textContent="Try again !";
      }

    });
 }


function colorgenerator(num) {
  var colors = [];	
 for(var i=0 ; i < num ; i++ ){
  colors.push(generate()); 	
 }
 return colors;
}

function generate(){
 var r=Math.floor(Math.random()*256);	
 var g=Math.floor(Math.random()*256);	
 var b=Math.floor(Math.random()*256);	
 var ans="rgb("+r+", "+g+", "+b+")";
 return ans; 
}

function changecolor(color) {
 for(var i = 0 ; i < squares.length ; i++ ){
   squares[i].style.background = color;	
 }
}

function randomcolor(){
 var ind=Math.floor(Math.random()*numSquares);	
 return colors[ind];
}
