function greet(greeting = "Ciao") {
  if (greeting === "Hello") {
    return function greetWithHello(name) {
      return `${greeting}, ${name}`;
    };
  } 
  else if (greeting === "Bye") {
    return function greetWithBye(name) {
      return `${greeting}, ${name}`;
    };
  }
  else if (greeting === "Hi") {
    return function greetWithHi(name) {
      return `${greeting}, ${name}`;
    };
  }
  //AGGIUNTA
  else {
    return `${greeting}`;
  }
}

const greetWithHello = greet("Hello");
const greetWithBye = greet("Bye");
const greetWithHi = greet("Hi");

// AGGIUNTA
const ciao = greet();

const greetPaulWithHello = greetWithHello("Paul");
const greetPaulWithHi = greetWithHi("Paul");
const greetJohnWithBye = greetWithBye("John");
const greetSimonWithHello = greetWithHello("Simon");

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);

//AGGIUNTA
console.log("Default: " + ciao);


