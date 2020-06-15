// UI Logic

$(document).ready(function() {
  $('form#neighborhood').submit(function(event) {
    event.preventDefault();
    
    const numberInput = parseInt($("input#numberinput").val());
    console.log(numberInput)
    const result = numberToRoboger(numberInput);
    const result2 = rangeCreator(numberInput);
    console.log(result)


    $(".output").append(result, result2);
    $("#result").show();
    
  
  });
});


// Buisness Logic


function numberToRoboger(numberInput) {
  let parse = ("" + numberInput).split("");
  console.log(parse)
  if (parse[0] === "1") {
  return "Beep" 
  } else if (parse[0] === "2") {
  return "Boop"
  } else if (parse[0] === "3") {
  return "Won't you be my neighbor?"
  }
}

function rangeCreator(numberInput) {
  let finalArray =[];
  for (let index=0; index <= numberInput-1; index+=1){
    finalArray.push(index++);
}
}
