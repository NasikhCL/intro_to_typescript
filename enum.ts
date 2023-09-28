enum Arithemtic {
    Add,
    Sub,
    Div,
    Mul
}


function calculateThis ( a: number, b: number, operation: Arithemtic){
    // do the logic
    return 'this is the answer'
}


let answerOfThis : string = calculateThis(1,2, Arithemtic.Add)
console.log(answerOfThis)