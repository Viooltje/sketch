// Get value to work globaly 
// fix makeGrid
// More comments

// Selecting dom elements 
const gridContainer = document.querySelectorAll('.container');
const slider = document.getElementById('number-of-grid');

// Variable to update 
let value;

// Eventlisteners maybe


// Show the value of the range value 
let output = document.querySelector('.new-value');
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    value = this.value;
    output.innerHTML = `${value} x ${value}`;
    return value;
} 

slider.addEventListener('mouseup', makeGrid)
// Create the grid
function makeGrid(){
    for (i = 0; i < value; i++) {
    console.log('hoi');
    var grid = document.createElement('div');
    grid.className = 'grid';
    gridContainer.appendChild('grid');
    }

}






