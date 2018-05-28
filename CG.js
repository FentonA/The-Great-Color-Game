var colors = genereateRandomColors(6);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent=== "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}
function reset(){
	colors = genereateRandomColors(numSquares);
	//pick a new Random color from array 
	pickedColor = pickColor();
	// change colors of squares
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent ="";
	this.textContent = "New Colors"
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = genereateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display ="none";
// 		}
// 	}
// })
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares
// 	colors = genereateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length; i++){
	
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display ="block";
// 		}
// })

resetButton.addEventListener("click", function(){
	reset();
	// //generate all new colors
	// colors = genereateRandomColors(numSquares);
	// //pick a new Random color from array 
	// pickedColor = pickColor();
	// // change colors of squares
	// colorDisplay.textContent = pickedColor;

	// messageDisplay.textContent ="";
	// this.textContent = "New Colors"
	// for(var i = 0; i<squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
})


//add initial colors to squares
for (var i =0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square 
		var clickedColor = this.style.backgroundColor;

		//compare color of pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct"
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
		this.style.backgroundColor ="#232323";
		messageDisplay.textContent = "Try Again"
		}

	});
}

// will change colors in each square and h1 to the correct color when picked 
function changeColors(color){
	//loop through all squares 
	for (var i = 0; i<squares.length ; i++) {
	 //change each color to match given color
	 squares[i].style.backgroundColor = color; 
	}

}

//function will initialize all colors for square 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//will generate 6 random colors
function genereateRandomColors(num){
	//make an array 
	var arr = []
	// add num ranom colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColor())
		// get random color and push into arr

	}
	// return that arra
	return arr;
}

function randomColor(){
	//picka "red from 0 -255"
	var r =Math.floor(Math.random()*256);
	// pick a green form 0- 255
	var g = Math.floor(Math.random()*256);
	// pick a green from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}




/*Important thing to note:

Never have a function hold the same name as a variable */