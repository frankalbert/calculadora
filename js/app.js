const resultado = document.querySelector('#resultado'),
    cero = document.querySelector('#cero'),
    uno = document.querySelector('#uno'),
    dos = document.querySelector('#dos'),
    tres = document.querySelector('#tres'),
    cuatro = document.querySelector('#cuatro'),
    cinco = document.querySelector('#cinco'),
    seis = document.querySelector('#seis'),
    siete = document.querySelector('#siete'),
    ocho = document.querySelector('#ocho'),
    nueve = document.querySelector('#nueve'),
    sumar = document.querySelector('#sumar'),
    restar = document.querySelector('#restar'),
    multiplicar = document.querySelector('#multiplicar'),
    dividir = document.querySelector('#dividir'),
    limpiar = document.querySelector('#limpiar'),
    punto = document.querySelector('#punto'),
    igual = document.querySelector('#igual');
    borrar = document.querySelector('#borrar');

cero.addEventListener('click', function(){
    insertar(cero.value);
});
uno.addEventListener('click', function(){
    insertar(uno.value);
});
dos.addEventListener('click', function(){
    insertar(dos.value);
});
tres.addEventListener('click', function(){
    insertar(tres.value);
});
cuatro.addEventListener('click', function(){
    insertar(cuatro.value);
});
cinco.addEventListener('click', function(){
    insertar(cinco.value);
});
seis.addEventListener('click', function(){
    insertar(seis.value);
});
siete.addEventListener('click', function(){
    insertar(siete.value);
});
ocho.addEventListener('click', function(){
    insertar(ocho.value);
});
nueve.addEventListener('click', function(){
    insertar(nueve.value);
});
sumar.addEventListener('click', function(){
    insertar(sumar.value);
});
restar.addEventListener('click', function(){
    insertar(restar.value);
});
multiplicar.addEventListener('click', function(){
    insertar(multiplicar.value);
});
dividir.addEventListener('click', function(){
    insertar(dividir.value);
});
limpiar.addEventListener('click', function(){
    resultado.value = '';
});
punto.addEventListener('click', function(){
    insertar(punto.value);
});
igual.addEventListener('click', function(){
    resultado.value = eval(resultado.value);
});
borrar.addEventListener('click', function(){
    resultado.value = resultado.value.substring(0,resultado.value.length - 1);
});


function insertar(num){
    resultado.value = resultado.value + num;
}
