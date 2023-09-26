interface Person {
    name: string;
    age: number;
}
function greet(person:Person):string{
    return "hello "+ person.name + " your age is: " + person.age;
}

console.log(greet({name: "nasikh", age:23}))