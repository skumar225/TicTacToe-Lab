
window.addEventListener("load", function () {  

//Alternate X and O on clicks
	var playerMove = document.getElementsByClassName("square");
	for (var i = 0; i < playerMove.length; i++) {
		// playerMove[i].style.backgroundColor = "blue";
		playerMove[i].addEventListener("click", moveMade); //onclick, execute function that displays X or O

	}	
});
	function moveMade (event) {
		if (event.target.innerText === "") {
			event.target.innerText = turn; 
			event.target.style.backgroundColor = "#D8D8D8";
			anotherMove(); 
		}
		
	}
	function anotherMove (event) {
		if (turn === "x") {
			turn = "o";

		}
		else {
			turn = "x";
		}
	}
	
	var turn = "x"; 


	var reset = document.getElementById("reset");
	reset.addEventListener("click", clear);

	function clear () {
		var clearSquare = document.getElementsByClassName("square");

		for (var i = 0; i < clearSquare.length; i++) {
			clearSquare[i].innerText = "";
			clearSquare[i].style.backgroundColor = "#FF0040";
		}

	}






/*
## Bonus
* Display a message to indicate which turn is about to be played.
* After the necessary moves have been played, stop game and alert the
  winner if one player ends up winning with three in a row.
    * Hint: Determine a set of winning combinations. Check those
      combinations on the board contents after every move.

*/