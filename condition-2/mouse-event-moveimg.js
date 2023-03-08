// let myimage = null;
let i;
let myimage = document.getElementById('myimage');
function init()
{
    i=1;
    // myimage = document.getElementById('myimage');
    myimage.setAttribute("style", "position: relative; left: 0px; width: 20%");
    // myimage.style.position = 'relative';
    // myimage.style.left = '0px';
}
function moveright()
{
    if(i<10)
    {
        myimage.style.left = parseInt(myimage.style.left) + 50 + 'px';
        i++;
    }else{init();}
    
}
window.onload = init();