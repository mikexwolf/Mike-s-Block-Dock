// var main = function() {  

$(document).ready(function(e){


	var letters = [
		["A", "N", "A", "G", "R", "A", "M"],
		["W", "O", "R", "D"],
		["D", "R", "A", "M", "A"],
		["D", "O", "O", "R"]
	];
	
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
  		$(this).append(droppedItem);
  	};
	}
	
});

// };
// $(document).ready(main);