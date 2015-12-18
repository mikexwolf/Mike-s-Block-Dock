
var time = 60;
var tick = function() {
	time--;
	$('.counter').text(time);
	if (time == 0) {
		clearInterval(counter);
		$("#timer").empty();
		$("h1").empty();
		$("#blocks").empty();
		$("#boxes").empty();
		$(".play").hide();
		$(".end").fadeIn();
		$(".over").fadeIn();
	}
};

var counter;

var letters = [
	// ["A", "N", "A", "G", "R", "A", "M"],
	// ["R", "A", "I", "N", "B", "O", "W"],
	// ["C", "I", "R", "C", "U", "S"],
	["M", "A", "G", "I", "C"],
	["W", "O", "R", "D"],
	["F", "L", "O", "W", "E", "R"],
	["D", "R", "A", "M", "A"],
	["F", "R", "I", "E", "N", "D"],
	["D", "O", "O", "R"]
];

var playgame = function(e){

	$(".end").hide();
	$(".over").hide();
	$(".win").hide();
	$('.counter').text(time);

	counter = setInterval(tick, 2000);

	if (letters.length <= 0) {
		$("#timer").empty();
		$("h1").empty();
		$("#blocks").empty();
		$("#boxes").empty();
		$(".block").empty();
		$(".box").empty();
		$(".over").removeClass("over");
		$(".end").removeClass("end");
		$(".play").removeClass("play");
		$(".win").show();
	}	

	var word = letters[Math.floor(Math.random() * letters.length)];

	$(".block").each( function ( i ) {
    	$( this ).text( word[i] );
	});


	for (var i = 0; i < word.length; i++){
		$('#boxes').append($('<div class="box" data-letter="'+word[i]+'"></div>'));
	}

	word.sort(function() { return 0.5 - Math.random() });

	for (var i = 0; i < word.length; i++) {
		var value = $('#blocks').append($('<div class="block" data-letter="'+word[i]+'"></div>').text(word[i]));
	}

	var index = letters.indexOf(word);
	letters.splice(index, 1);

    $(".block").draggable( {
		containment: 'document',
		snap: '.box',
		snapMode: 'inner'
	});

	$(".box").droppable( {
	    drop: dropEvent,
	    accept: ".block"
  	});

	function dropEvent( event, ui ) {
	  	var draggableId = ui.draggable.attr("data-letter");
	  	var droppableId = $(this).attr("data-letter");
	  	var draggable = ui.draggable;
	  	if (draggableId === droppableId) {
	  		$(this).append(draggable);
	  		for (var i = 0; i < word.length; i++) {
	  			if (draggableId == word[i]) {
	  				word.splice(i, 1);
	  				console.log(word);
	  				break;
	  			}
	  		}
	  		if (word.length <= 0) {
	  			console.log("WINNER!");
	  			$("#boxes").empty();
				$("#blocks").empty();
	  			playgame();
	  		}
	  	};
	}
	
};
	$('.skip').click(function(){
		$("#boxes").empty();		
		$("#blocks").empty();
		playgame();
	});

$(document).ready(playgame);