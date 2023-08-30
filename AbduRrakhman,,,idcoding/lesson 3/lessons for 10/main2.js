
/*let a = [];


for (let i = 1; i <= 1000; i++)
{
    if (i % 2 === 0) 
    {
        a[i] = i;
    };
    
}


let b = [];


for (let i = 0; i < a.length;  i++)
{
   let ByThree = a[i] % 3;
    if (isNaN(ByThree)){
        continue;
    }
    if (ByThree > 0){
        continue;
    }
    if(ByThree === 0){
        b[i] = i;
    }
}
console.log(b);
let c = [];



for (let i = 0; i < b.length; i++)
{
    let q = b[i] * b[i];
    if (isNaN(q)){
        continue;
    }
    c[i] = q;
    
}
console.log(c);

let e = 0;
for (i = 0; i < c.length; i++){
    if (c[i] === 324) {
        e = i;   
    }
}
console.log(e);*/

/*const a = document.querySelector('#class');

a.innerHTML = "<ul id='manual'></ul>";

const list = document.querySelector('#manual');
 
for (let i = 0; i < 1000; i++) {
     
    if(i % 2 === 0){
        list.innerHTML += '<li>' + i + '</li>'
    }
}*/

function calc(a, b, c) {
    if(c === '+'){
        return parseInt(a) + parseInt(b);
    }  
}
const div = document.querySelector("#class")
const inputA = document.querySelector('#A')
const inputB = document.querySelector('#B')
const inputC = document.querySelector('#C')
 
const button = document.querySelector('#D')

button.addEventListener('click', function(){
    div.innerHTML = calc(inputA.value, inputB.value, inputC.value)
})
