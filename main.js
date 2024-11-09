const prices = document.querySelectorAll('.item-price');
prices.forEach(item=> {
    item.innerText=Number(item.innerText).toLocaleString('de-DE',{style: 'currency', currency : 'VND'})
});

let navbar = document.querySelector('.header__navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchform = document.querySelector('.header__search');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}



