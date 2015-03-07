
// $(function() {
	// clear the board
	$("#container").html("");

	// append divs to the main container the board will only be 20x20

		for ( var i = 0; i<20; i++ ) {
			for ( var j = 0; j<20; j++ ) {
				$("#container").append('<div id = "c_'+ i +'_'+ j +'" class = "boardCell"></div>');
			}
		}

		// this is where the snake starts
		$('#c_1_10').addClass('snakeCell');
		$('#c_2_10').addClass('snakeCell');
		$('#c_3_10').addClass('snakeCell');

		// randomly generate food 

		function generateFood(){
			var foodRow = Math.floor((Math.random()*19)+1);
			var foodColumn = Math.floor((Math.random()*19)+1);
			$('#c_'+foodRow+'_'+foodColumn).addClass('appleCell');
			food =''+foodRow+'_'+foodColumn;
		}

// });

