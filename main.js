var speed = 500; 
var direction = 1;
// position the snake on the board 
var snake = ["3_10","2_10","1_10"];
var food = "";

function myInit() {
	direction = 1;
	snake = ["3_10","2_10","1_10"];
	food = "";
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
		generateFood();
		setTimeout(function(){gameUpdate();}, speed);
}
myInit();

		// randomly generate food 
function generateFood(){
	var foodRow = Math.floor((Math.random()*19)+1);
	var foodColumn = Math.floor((Math.random()*19)+1);
	// this adds a class to the above appended cells
	$('#c_'+foodRow+'_'+ foodColumn).addClass('appleCell');
	var food =''+foodRow+'_'+foodColumn;
}

function gameUpdate() {
//  as snake moves remove the tail and then remove the class of that tail
		var tail = snake.pop();
		$('#c_' + tail).removeClass('snakeCell');
		console.log(snake[0]);
		// change the position of the snake 
		var hh = snake[0];
		var rc = hh.split("_");
		var r = parseInt(rc[0]);
		var c = parseInt(rc[1]);
		switch(direction){
			case 1: 
				r = r + 1; //bottom
				break;
			case 2:
				c = c - 1; //left
				break;
			case 3:
				r = r - 1; //top
				break;
			case 4:
				c = c + 1; //right
				break;
			}

// add the new direction to the front of the snake with unshift
			var nn = "" + r + "_" + c;

			// when the head of the snake eats food, increase length, generate another food cells

			if ( nn === food ) {
				snake.push(tail);
				$('#c_'+tail).addClass('snakeCell');
				$('#c_'+food).removeClass('appleCell');
				generateFood();
			}
			snake.unshift(nn);
			$('#c_'+ nn).hasClass('snakeCell');
			if ( c<0 || r<0 || c>19 || r>19 || $('#c_'+ nn).hasClass('snakeCell') ) {
				alert("you lost");
				return;
			}
			$('#c_'+ nn).addClass('snakeCell');
			setTimeout(function(){gameUpdate();},speed);
		}
// capture keyboard events for snake direction using arrow keys
			$(document).keydown(function(event) {
				console.log(event);
				if ( event.keycode === 37 ) {
					direction = 2;
				} else if  ( event.keycode === 38 ) {
					direction = 3;
				} else if ( event.keycode === 39 ) {
					direction = 4;
				} else if ( event.keycode === 40 ) {
					direction = 1;
				}
			});



