//Selecciona el elemento select
var select = document.querySelector('.store__sortcontainer');
//Agregar el listener de cambio
select.addEventListener('change', function(e){
    console.log(select.value);
    //Crear variable url partiendo del pathname "/store"
    var url = location.pathname;
    //Le agregamos el filtro
    url = url + '?sort=' + select.value;
    location.href = url;
});

var gpu1 = document.querySelector('.store__1660SUPER');
gpu1.addEventListener('change', function(e){
    console.log(gpu1.value);
    var url = location.pathname;
    url = url + '?gpu_eq=' + gpu1.value;
    location.href = url;
});

var gpu2 = document.querySelector('.store__1660Ti');
gpu2.addEventListener('change', function(e){
    console.log(gpu2.value);
    var url = location.pathname;
    url = url + '?gpu_eq=' + gpu2.value;
    location.href = url;
});

var gpu3 = document.querySelector('.store__1660');
gpu3.addEventListener('change', function(e){
    console.log(gpu3.value);
    var url = location.pathname;
    url = url + '?gpu_eq=' + gpu3.value;
    location.href = url;
});

var gpu4 = document.querySelector('.store__2080SUPER');
gpu4.addEventListener('change', function(e){
    console.log(gpu4.value);
    var url = location.pathname;
    url = url + '?gpu_eq=' + gpu4.value;
    location.href = url;
});

var gpu5 = document.querySelector('.store__2080Ti');
gpu5.addEventListener('change', function(e){
    console.log(gpu5.value);
    var url = location.pathname;
    url = url + '?gpu_eq=' + gpu5.value;
    location.href = url;
});

var cpu1 = document.querySelector('.store__10');
cpu1.addEventListener('change', function(e){
    console.log(cpu1.value);
    var url = location.pathname;
    url = url + '?cpu_eq=' + cpu1.value;
    location.href = url;
});

var cpu2 = document.querySelector('.store__9');
cpu2.addEventListener('change', function(e){
    console.log(cpu2.value);
    var url = location.pathname;
    url = url + '?cpu_eq=' + cpu2.value;
    location.href = url;
});

var cpu3 = document.querySelector('.store__8');
cpu3.addEventListener('change', function(e){
    console.log(cpu3.value);
    var url = location.pathname;
    url = url + '?cpu_eq=' + cpu3.value;
    location.href = url;
});

var cpu4 = document.querySelector('.store__7');
cpu4.addEventListener('change', function(e){
    console.log(cpu4.value);
    var url = location.pathname;
    url = url + '?cpu_eq=' + cpu4.value;
    location.href = url;
});

var serie1 = document.querySelector('.store__Aegis');
serie1.addEventListener('change', function(e){
    console.log(serie1.value);
    var url = location.pathname;
    url = url + '?serie_eq=' + serie1.value;
    location.href = url;
});

var serie2 = document.querySelector('.store__Infinite');
serie2.addEventListener('change', function(e){
    console.log(serie2.value);
    var url = location.pathname;
    url = url + '?serie_eq=' + serie2.value;
    location.href = url;
});

var serie3 = document.querySelector('.store__Trident');
serie3.addEventListener('change', function(e){
    console.log(serie3.value);
    var url = location.pathname;
    url = url + '?serie_eq=' + serie3.value;
    location.href = url;
});

var serie4 = document.querySelector('.store__Codex');
serie4.addEventListener('change', function(e){
    console.log(serie4.value);
    var url = location.pathname;
    url = url + '?serie_eq=' + serie4.value;
    location.href = url;
});

var serie5 = document.querySelector('.store__P');
serie5.addEventListener('change', function(e){
    console.log(serie5.value);
    var url = location.pathname;
    url = url + '?serie_eq=' + serie5.value;
    location.href = url;
});

var serie6 = document.querySelector('.store__Cubi');
serie6.addEventListener('change', function(e){
    console.log(serie6.value);
    var url = location.pathname;
    url = url + '?serie_eq=' + serie6.value;
    location.href = url;
});



