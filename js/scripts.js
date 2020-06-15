// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();
    
    const numberInput = parseInt($("input#numberinput").val());
    console.log(numberInput)
    const result = numberToRoboger(numberInput);
    console.log(result)
    // $("form").hide();


    $(".output").append(result);
    $("#result").show();
  
  });
});


// Buisness Logic
function numberToRoboger(numberInput) {
  if (numberInput === 1) {
  return "Beep" 
  } else if (numberInput === 2) {
  return "Boop"
  } else if (numberInput === 3) {
  return "Won't you be my neighbor?"
  }
}




/*
const userInput = ('#numberinput');
const inputNumbers = (userInput)
const robogerWords = ['', 'Beep', 'Boop', "Won't you be my neighbor?"];

function numberToRoboger (userInput) {
for (let robogerWords = 0; robogerWords <= robogerWords.length; robogerWords +=1)
  if (userInput === 1) {
    return robogerWords [1];
  } else return "no" 
  };
  console.log(userInput);



  if (inputNumbers > 100) {
    return "no"
  } else if (inputNumbers === 1) {
    return robogerWords[1]
  } console.log(inputNumbers)
*/