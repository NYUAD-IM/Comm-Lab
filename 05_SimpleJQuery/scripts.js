// jQuery Example
//	(1) Select for the item
//	in jQuery, use the '$' followed by the selector inside parantheses

//	(2) Attach event listener
//	use the dot syntax to sepcify the type of event listener
//	in this case, it is a click

//	(3) Define callback function
//	define an 'anonymous function' to be called when the event listener occurs
//	in javascript, this referred to as a 'callback' function
//	callback functions are functions that will occur at a later point in time
//	in this case, the callback function will run when a click occurs

//button 1
$('#button1').click(()=>{
	$('.content').hide();
	$('#button1-text').show();
});

//button 2
$('#button2').click(()=>{
	$('.content').hide();
	$('#button2-text').show();
});

//button 3
$('#button3').click(()=>{
	$('.content').hide();
	$('#button3-text').show();
});
