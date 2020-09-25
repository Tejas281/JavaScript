const person ={

        firstName:'Tejas',
        lastName:'Rathod',
        age:23,
        hobbies: ['sing','dance'],
        address:{
            city:'bhavnagar',
            street:'krishna town',
            state:'gujju'
        }

}
person.email='tejas1188@gmail.com';

console.log(person);
alert(person);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

function addnumber(num1,num2){

    console.log(num1+num2);
}
addnumber(3,4);