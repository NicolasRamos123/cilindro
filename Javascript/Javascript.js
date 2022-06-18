const form = document.querySelector(".form");

let ab = document.querySelector(".Ab");
let al = document.querySelector(".Al");
let at = document.querySelector(".At");
let vl = document.querySelector(".Vl");

form.addEventListener("submit", function(evento){
    evento.preventDefault();

    let raio = document.querySelector(".input-raio-number").value;
    let altura = document.querySelector(".input-altura-number").value;

    let pi = Math.PI;

    const areab = pi * (parseInt(raio) * parseInt(raio));
    const areal = 2 * pi * parseInt(raio) * parseInt(altura);
    const areat = areal + (2 * areab);
    const vol = areab * parseInt(altura);

    ab.textContent = `AB: ${areab.toFixed(2)}`;
    al.textContent = `AL: ${areal.toFixed(2)}`;
    at.textContent = `AT: ${areat.toFixed(2)}`;
    vl.textContent = `Volume: ${vol.toFixed(2)}`;
});