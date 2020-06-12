// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();

    const userInput = $("#numberinput").val();

    $("form").hide();
    $('#output').append(numberToRoboger(userInput));
  });
});


// Buisness Logic

const numberToRoboger = ["", "beep" , "boop" , "Won't you be my neighbor?"]



/*
const numberToRoboger = (str) => {
  const newStrArray = str.split("");

  for (i=0; i < newStrArray.length; i++) {
    const charArray = newStrArray[i].split("");

    charArray.forEach((char, index) => {
      if (char === 1) {
        charArray[index] = "Beep";
      }
    });
 
    newStrArray[i] = charArray.join("");
  }
    newString = newStrArray.join(" ");
    newString = newString.slice(1);

    return newString
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
}
*/
