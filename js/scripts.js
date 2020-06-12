// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();

    const userInput = numberToRoboger($("input#inputnumber").val());

    $('#output').number(userInput);
  });
});


// Buisness Logic