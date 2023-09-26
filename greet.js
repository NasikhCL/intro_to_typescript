"use strict";
function greet(person) {
    return "hello " + person.name + " your age is: " + person.age;
}
console.log(greet({ name: "nasikh", age: 23 }));
