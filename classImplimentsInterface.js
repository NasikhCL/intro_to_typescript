"use strict";
class Person {
    throw() {
        return "hi";
    }
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    greet() {
        return "hello " + this.name;
    }
}
const newP = new Person("nasikh", 23);
console.log(newP.greet());
