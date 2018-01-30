console.log("Page is loading 1");

$(document).ready(function(){

console.log("Page is loading 2");

$('#button-one').click(function(){
	$('.info').hide();
	$('#info-one').show();
});

$('#button-two').click(function(){
	$('.info').hide();
	$('#info-two').show();
});

$('#button-three').click(function(){
	$('.info').hide();
	$('#info-three').show();
});

});

console.log("Page is loading 3");
