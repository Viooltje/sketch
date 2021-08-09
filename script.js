// Selecting dom elements 
const gridContainer = document.querySelector('.container');
const slider = document.getElementById('number-of-grid');

// Variable to update 
let value;

// Show the value of the range value 
let output = document.querySelector('.new-value');
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    value = this.value;
    output.innerHTML = `${value} x ${value}`;
    return value;
} 

slider.addEventListener('mouseup', function(){ remove(gridContainer);});

// Remove previous grid
function remove(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}


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
}

// Color a grid 
