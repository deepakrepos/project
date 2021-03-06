let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay= document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colordisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    //change colors of square
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "blueviolet";
})

colorDisplay.textContent= pickedColor;

for(let i=0; i<squares.length; i++)
{    
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = (this.style.backgroundColor);
        //compare color to clicked square
        if(clickedColor === pickedColor){
            messageDisplay.textContent= "Correct";
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColor(color){
    //loop through all colors
    for(let i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //repeat num times
    for(let i=0; i<num; i++){
        //get random colors and push it into arr
        arr.push(randomcolor());
    }
    //return that array
    return arr;
}

function randomcolor(){
    //pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}