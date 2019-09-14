// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

     // Variables
  
	const tableElement = document.querySelector('#pixelCanvas');
	const colorPixel = document.querySelector('#colorPicker').value;
    

    // User submite height and width size function call
   
         function makeGrid(height, width) {
	           

	       for (let row = 0; row < height; row++ ) {
	       	   let tableR = document.createElement("tr");
	        

	        for (let cell = 0; cell <  width; cell++) {
	            let tableC = document.createElement("td");
	            tableR.appendChild(tableC);
	          }
           tableElement.appendChild(tableR);
	   }

};
          
           // User Select color input
           
		    tableElement.addEventListener('click', (e) => {
		     document.querySelector('#colorPicker');
		     e.target.style.backgroundColor = colorPicker.value;
		    });
		

             
     

        let sizePicker = document.getElementById('sizePicker').addEventListener('submit', (e) => {
		    e.preventDefault();
		    tableElement.innerHTML = "";
	  	   let gridHeight = document.getElementById("inputHeight").value;
	       let gridWidth = document.getElementById("inputWidth").value;
	        
	      makeGrid(gridHeight, gridWidth);  

        

      });

