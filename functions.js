function greet(name) {
  return "Hello " + name;
}
const add = (a, b) => a + b;

function outer() {
  let message = "Scoped";
  function inner() {
    console.log(message);
  }
  inner();
}

function withCallback(callback) {
  callback("This is a callback!");
}

function extractedFunction(msg) {
  console.log(msg);
}
withCallback(extractedFunction);