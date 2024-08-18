const arr = [1, 2, 3, 2, 1, 21, 121, 21, 21, 34, 65, 4321, 21, 21, 2323];
let max1 = -Infinity;
let max2 = -Infinity;
let min1 = Infinity;
let min2 = Infinity;
arr.forEach((element) => {
  if (element > max1) {
    max2 = max1;
    max1 = element;
  } else if (element > max2 && element < max1) {
    max2 = element;
  }
  if (element < min1) {
    min2 = min1;
    min1 = element;
  } else if (element > min1 && element < min2) {
    min2 = element;
  }
});
console.log(max1, max2);
console.log(min1, min2);
