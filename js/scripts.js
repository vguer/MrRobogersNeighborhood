// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input#numberinput").val());
    const result = rangeCreator(numberInput);

    $("#result").show();
    $(".output").text(result);    
  });
});


// Buisness Logic

function rangeCreator(numberInput) {
  let finalArray =[];
  for (let index=0; index <= numberInput; index+=1) {
    finalArray.push(index);
    finalArray[index] = numberToRoboger(index);
}
  return finalArray;
}

function numberToRoboger(index) {
  index.toString();
  let numbers = (""+index).split("");
  if (numbers.includes("3")) {
  return " Won't you be my neighbor?" 
  } else if (numbers.includes("2")) {
  return " Boop!"
  } else if (numbers.includes("1")) {
  return " Beep!"
  } else { 
  return (" ") + index;
  }
}