//but can be use like this, type can refer to another interface and vice versa

interface AddressInt{
    street: string;
    district: string;
    pincode: number;
    

}
type PersonType = {
    name: string;
    age:number;
    address: AddressInt
}