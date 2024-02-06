let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    res += num;
    let textNode = document.createTextNode(num + " ");
    document.getElementById("spn").appendChild(textNode);
}

document.getElementById("sum").innerHTML = "Type: " + typeof(res) + ", Sum: " + res;
