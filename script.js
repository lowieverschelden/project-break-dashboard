//Reloj digital

function updateTime() {
    const horloge = document.getElementById('horloge');
    const ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let secundos = ahora.getSeconds();
    let dia = ahora.getDate();
    let mes = ahora.getMonth()+1;
    let ano = ahora.getFullYear();

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    secundos = secundos < 10 ? '0' + secundos : secundos;
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    horloge.innerText = `${hora}:${minutos}:${secundos}, ${dia}/${mes}/${ano}`;

}

setInterval(updateTime,1000);

updateTime();

//Generador de contrasenas seguras

const btnGen = document.getElementById('btnGen');

btnGen.addEventListener('click', () => {
    generatePw();
})

function generatePw() {
    const number = parseInt(document.getElementById('numeros').value,10);
    const contraseña = document.getElementById('contraseña');
    let pw = "";
    for(let i=0; i<number; i++) {
        pw += String.fromCharCode(Math.floor(265*Math.random()));
    }
    console.log(pw);
    contraseña.innerText = pw;
}