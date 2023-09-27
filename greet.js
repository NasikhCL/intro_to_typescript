"use strict";
function greetHim(person) {
    return "hello " + person.name + " your age is: " + person.age;
}
console.log(greetHim({ name: "nasikh", age: 23 }));
