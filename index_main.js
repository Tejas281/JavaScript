//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));


//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('item'));

//const item = document.querySelectorAll('.item');

//item.forEach((item)=>console.log(item));
/*
const ul =document.querySelector('.items');

//ul.remove();
ul.firstElementChild.textContent="helkko";
ul.children[1].innerText = "banana";
ul.lastElementChild.innerHTML='<h1>hello</h1>';


const btn = document.querySelector('.btn');
btn.style.background='red'; 

btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add=('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>hello</h1>';
     
    console.log('click');
    console.log(e.target.className);
});  */
const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);

function onsubmit(e)
{
    e.preventDefault();

        if(nameInput.value== '' ||emailInput.value== '')
        {
            msg.classList.add('error');
            msg.innerHTML = 'pleas Enter the all fields';
       setTimeout(()=>msg.remove(),3000);
       
        }
        else{

            const li=document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
            userList.appendChild(li);
            nameInput.value='';
            emailInput.value='';
        }

}