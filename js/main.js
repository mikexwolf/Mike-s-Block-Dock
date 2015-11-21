$(document).ready(function(e){

		$(".block").draggable({
			snap: '.box',
    		snapMode: 'inner'
		});
		
		$( ".box" ).droppable(

		{
			accept:".block",
			drop: function (ev, ui) {

				$(this).append(droppedItem);

			}
		}

			);
});