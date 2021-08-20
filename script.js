/*
    button 5,6,7 - 7 8 9
    button 9,10,11 - 4 5 6
    button 13,14,15 - 1 2 3
    button 4,8,12,16,19 -   / * - + =
*/

let result = "";
let operator = "";
let a = "";
let b  = "";
document.getElementById('button-1').addEventListener('click',function(){
    document.getElementById('data').innerHTML="";
})

document.getElementById('button-5').addEventListener('click',function(e){
     let val = document.getElementById('button-5').innerHTML;
     let textNode = document.createTextNode((result+val).trim());
     document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-6').addEventListener('click',function(e){
    let val = document.getElementById('button-6').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-7').addEventListener('click',function(e){
    let val = document.getElementById('button-7').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-9').addEventListener('click',function(e){
    let val = document.getElementById('button-9').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-10').addEventListener('click',function(e){
    let val = document.getElementById('button-10').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-11').addEventListener('click',function(e){
    let val = document.getElementById('button-11').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-13').addEventListener('click',function(e){
    let val = document.getElementById('button-13').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-14').addEventListener('click',function(e){
    let val = document.getElementById('button-14').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-15').addEventListener('click',function(e){
    let val = document.getElementById('button-15').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-18').addEventListener('click',function(e){
    let val = document.getElementById('button-18').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-17').addEventListener('click',function(e){
    let val = document.getElementById('button-17').innerHTML;
    let textNode = document.createTextNode((result+val).trim());
    document.getElementById('data').appendChild(textNode);
})

document.getElementById('button-4').addEventListener('click',function(e){
    operator=document.getElementById('button-4').innerHTML;
    a = document.getElementById('data').innerHTML;
    document.getElementById('data').innerHTML = "";
    }
)

document.getElementById('button-8').addEventListener('click',function(e){
    operator=document.getElementById('button-8').innerHTML;
    a = document.getElementById('data').innerHTML;
    document.getElementById('data').innerHTML = "";
})

document.getElementById('button-12').addEventListener('click',function(e){
    operator=document.getElementById('button-12').innerHTML;
    a = document.getElementById('data').innerHTML;
    document.getElementById('data').innerHTML = "";
})

document.getElementById('button-16').addEventListener('click',function(e){
    operator=document.getElementById('button-16').innerHTML;
    a = document.getElementById('data').innerHTML;
    document.getElementById('data').innerHTML = "";
})

document.getElementById('button-19').addEventListener('click',function(e){
   b = document.getElementById('data').innerHTML;
   let expression = a+" "+operator+" "+b;
   console.log(expression);
   document.getElementById('data').innerHTML = eval(expression);
})

document.getElementById('button-3').addEventListener('click',function(e){
    operator=document.getElementById('button-3').innerHTML;
    a = document.getElementById('data').innerHTML;
    document.getElementById('data').innerHTML = eval(a/100);
 })

 document.getElementById('button-2').addEventListener('click',function(e){
    a = document.getElementById('data').innerHTML;
    document.getElementById('data').innerHTML = eval(0-a);
    a = eval(0-a);
 })