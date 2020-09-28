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


function person3(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        
        this.dob=new Date(dob);
        this.getBirthYear = function(){
            return this.dob.getFullYear();
        }

}
  const person1=new person3('Rathod','Tejas',28-10-2000);
  const person2=new person3('Ratho','Tejas',28-10);
  const person4=new person3('Rathod','Te',28);

  console.log(person1);
  console.log(person2.firstName);
  console.log(person4.dob);
  console.log(person4.getBirthYear());
