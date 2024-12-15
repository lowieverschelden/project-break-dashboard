let randnumb = Math.ceil(5 * Math.random());
let foto = `foto${randnumb}.jpg`;

function setBackground() {
    randnumb = Math.ceil(5 * Math.random()); 
    foto = `foto${randnumb}.jpg`; 
    console.log(foto);
    document.body.style.backgroundImage = `url(${foto})`; 
}

setBackground();
setInterval(setBackground, 10000);
