"use strict";
var Arithemtic;
(function (Arithemtic) {
    Arithemtic[Arithemtic["Add"] = 0] = "Add";
    Arithemtic[Arithemtic["Sub"] = 1] = "Sub";
    Arithemtic[Arithemtic["Div"] = 2] = "Div";
    Arithemtic[Arithemtic["Mul"] = 3] = "Mul";
})(Arithemtic || (Arithemtic = {}));
function calculateThis(a, b, operation) {
    // do the logic
    return 'this is the answer';
}
let answerOfThis = calculateThis(1, 2, Arithemtic.Add);
console.log(answerOfThis);
