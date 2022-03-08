document.addEventListener('DOMContentLoaded', () => {
  iniciar();
  setTimeout(()=>{
    colorearLogo();
  }, 3000);
});
// Variables globales-------------------------
const main = document.querySelector('#main');
const botonMenu = document.querySelector('.menu-btn');
const galeria = document.querySelector('.galeria');
const titulo = document.querySelector('.titulo');
const footerItems = document.querySelector('.footer-items');
const mediaQueryList = [
  window.matchMedia("(max-height: 413px)"),
  window.matchMedia("(min-height: 414px)"),
  window.matchMedia("(max-height: 567px)"),
  window.matchMedia("(min-height: 568px)"),
  window.matchMedia("(max-height: 811px)"),
  window.matchMedia("(min-height: 812px)")
]

let hijos = galeria.childNodes.length
let mostrar = true;

const listaFondos = [
	'doble-cuadro',
	'moutains-picos',
	'estrellas',
	'fondo-triangulos',
  'piramides'
];

// -------------------------------------------
function iniciar(){
  menu();
  queriesListeners('Entrando');
  creaListeners();
  btnAzul();
}

function limpiaGaleria() {
  while (galeria.firstChild) {
    galeria.removeChild(galeria.firstChild);
  }
}

function creaListeners() {
  window.matchMedia("(min-height: 414px)").addEventListener('change', () => {
    queriesListeners(414);
  });
  window.matchMedia("(min-height: 568px)").addEventListener('change', () => {
    queriesListeners(568);
  });

  window.matchMedia("(min-height: 812px)").addEventListener('change', () => {
    queriesListeners(812);
  });
}

function queriesListeners(origen) {
  // console.log(origen);
  if (mediaQueryList[5].matches) {
    if (hijos != 12 && mostrar == true) {
      mostrarGaleria(12);
    }
  } else if (mediaQueryList[3].matches && mediaQueryList[4].matches) {
    if (hijos != 10 && mostrar == true) {
      mostrarGaleria(10);
    }
  } else if (mediaQueryList[1].matches && mediaQueryList[2].matches) {
    if (hijos != 7 && mostrar == true) {
      mostrarGaleria(7);
    }
  } else if (mediaQueryList[0].matches) {
    if (hijos != 2 && mostrar == true) {
      mostrarGaleria(2);
    }
  }
  hijos = galeria.childNodes.length
}

function aleatorioEntero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function colorearLogo(){
  const efeRoja = document.querySelector('.footer #logo .f');
  efeRoja.style.fill = '#c9002b';
  const aAzul = document.querySelector('.footer #logo .a');
  aAzul.style.fill = '#004b93';
}