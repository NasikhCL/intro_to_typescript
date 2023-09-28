interface User {
    name: string;
    age: number
}

type Users = User[]


//


type numberOrStringArr = (string | number)[]

function getFirstElement(arr: numberOrStringArr ){
    return arr[0]
}

function getSecondElement(arr: (number | string)[]){
    return arr[0]
}


let ans1 = getFirstElement([1,2,3])
let ans2 = getFirstElement(["one","two","three"])
console.log(ans1)
console.log(ans2)