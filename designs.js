/**
  * @desc create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

	/**
	 * A grid should appear when
	 * users submit width and height
	 */
       
        
         function makeGrid(height, width) {
	           

	    for (let row = 0; row < height; row++ ) {   // Build table rows
	        let tableR = document.createElement("tr");
	        
                      for (let cell = 0; cell <  width; cell++) {     // Build table columns        
		          let tableC = document.createElement("td");
			  tableR.appendChild(tableC);
				}
                      tableElement.appendChild(tableR);
	      }

};
          
           // User Select color input
           // Aplying color to td's background
                    const tableElement = document.querySelector('#pixelCanvas');
                    const colorPicker = document.querySelector('#colorPicker');
		    tableElement.addEventListener('click', (e) => {
		     document.querySelector('#colorPicker');
		     e.target.style.backgroundColor = colorPicker.value;
		    });
		

             
            // Submit button

        let sizePicker = document.getElementById('sizePicker').addEventListener('submit', (e) => {
		    e.preventDefault();         //prevent form from submitting
		    tableElement.innerHTML = "";
	  	   let gridHeight = document.getElementById("inputHeight").value;
	       let gridWidth = document.getElementById("inputWidth").value;
	        
	      makeGrid(gridHeight, gridWidth);  

        

      });

