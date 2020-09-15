const name="Tejas";
const age="30";
const number=3.43;
const iscool=true;
const x= null;
const y=undefined;
let z;
const e="kem,chho,majama,ne"
console.log(typeof name);
console.log(typeof age);
console.log(typeof number);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof y);
//concatenation
console.log('My  '+ name+ 'is and I Am'+ age);
//temple String 
console.log(`my ${name} is and i am ${age}`);
const hello=(`my ${name} is and i am ${age}`);
console.log(hello);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,3));
console.log(name.split(''));
console.log(e.split(','));
//array hold thats multipal values
const numbers =new Array(1,2,3,4,4,5);
console.log(numbers);
const frutes=['a','c','cs'];
console.log(frutes); 
console.log(frutes[2]); 
 frutes[3]='asdas';
 console.log(frutes);   
 frutes.push('mango');
 console.log(frutes);   
 frutes.unshift('strawberries');
 console.log(frutes);   
 frutes.pop("sdsdas");
 console.log(frutes);   
 console.log(Array.isArray( frutes));
 console.log(frutes.indexOf('c' ));   
    
 
