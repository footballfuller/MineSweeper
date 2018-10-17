var grid =  [[0, 1, 19, 1, 0, 15, 15, 15, 15] , 
			[15, 2, 1, 1, 0, 15, 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[19, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			[15, 15, 15, 15, 15, 15 , 15, 19, 19] ,
			[15, 15, 15, 15, 15, 15 , 15, 19, 3] ];
			
			

// regular square is 15. flag is 16. bomb is 17. square with hidden bomb is 18. flag with bomb under is 19


var newGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];


var blankGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];
			
			
var gameLost=false;
var gameWon=false;
var bombsLeft= 6;
var time= 20;




function adjacentBombs(){
	//for the square count how many squares have a bomb  adjacent to it
}

function clickSquare(){
	//check if square has been clicked then see if bomb is under square,if so end game(lose), if not change grid number to represent new icon with number revealing adjacent bombs
}

function placeFlag(){
	//places flag on square and changes content number based on if there is a bomb there. if there is bomb there decrease bombs left by one, if bombs left is zero end game(win)
}

function clicked(content){  //if the square has been clicked previously
	if(content==15){
		return false;
	}else if(content==18){
		return false;
	}else if(content==16){
		return false;
	}else if(content==19){
		return false;
	}else{
		return true;
	}
}

function hasBomb(content){  //if square has a bomb 
	if(content==18){
		return true;
	}else if(content==19){
		return true;
	} else{
		return false;
	}
}


function getSquare(row, col) { 
   return grid[row][col];
}

function getNewSquare(row,col){
	return newGrid[row][col];
}

function getBlankSquare(row,col){
	return blankGrid[row][col];
}


function myFunction(row,col) { 
console.log( row,col);

//var a = newGrid.indexOf( document.getElementById("Img"));
   // document.getElementById("squareLocation").innerHTML = a;

  // addHTML("squareLocation", a);
addHTML("squareLocation", row + " " + col + " " + "|");

newGrid[row][col]= "0";
reDrawGame();
}

function newGame(){
	newGrid =  [[15, 15, 18, 15, 15, 15, 15, 15, 15] , 
			   [15, 15, 15, 15, 15, 15, 15, 15, 15] ,
			   [15, 15, 18, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 15, 15, 15 , 15, 15, 15] ,
			   [15, 15, 15, 18, 15, 15 , 15, 15, 15] ,
			   [18, 15, 15, 15, 15, 15 , 15, 15, 18] ,
			   [15, 15, 18, 15, 15, 15 , 15, 18, 15] ];
	
    setHTML("squareLocation", ""); 	
	reDrawGame();
}

function enterName2(){
	alert("key pressed");
	var person =document.getElementById("name").addEventListener("onkeypress", function(event) { event.preventDefault(); 
	if (event.keyCode === 13) { 
	document.getElementById("name").click();
	addHTML("nameContainer", person); 
	} };
	
	
	
}
function search(ele) { if(event.keyCode == 13 ) { alert(ele.value); } }

//function myFunction(row,col){
//var cell= document.getElementById( "Img" ).onclick = function() {
    // img clicked
	//alert(cell.value);
//};
//}


// ========= MINI GUI LIBRARY =================

function setHTML(id, html) {
    var element = document.getElementById(id);
    element.innerHTML = html;
}

function addHTML(id, html) {
    var element = document.getElementById(id);
    element.innerHTML = element.innerHTML + html;
}

function setClickHandler(id, func) {
    var element = document.getElementById(id);
    element.onclick = func;
}

function getInput(id) {
    return document.getElementById(id).value;
}

// ============================================

