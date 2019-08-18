'use strict';
 

let checkbox = document.getElementById('discount-checkbox');
//let checkbox = document.querySelector('#discount-checkbox');
console.dir(checkbox);
checkbox.addEventListener('change', function() {
    console.log('Галочка');
});

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');

btnCart.addEventListener('click', ()=> {
    modalCart.style.display = 'block';
    modalCart.style.display 
})


//checkbox.onchange = function(){    
//};