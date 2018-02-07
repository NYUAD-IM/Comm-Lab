$("#special-text").show();

$("#cast-button").click(function(){
	console.log("You clicked the cast button!");
	$(".text-container").hide();
	$("#cast-text").show();

	$("#the-header").html("THE CAST!!!!!!");
});

$("#reviews-button").click(function(){
	console.log("You clicked the reviews button!");
	$(".text-container").hide();
	$("#reviews-text").show();

	$("#the-header").html("REVIEWS!!!!!!");

});

$("#bts-button").click(function(){
	console.log("You clicked the reviews button!");
	$(".text-container").hide();
	$("#bts-text").show();

	$("#the-header").html("BTS!!!!!!!!!!");

	$('#extra-text').fadeIn(3000);


});





