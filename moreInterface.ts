interface AddressInterface {
    street: string;
    houseName: string;
    district: string;
    pincode: number;
}


interface StudentInterface{
    name: string;
    age: number;
    address: AddressInterface
}


function greetStudent(student: StudentInterface): string{
    return 'hello ' + student.name + ' '  + 'you are from ' + student.address.district
}


console.log(greetStudent
    ({
        name:'nasikh',
        age: 23,
        address:{
            street: 'chemnad',
            houseName: 'dream land',
            district: 'kasaragod',
            pincode: 671121
        }
    })
)


// interface can extends interface


interface CommonInterface{
    name: string;
    age: string;
    id: string
}



interface TeacherInterface extends CommonInterface{
    subjectExpertIn: string;
}

interface universityStudentInterface extends CommonInterface{
    class: string;
    division: string;
}