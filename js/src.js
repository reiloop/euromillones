'use strict';

const titulo = document.querySelector('p');

function rd(max) {
    return Math.ceil(Math.random() * max);
}
let N1 = rd(50);
let N2 = rd(50);
let N3 = rd(50);
let N4 = rd(50);
let N5 = rd(50);

let E1 = rd(12);
let E2 = rd(12);

if (N1 === N2 || N1 === N3 || N1 === N4 || N1 === N5) {
    N1 = rd(50);
}
if (N2 === N3 || N2 === N4 || N2 === N5) {
    N2 = rd(50);
}
if (N3 === N4 || N3 === N5) {
    N3 = rd(50);
}
if (N4 === N5) {
    N4 = rd(50);
}

if (E1 === E2) {
    E1 = rd(12);
    E2 = rd(12);
}
titulo.textContent = `Combinación: ${N1},${N2},${N3},${N4},${N5} Estrellas: ${E1},${E2}`;
