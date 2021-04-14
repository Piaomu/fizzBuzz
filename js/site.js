//Prints numbers to the page
function printNumbers() {
  let numbers = getRange();
  displayData(numbers);
}

//Gets the range of numbers
function getRange() {
  let numberArray = [];

  //sets parameters for the table from 1 to 100
  for (let i = 1; i <= 100; i++){
    numberArray.push(i);
  }
  return numberArray;
}

//Connect JavaScript to the table in the HTML page
function displayData(numbers){
  let numOne = parseInt(document.getElementById("numOne").value);
  let numTwo = parseInt(document.getElementById("numTwo").value);
  const rowTemplate = document.getElementById("Data-Template");
  const resultsBody = document.getElementById("resultsBody");
  let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;

  //clear the table
  resultsBody.innerHTML = "";

  //loop over every element in the numbers array (rows)
  //Get the value and write it to the page
  for (let i = 0; i < numbers.length; i+=colCount) {
    let dataRow = rowTemplate.content.cloneNode(true);

    //Return an array of columns from the HTML template
    let cols = dataRow.querySelectorAll("td");
    
    //Loop over the columns and create fizzBuzz conditions
    for (let colIndex = 0; colIndex < cols.length; colIndex++) {
      let value = numbers[i + colIndex];
      if(typeof value === "undefined") {
        value = "";
        //if value is divisible by both user's numbers, add "fizzBuzz" class and display string "fizzBuzz"
      } else if( ( (value % numOne) == 0) && (value % numTwo) == 0){
        cols[colIndex].classList.add("fizzBuzz");
        value = "fizzBuzz";

        //if value is divisible by only user's numOne, add "fizz" class and display string "fizz"
      } else if((value % numOne) == 0) {
        cols[colIndex].classList.add("fizz");
        value = "fizz";

        //if value is divisible by only user's numTwo, add "Buzz" class and display string "Buzz"
      } else if( (value % numTwo) == 0) {
        cols[colIndex].classList.add("buzz");
        value = "Buzz";
      }
      //Note: td's use .textContent to add the content to the td field.
      cols[colIndex].textContent = value;
    }
      // Add the row to the page
      resultsBody.appendChild(dataRow);
  }
}