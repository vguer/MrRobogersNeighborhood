// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();
    
    const numberInput = parseInt($("input#numberinput").val());
    console.log(numberInput)
    //const result = numberToRoboger(numberInput);
    const result = rangeCreator(numberInput);
    console.log(result)


    $(".output").append(result);
    $("#result").show();
    
  
  });
});


// Buisness Logic


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


function rangeCreator(numberInput) {
  let finalArray =[];
  for (let index=0; index <= numberInput; index+=1){
    finalArray.push(index);
    finalArray[index] = numberToRoboger(index);
}
  return finalArray
}
