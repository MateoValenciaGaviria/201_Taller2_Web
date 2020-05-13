var buttons = document.querySelectorAll('.product__button');
var buttonProductSpecs = document.querySelectorAll('.productspecs__button');
var cartNumber = document.querySelector('.mainheader__shopcartnumber');
var cartList = [];

if(localStorage.getItem('cartList')){
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

cartNumber.innerText = cartList.length;

buttons.forEach(function(elem){
    elem.addEventListener('click', function(){
        /* var name = elem.parentElement.parentElement.querySelector('.product__name').innerText; */
        var id = elem.getAttribute('data-id');
        var name = elem.getAttribute('data-name');
        var img = elem.getAttribute('data-img');
        var price = elem.getAttribute('data-price');

        cartList.push({
            id: id,
            name: name,
            img: img,
            price: price 
        });
        cartNumber.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});

buttonProductSpecs.forEach(function(elem){
    elem.addEventListener('click', function(){
        /* var name = elem.parentElement.parentElement.querySelector('.product__name').innerText; */
        var id = elem.getAttribute('data-id');
        var name = elem.getAttribute('data-name');
        var img = elem.getAttribute('data-img');
        var price = elem.getAttribute('data-price');

        cartList.push({
            id: id,
            name: name,
            img: img,
            price: price 
        });
        cartNumber.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});