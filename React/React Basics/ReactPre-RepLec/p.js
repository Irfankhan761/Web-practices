// var
// 1 => function scope varaible
// 2 => can be updated and redeclared
// let
// 1 => block scope variable
// 2 => can be updated but not redeclared
// constt
// 1 => block scope variable
// 2 => can nor be updated and not redeclared

// var example
"use strict";
function fun1() {
  console.log("Var Scope");
  var var1 = 90;
  console.log(var1);
  if (true) {
    console.log(var1);
  }
}
// fun1();
// console.log(var1); //reference error not def

// let example
function fun2() {
  console.log("let scope");
  if (true) {
    let let1 = 90;
    console.log(let1); // 90
  }
  //   let1 = 1000; // ReferenceError: let1 is not defined
  //   console.log(let1);
}
// fun2();

// const example
function fun3() {
  console.log("const scope");
  if (true) {
    const const1 = 90;

    console.log(const1);
  }
  //   const1 = 99;
  //   console.log(const1); //reference error not def
}
// fun3();

// objects with function
const user = {
  name: "Irfan Khan",
  age: 20,
  greet: function () {
    console.log("Hi,...", this.name);
    console.log("my,...", user.age);
  },
};
// user.greet();
// 5. ES6 Arrow Functions vs traditional
// traditional function method
function myname(name) {
  const age = 24;
  return name + " is my name and my age is " + age;
}

var info = myname("irfan");
// console.log(info);

// arrow function method
const myname2 = (name) => {
  let age = 24;
  return name + "is my name and my age is " + age;
};
// console.log(myname2("khan"));

// 6. In-built Functions: map(), forEach(), and Promises
// map() function
const mymap = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = arr.map((item) => {
    return item * 2;
  });
  console.log(arr);
  console.log(arr2);
};
// mymap();

//forEach() function
const myforeach = () => {
  const arr = ["irfan", "khan", "osama", "mnk", "atta"];

  arr.forEach((item) => {
    console.log(item);
  });
  const arr2 = [1, 2, 23, 3, 21, 4, 77, 5, 32, 1];

  arr2.forEach((item) => {
    console.log(item * 2);
  });
};
// myforeach();
//Promises
