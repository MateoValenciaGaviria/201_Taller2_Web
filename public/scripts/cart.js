var buttons = document.querySelectorAll('.product__button');
var buttonProductSpecs = document.querySelectorAll('.productspecs__button');
var cartNumber = document.querySelector('.mainheader__shopcartnumber');
var buttonSendCheckout = document.querySelector('.checkout__button');
var cartList = [];

if (localStorage.getItem('cartList')) {
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

cartNumber.innerText = cartList.length;

buttons.forEach(function (elem) {
    elem.addEventListener('click', function () {
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

buttonProductSpecs.forEach(function (elem) {
    elem.addEventListener('click', function () {
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

function renderCart() {
    var cartContainer = document.querySelector('.checkout__container');
    cartList.forEach(function (obj) {
        var newItem = document.createElement('div');
        newItem.innerHTML = `
       <div class="checkout__product">
       <hr class="checkout__line">
       <div class="checkout__infocontainer">
           <div class="checkout__imgname">
               <div class="checkout__productimg">
                   <img class="checkout__image" src="`+obj.img+`" alt="`+obj.name+`">
               </div>
               <div class="checkout__productname">
                    `+obj.name+`
               </div>
           </div>
           <div class="checkout__productprice">
               $ `+obj.price+`.00
           </div>
       </div>
       </div>
       `;
        cartContainer.appendChild(newItem);
    });
}
renderCart();

buttonSendCheckout.addEventListener('click', function(e){
    var url = 'http://localhost:3000/form';
    location.href = url;
});