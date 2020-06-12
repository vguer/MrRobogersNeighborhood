// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();

    const userInput = numberToRoboger($("input#numberinput").val());

    $("#form").hide();
    $('#output').append(numberToRoboger(userInput));
  });
});


// Buisness Logic

const userInput = ('#numberinput');
const inputNumbers = (userInput)
const robogerWords = ['', 'Beep', 'Boop', "Won't you be my neighbor?"];

function numberToRoboger (userInput) {
for (let index = 0; index <= index.length; index +=1)
  if (userInput === 1) {
    return robogerWords [1];
  } else return "no" 
  });
  console.log(numbertoRoboger);
};

/*
  if (inputNumbers > 100) {
    return "no"
  } else if (inputNumbers === 1) {
    return robogerWords[1]
  } console.log(inputNumbers)
}
*/
