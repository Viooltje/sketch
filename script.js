// Show the value of the range value 
const slider = document.getElementById('number-of-grid');
let output = document.querySelector('.new-value');
output.innerHTML = `${slider.value} x ${slider.value}`;

let value; 

slider.oninput = function() {
    value = this.value;
    output.innerHTML = `${value} x ${value}`;
}

// Create the grid




