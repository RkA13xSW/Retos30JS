//Realizado por: Alexandru Cristian Iordache
//Seleccionamos los elementos:
const HOUR = document.querySelector('.hour-hand');
const MIN = document.querySelector('.min-hand');
const SEC = document.querySelector('.second-hand');

function changeClock(){
    let fecha = new Date();
    SEC.style.transform  =  `rotate(${fecha.getSeconds() * 6}deg)`;
    MIN.style.transform  =  `rotate(${fecha.getMinutes() * 6}deg)`;
    HOUR.style.transform  =  `rotate(${fecha.getHours() * 30}deg)`;
    setTimeout('changeClock()', 1000);
}
changeClock();