// const elements = document.getElementById("elements");
// const sum = document.getElementById("sum");
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = 0;
// arr.forEach(element => {
//     res += element;
// });

// sum.innerHTML = res;



const elements = document.getElementById("elements");
const sum = document.getElementById("sum");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;

arr.forEach(element => {
    res += element;
    let temp = document.createTextNode(element + " ");
    elements.appendChild(temp);
});

sum.innerHTML = res;

// p1
function createArray() {
    const numberInput = document.getElementById("number");
    const display = document.getElementById("display");

    // Clear previous content
    display.innerHTML = "";

    // Get the number from the input
    const num = parseInt(numberInput.value);

    // Check if the input is a valid number
    if (isNaN(num)) {
      display.innerHTML = "Please enter a valid number.";
      return;
    }

    // Create the array based on the input
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    // Display the array
    display.innerHTML = "Array created: [" + arr.join(", ") + "]";
  }