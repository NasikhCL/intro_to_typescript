"use strict";
function greetStudent(student) {
    return 'hello ' + student.name + ' ' + 'you are from ' + student.address.district;
}
console.log(greetStudent({
    name: 'nasikh',
    age: 23,
    address: {
        street: 'chemnad',
        houseName: 'dream land',
        district: 'kasaragod',
        pincode: 671121
    }
}));
