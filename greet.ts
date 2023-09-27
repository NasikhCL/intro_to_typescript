interface PersonInt {
    name: string;
    age: number;
}
function greetHim(person:PersonInt):string{
    return "hello "+ person.name + " your age is: " + person.age;
}

console.log(greetHim({name: "nasikh", age:23}))