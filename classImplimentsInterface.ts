interface PersonInterface {
    name: string;
    age:number;
    greet(): string;
    throw(): string;
}

class Person implements PersonInterface{
   name: string;
   age: number;
    throw(){
        return "hi"
    }
    constructor(name:string, age: number){
        this.name  = name,
        this.age = age;
    }
    greet(){
        return "hello " + this.name
    }
}

const newP = new Person("nasikh", 23)
console.log(newP.greet())