function onLoad(){
    var form = document.querySelector('.form__structure');
    form.addEventListener('submit', function(){
        var input = document.querySelector('.form__products');
        input.value = localStorage.getItem('cartList');
        localStorage.removeItem('cartList');
    });
}

window.addEventListener('load', onLoad);
