//Menu interaction
var mainheader__navmobile = document.querySelector('.mainheader__navmobile');
var hambtn = document.querySelector('.mainheader__hamburguerbtn');
hambtn.addEventListener('click', handleHamClick);

function handleHamClick(){
    mainheader__navmobile.classList.toggle('mainheader__navmobile--active');
}

function handleWindowResize (event) {
    if(window.innerWidth > 1000){
        mainheader__navmobile.classList.remove('mainheader__navmobile--active');
    }
}
window.addEventListener('resize', handleWindowResize);

//Features interaction
var mainfeatures__navtitles = document.querySelector('.mainfeatures__navtitles');
mainfeatures__navtitles.addEventListener('click', handleFeaturesClick);

function handleFeaturesClick(){
    mainfeatures__navtitles.classList.toggle('mainfeatures__navtitles--selected');
}

//Keyboard interaction
var mouseTrackingColor = document.querySelector('.mainkeyboard__color');
var hoverLayoutMouse = document.addEventListener.bind(document);

var mouseX, mouseY;

hoverLayoutMouse('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

var x = void 0, y = void 0,  key = -1;

var followMouse = function followMouse(){
    key = requestAnimationFrame(followMouse);

    if(!x || !y){
        x = mouseX || e.pageX;
        y = mouseY || e.pageY;
    } else {
        x = mouseX || e.pageX;
        y = mouseY || e.pageY;
   }
   mouseTrackingColor.style.left = x + 'px';
   mouseTrackingColor.style.top = y + 'px'; 
};

window.onload = function() {
    followMouse();
};



