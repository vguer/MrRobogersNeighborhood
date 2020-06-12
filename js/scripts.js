// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();

    const userInput = numberToRoboger($("input#numberinput").val());

    $("form").hide();
    $('#output').append(numberToRoboger(userInput));
  });
});


// Buisness Logic

const inputNumbers = number.split("");
const robogerWords = ["", "Beep", "Boop", "Won't you be my neighbor?"];

function numberToRoboger (inputNumbers) {
  if (number > 100) {
    return "no"
  } else if (inputNumbers === 1) {
    return robogerWords[1]; 
  }
}




 
  
  }
}