//Realizado por: Alexandru Cristian Iordache

const PANELS = document.querySelectorAll('.panel');
PANELS.forEach((panel) =>
    {
        panel.addEventListener('click', ()=>{
            panel.classList.toggle('open');
        });
        panel.addEventListener('transitionend', (e)=>{
            if (e.propertyName.includes('flex')) 
            panel.classList.toggle('open-active');       
        });
    }
);


