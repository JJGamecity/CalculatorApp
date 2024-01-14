

const display = document.getElementById("display")

const filePath = '../colorChanges/colors.txt';
const body = document.querySelector("body")
const calcOBJ = document.querySelector(".calculator")
const calcMain = document.querySelector(".main-frame-calculator")
const calcItems = document.querySelectorAll(".calc-item")
const orange = document.querySelectorAll(".orange-circle")
const lightGrey = document.querySelectorAll(".light-grey-circle")



// Fetch the file
let colors = {}
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}`);
    }
    return response.text();
  })
  .then(jsonString => {
    const jsonObject = JSON.parse(jsonString);
    
    colors = jsonObject;
  })
  .catch(error => {
    console.error(error);
  });

function changeColor(color) {
  body.style.backgroundColor = colors[color].body;
  display.style.backgroundColor=colors[color].calc;
  calcMain.style.backgroundColor=colors[color].calc;
 calcItems.forEach(element=>{
  element.style.backgroundColor= colors[color].restOf;
 })
 orange.forEach(element=> {
  element.style.backgroundColor=colors[color].orange;
 }) 

  lightGrey.forEach(element =>{
    element.style.backgroundColor=colors[color].lightGrey;
  })
  calcOBJ.style.backgroundColor=colors[color].calc;
  console.log(colors[color])
}
function appendToDisplay(input) {
  display.value+=input;
}

function turnNegative() {
  try {
    if (display.value >0) {
      display.value = -Math.abs(display.value);
    }
    else {
      display.value = Math.abs(display.value)
    }
  }

  catch {
    display.value="ERROR (Clear)"
  }
}

function turntoPercent() {
  try{
    display.value=display.value/100;
  }

  catch{ 
    display.value="ERROR (Clear)"
  }
}

function clearDisplay() {
  display.value=""
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
 catch {
    display.value = "ERROR (Clear)";
 }
}

