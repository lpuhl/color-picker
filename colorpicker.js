//On document load, append four (or more!) divs on to the DOM with jQuery, each colored with a different color. Each div needs to know which color it is.

$(document).ready(function() {
  $('#container').append('<div class ="color purple" id ="purple"></div');

  $('#container').append('<div class ="color green" id ="green"></div');
  $('#container').append('<div class ="color saddlebrown" id ="saddlebrown"></div');
  $('#container').append('<div class ="color papayawhip" id ="papayawhip"></div');

    var toPick;
    var randNumber = randomNumber(1, 4);
    switch (randNumber) {
      case 1:
        toPick = "purple";
      break;
      case 2:
        toPick = "forestgreen";
      break;
      case 3:
        toPick = "saddlebrown";
      break;
      case 4:
        toPick = "papayawhip";
      break;
    }
    $('#instructions').text(toPick);

  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
  }

  $("#container").on("click", ".color", function() {
    if ($(this).hasClass(toPick)) {
      alert("Awesome!");
    } else {
      alert("You suck!");
    }

  });


});
