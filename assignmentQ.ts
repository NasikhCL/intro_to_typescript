// SAME TYPE SWAP
// function swapItems<T>(a : T, b: T): [T,T]{

//     return [b , a]

// }

// const ans = swapItems(1,2)



// DIFFERENT TYPE SWAP
function swapItems<T,U>(a : T, b: U): [U,T]{

    return [b , a]

}

const ans = swapItems(1,"ONE")