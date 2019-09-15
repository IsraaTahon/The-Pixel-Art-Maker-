// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

     // Variables
  
	const tableElement = document.querySelector('#pixelCanvas');
	const colorPixel = document.querySelector('#colorPicker').value;
    

    // Build table from form's input data
   
         function makeGrid(height, width) {
	           

	       for (let row = 0; row < height; row++ ) {   // Build table rows
	       	   let tableRow = document.createElement("tr");
	        

	        for (let cell = 0; cell <  width; cell++) {     // Build table columns        
	            let tableCell = document.createElement("td");
	            tableRow.appendChild(tableCell);
	          }
           tableElement.appendChild(tableRow);
	   }

};
          
           // User Select color input
           // Aplying color to td's background
           
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

