// const number=document.getElementById("number").value;
// const showtable=document.getElementById("showtable");
// const table=()=>{
//     for(let i=1;i<=10;i++){
//         res=number*i;
//         const node=document.createTextNode(number+" x "+ i+ " = " +res+" ")
//         showtable.appendChild(node)
//     }

// }

// const table = () => {
//     const number = parseInt(document.getElementById("number").value); // Convert input value to integer
//     const showtable = document.getElementById("showtable");
//     showtable.innerHTML = ''; // Clear previous content
//     for (let i = 1; i <= 10; i++) {
//         let res = number * i; // Declare 'res' variable
//         showtable.innerHTML += number + " x " + i + " = " + res + "<br>";
//     }
// };
const table = () => {
    const number = parseInt(document.getElementById("number").value); // Convert input value to integer
    const showtable = document.getElementById("showtable");
    showtable.innerHTML = ''; // Clear previous content
    for (let i = 1; i <= 10; i++) {
        let res = number * i; // Declare 'res' variable
        showtable.innerHTML += `${number} x ${i} = ${res}<br>`;
    }
};