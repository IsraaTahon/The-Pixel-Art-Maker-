/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
const tableElement = document.getElementById("pixelCanvas");
const inputHeight = document.getElementById('#inputHeight');
const inputWidth = document.getElementById('#inputWidth');
const colorPicker = document.querySelector('#colorPicker').value;

/**
 * A grid should appear when
 * users submit width and height
 */

function makeGrid(height, width) {

 for (let i = 0; i < height; i++) { // Build table rows
  let tableRow = document.createElement("tr");

  for (let j = 0; j < width; j++) { // Build table columns        
   let tableCell = document.createElement("td");
   tableRow.appendChild(tableCell);
  }
  tableElement.appendChild(tableRow);
 }

};

// User Select color input
// Aplying color to td's background

function colorPixel(e) {
 let colorPicker = document.querySelector("#colorPicker").value;
 e.target.style.backgroundColor = colorPicker;
});



// Submit button

const startGame = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', (e) => {
 e.preventDefault(); //prevent form from submitting

 tableElement.innerHTML = "";

 let width = document.getElementById("inputWidth").value;
 let height = document.getElementById("inputHeight").value;


 makeGrid(height, width);



});
