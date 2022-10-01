//Realizado por Alexandru Cristian Iordache

//Cambio de color de la imagen y de "JS"
document.getElementById('base').addEventListener('input',(e)=>{
    document.documentElement.style.setProperty('--bgcolor', e.target.value);
});

//Cambio de difuminación de la imagen
document.getElementById('blur').addEventListener('input',(e)=>{
    document.documentElement.style.setProperty('--blur', e.target.value + "px");
});

//Cambio de padding de la imagen
document.getElementById('spacing').addEventListener('input',(e)=>{
    document.documentElement.style.setProperty('--spacing', e.target.value + "px");
});