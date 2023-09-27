interface Circle{
    radius: number;
}


interface Square{
    side: number;
}


interface Rectangle{
    height: number;
    width: number;
}

// function renderShape(input: Rectangle | Square | Circle){
//     console.log('rendered');
// }


// function calcArea(input: Rectangle | Square | Circle){

// }


//ors
type  Shape = Rectangle | Square | Circle;

//union
// type  Shape = Rectangle & Square &  Circle;

function renderShape(input: Shape){
    console.log('rendered');
}


function calcArea(input: Shape){
    console.log('rendered area');
}

