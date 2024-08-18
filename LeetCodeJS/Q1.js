// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = () => {
  return function () {
    return "HelloWorld";
  };
};

const f = createHelloWorld();
console.log(f());
console.log(f({}, null, 42));
