const segundoHola=document.getElementById("hola2");
segundoHola.style.color='#ffa500';

const colorchange=document.getElementById("cambiarColor");
colorchange.addEventListener('click', function(){
    colorchange.style.color='#523706ff'; 
})

const adios=document.getElementById('hola1');
adios.addEventListener('click',function(){
    adios.textContent="Adios";
})