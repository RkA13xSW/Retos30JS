//Realizado por: Alexandru Cristian Iordache
//Seleccion de elementos:
const KEYS = document.querySelectorAll('.key');
const SOUNDS = document.querySelectorAll('.sounds');
const TCLS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];


window.addEventListener('keydown', (e)=>{
    if(TCLS.includes(e.key.toUpperCase())){
        let index = TCLS.indexOf(e.key.toUpperCase());
        KEYS[index].classList.add('playing');
        SOUNDS[index].currentTime = 0;
        SOUNDS[index].play();
        setTimeout(()=>{
            KEYS[index].classList.remove('playing');
        }, 100);
    }
});