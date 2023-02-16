//Figures out what people choose from drop down 
function changeChooser() { 
  console.log("We changed!");
  var choice = document.getElementById("carChoice");
  var options = choice.options;
  var counter = 0;

  while (counter < options.length) {
    if (options[counter].selected) {
      document.getElementById(options[counter].value).style.display = "";
    } else {
      document.getElementById(options[counter].value).style.display = "none";
    }
    counter += 1;
  }
}
// Changes Color by calling another function which generates random code
// Stores returned color variable inside newColor
// Changes background of color
// Calls giveYouBackground Color function with input parameter being newColor

function changeColor() {
  var newColor = generateRandomColor()
  document.body.style.background = newColor
  givesYouBackgroundColor(newColor)
}
// Generates random color
// Returns the random color and makes it all upper case
function generateRandomColor(){
  let maxVal = 0xFFFFFF; 
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}
//Displays Current Background Color
//Takes newColor String as Parameter & Displays to viewer.
function givesYouBackgroundColor(newColor){
  var theCurrentColor = document.getElementById("paragraphIdColor")
  theCurrentColor.innerHTML = newColor;

}