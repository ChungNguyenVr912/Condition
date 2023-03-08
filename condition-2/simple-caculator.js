let showres = document.getElementById('screen');
let result = document.getElementById('kres');
let n1 = document.getElementById('k1');
let n2 = document.getElementById('k2');
let n3 = document.getElementById('k3');
let n4 = document.getElementById('k4');
let n5 = document.getElementById('k5');
let n6 = document.getElementById('k6');
let n7 = document.getElementById('k7');
let n8 = document.getElementById('k8');
let n9 = document.getElementById('k9');
let n0 = document.getElementById('k0');
let div = document.getElementById('kdiv');
let mul = document.getElementById('kmul');
let add = document.getElementById('kadd');
let sub = document.getElementById('ksub');
let clr = document.getElementById('kc');
let res = document.getElementById('kres');
let i, a, b, c;

n1.addEventListener("click", show1);
n2.addEventListener("click", show2);
n3.addEventListener("click", show3);
n4.addEventListener("click", show4);
n5.addEventListener("click", show5);
n6.addEventListener("click", show6);
n7.addEventListener("click", show7);
n8.addEventListener("click", show8);
n9.addEventListener("click", show9);
n0.addEventListener("click", show0);
clr.addEventListener("click", clear);
add.addEventListener("click", function()
{
    i = 1; 
    b = a;
    showres.value = '';
})
sub.addEventListener("click", function()
{
    i = 2; 
    b = a;
    showres.value = '';
})
mul.addEventListener("click", function()
{
    i = 3; 
    b = a;
    showres.value = '';
})
div.addEventListener("click", function()
{
    i = 4; 
    b = a;
    showres.value = '';
})
result.addEventListener("click", fresult);

function show1()
{
    showres.value = showres.value + '1';
    a = Number(showres.value);
}
function show2()
{
    showres.value = showres.value + '2';
    a = Number(showres.value);
}
function show3()
{
    showres.value = showres.value + '3';
    a = Number(showres.value);
}
function show4()
{
    showres.value = showres.value + '4';
    a = Number(showres.value);
}
function show5()
{
    showres.value = showres.value + '5';
    a = Number(showres.value);
}
function show6()
{
    showres.value = showres.value + '6';
    a = Number(showres.value);
}
function show7()
{
    showres.value = showres.value + '7';
    a = Number(showres.value);
}
function show8()
{
    showres.value = showres.value + '8';
    a = Number(showres.value);
}
function show9()
{
    showres.value = showres.value + '9';
    a = Number(showres.value);
}
function show0()
{
    showres.value = showres.value + '0';
    a = Number(showres.value);
}
//clear function
function clear()
{
    showres.value = '';
    // a = 0;
}
//caculate function
function fresult()
{
    a = Number(showres.value);
    if(i == 1)
    {
        c =  a + b;
        // fadd;
    }else if(i == 2)
    {
        c = b - a;
        // fsub;
    }else if(i == 3)
    {
        c = b * a;
        // fmul;
    }else if(i == 4)
    {
        c = b/a;
        // fdiv;
    }
    showres.value = +c;
    a = c;
}


// function fadd()
// {
//     c =  a + b;
// }

// function fsub()
// {
//     c = b - a;
// }

// function fmul()
// {
//     c = b * a;
// }

// function fdiv()
// {
//     c = b/a;
// }