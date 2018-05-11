console.log('Loaded!');
//change text
var element=document.getElementById('main-text');

element.innerHTML='new value';

var img=document.getElementById('madi');
img.onclick= function(){
    var marginleft=0;
    function moveRight()
    {
        marginleft=marginleft+10;
        img.style.marginLeft=marginleft+'px';
    }
    var interval=setInterval(moveRight,100);
    

    
};