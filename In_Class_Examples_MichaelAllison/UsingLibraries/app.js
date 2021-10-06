
$(".item-common").each(function(i, obj) {

  let index = i + 1; //offset 0 index to 1 for grid

  //pass our returned DOM element to the jQuery selcetor to jQuery-ify it
  $(obj).css("grid-row", index);

  //every other row is in the other column
  if(index % 2 == 0){
    $(obj).css("grid-column", 2);
    $(obj).css("justify-self", "start");
  }
  else {
    $(obj).css("grid-column", 1);
    $(obj).css("justify-self", "end");
  }

})

AOS.init();
