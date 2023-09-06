const inputx = document.querySelector('#X');
const inputy = document.querySelector('#Y');
const button = document.querySelector('#btn');
const divBlock = document.querySelector('#block')
divBlock.style.position = 'fixed';
divBlock.style.backgroundColor = 'green';
divBlock.innerText = 'Iblock';
button.addEventListener('click', function (){
    divBlock.style.left = inputx.value + 'px';
    divBlock.style.top = inputy.value + 'px';
})

