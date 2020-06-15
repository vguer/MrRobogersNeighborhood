// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input#numberinput").val());
    const result = rangeCreator(numberInput);

    $("#result").show();
    $(".output").append(result);
   
   // $(".output").hide();
  });
});


// Buisness Logic

function rangeCreator(numberInput) {
  let finalArray =[];
  for (let index=0; index <= numberInput; index+=1){
    finalArray.push(index);
    finalArray[index] = numberToRoboger(index);
}
  return finalArray
}

function numberToRoboger(index) {
  index.toString();
  let numbers = (""+index).split("");
  if (numbers[0] === "1") {
  return "Beep " 
  } else if (numbers[0] === "2") {
  return "Boop "
  } else if (numbers[0] === "3") {
  return "Won't you be my neighbor? "
  } else { 
  return index + (" ");
  }
}