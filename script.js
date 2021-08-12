// Selecting dom elements 
const gridContainer = document.querySelector('.container');
const slider = document.getElementById('number-of-grid');
const colorInput = document.querySelector('#color');
const eraser = document.querySelector('#eraser');

// Variable to update 
let value = slider.value;
let block;
let color = colorInput.value; 

// Load first grid
document.addEventListener('DOMContentLoaded', makeGrid);


// Show the value of the range value 
let output = document.querySelector('.new-value');
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    value = this.value;
    output.innerHTML = `${value} x ${value}`;
    return value;
} 

// Remove previous grid
slider.addEventListener('mouseup', function(){ remove(gridContainer);});

function remove(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

// Change color of background
function changeColor(e){
    e.target.style.background = color;
}    

//Change pen color
colorInput.addEventListener('input', ()=>{
    color = colorInput.value;
    console.log(color);
})

slider.addEventListener('mouseup', makeGrid);
// Create the grid
function makeGrid(){
    remove(gridContainer);
    let gridTotal = value**2;
    gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    for (i = 0; i < gridTotal; i++) {
    var grid = document.createElement('div');
    grid.classList.add('grid');
    gridContainer.appendChild(grid);
    }
    // Color change maybe 
    block = document.querySelectorAll('.grid'); //gets node list well 
    block.forEach((block) => block.addEventListener('mouseover', changeColor));
}

// Eraser
eraser.addEventListener('click', makeGrid);
