document.addEventListener('DOMContentLoaded', () => {
  iniciar();
  setTimeout(()=>{
    colorearLogo();
  }, 3000);
});
// Variables globales-------------------------
const main = document.querySelector('#main');
const galeria = document.querySelector('.galeria');
const titulo = document.querySelector('.titulo');
const whatsApp = document.querySelector('.whatsapp');
const fherAlberto = document.querySelector('.fheralberto');
const mediaQueryList = [
  window.matchMedia("(max-height: 413px)"),
  window.matchMedia("(min-height: 414px)"),
  window.matchMedia("(max-height: 567px)"),
  window.matchMedia("(min-height: 568px)"),
  window.matchMedia("(max-height: 811px)"),
  window.matchMedia("(min-height: 812px)")
]
const datosGaleria = [
  { 'nombre': '110', 'autor': 'rosalía', 'alt': 'Rana René', 'disp': true },
  { 'nombre': '109', 'autor': 'rosalía', 'alt': 'Baby Yoda', 'disp': true },
  { 'nombre': '108', 'autor': 'rosalía', 'alt': 'Bodoque sin boca', 'disp': false },
  { 'nombre': '107', 'autor': 'rosalía', 'alt': 'Osita rosada', 'disp': false },
  { 'nombre': '106', 'autor': 'rosalía', 'alt': 'Steve-Minecraft', 'disp': false },
  { 'nombre': '105', 'autor': 'rosalía', 'alt': 'Patito claro', 'disp': false },
  { 'nombre': '104', 'autor': 'rosalía', 'alt': 'Osito con mameluco', 'disp': false },
  { 'nombre': '103', 'autor': 'rosalía', 'alt': 'Juan Carlos Bodoque', 'disp': false },
  { 'nombre': '102', 'autor': 'rosalía', 'alt': 'Elefante', 'disp': true },
  { 'nombre': '101', 'autor': 'rosalía', 'alt': 'Mapache', 'disp': false },
  { 'nombre': '10', 'autor': 'norma', 'alt': 'Alcatraces', 'disp': false },
  { 'nombre': '09', 'autor': 'norma', 'alt': 'Girasol y Tulipanes', 'disp': false },
  { 'nombre': '08', 'autor': 'norma', 'alt': 'Miniom', 'disp': true },
  { 'nombre': '07', 'autor': 'norma', 'alt': 'Osito', 'disp': false },
  { 'nombre': '06', 'autor': 'norma', 'alt': 'Batman', 'disp': true },
  { 'nombre': '05', 'autor': 'norma', 'alt': 'Olaf', 'disp': true },
  { 'nombre': '04', 'autor': 'norma', 'alt': 'Reno rojo', 'disp': true },
  { 'nombre': '03', 'autor': 'norma', 'alt': 'Reno verde', 'disp': true },
  { 'nombre': '02', 'autor': 'norma', 'alt': 'Patito', 'disp': true },
  { 'nombre': '01', 'autor': 'norma', 'alt': 'Cochinito', 'disp': true },
  { 'nombre': '201', 'autor': 'rosalía', 'alt': 'Bolsa tipo smokin', 'disp': true }
]
let hijos = galeria.childNodes.length
let mostrar = true;
// -------------------------------------------
function iniciar(){
  queriesListeners('Entrando');
  creaListeners();
}

function reiniciar(seccion) {
  if (mostrar == false) {
    mostrar = true;
    seccion.remove();
    whatsApp.classList.remove('desvanecer');
    fherAlberto.classList.remove('desvanecer');
    queriesListeners('De regreso')
  }
}

function ocultar(btn) {
  if (mostrar == true) {
    mostrar = false
    limpiaGaleria()
    hijos = galeria.childNodes.length
    btn.remove();
    whatsApp.classList.add('desvanecer');
    fherAlberto.classList.add('desvanecer');
    mostrarTodos();
  }
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
  titulo.addEventListener('click', mostrarLeyenda);
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

function mostrarGaleria(max) {
  limpiaGaleria();
  // console.log('Mostrando ', max);

  let lista = [];
  for (let i = 0; i < max; i++) {
    do{
      aleatorio = aleatorioEntero(0, 19);
    }
    while(lista.includes(aleatorio));
    lista.push(aleatorio);
  }
  // console.log(lista);
  for (let i = 0; i < max; i++) {
    const galeriaItem = document.createElement('div');
    galeriaItem.classList.add('galeria_item');


    const imagenItem = document.createElement('img');
    imagenItem.setAttribute("src", `img/galeria/${datosGaleria[lista[i]].nombre}.png`);
    imagenItem.setAttribute("alt", `${datosGaleria[lista[i]].alt}`);

    //Le crea atributo data-imagen-id = "i" 
    imagenItem.dataset.imagenId = datosGaleria[lista[i]].nombre;
    // Se le agrega el evento onclick ------------------------------------------
    imagenItem.onclick = ampliarImagen;

    galeriaItem.appendChild(imagenItem);
    galeria.appendChild(galeriaItem);
  }
  existeBtn = document.querySelectorAll('#boton');
  // console.log(existeBtn.length);
  if (existeBtn.length <= 0) {
    // Crea el botón para mostrar todos
    const btn = document.createElement('div');
    btn.textContent = "Mostrar todos";
    btn.classList.add('boton');
    btn.setAttribute("id", "boton");
    main.appendChild(btn);
    // Evento para mostrar todos
    btn.addEventListener("click", () => ocultar(btn));
  }
}

// __________________________ Mostrar Todos __________________________
function mostrarTodos() {
  const contenido = document.createElement('div');
  contenido.classList.add('swiper-wrapper');

  datosGaleria.forEach(imagen => {
    const imagenItem = document.createElement('img');
    imagenItem.setAttribute("src", `img/galeria/${imagen.nombre}.png`);
    imagenItem.setAttribute("alt", `${imagen.alt}`);

    //Le crea atributo data-imagen-id = nombre de la foto 
    imagenItem.dataset.imagenId = imagen.nombre;

    // Se le agrega el evento onclick ---------------------------
    imagenItem.onclick = ampliarImagen;

    const divImagen = document.createElement('div');
    divImagen.classList.add('image');
    divImagen.appendChild(imagenItem);

    const autor = document.createElement('div');
    autor.classList.add('autor');
    autor.textContent = 'by ';
    const span = document.createElement('span');
    span.textContent = imagen.autor;
    autor.appendChild(span);

    const descripcion = document.createElement('div');
    descripcion.classList.add('descripcion');
    descripcion.textContent = imagen.alt;

    const tresSesenta = document.createElement('button');
    tresSesenta.textContent = '360°';
    tresSesenta.classList.add('tresSesenta');
    if(!imagen.disp){
      tresSesenta.disabled = true;
      tresSesenta.classList.add('deshabilitado');
    }
    //Le crea atributo data-nombre-imagen = nombre de la foto 
    tresSesenta.dataset.nombreImagen = imagen.nombre;
    // Se le agrega el evento onclick -----------------------------
    tresSesenta.onclick = threeSixty;

    // const expandir = document.createElement('button');
    // expandir.classList.add('masInfo');
    // expandir.textContent = '+info';

    const contenedorBotones = document.createElement('div');
    contenedorBotones.classList.add('botones');
    contenedorBotones.appendChild(tresSesenta);
    // contenedorBotones.appendChild(expandir);

    const contenidoTarjeta = document.createElement('div');
    contenidoTarjeta.classList.add('card-content');
    contenidoTarjeta.appendChild(divImagen);
    contenidoTarjeta.appendChild(descripcion);
    contenidoTarjeta.appendChild(autor);
    contenidoTarjeta.appendChild(contenedorBotones);

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('swiper-slide');
    tarjeta.appendChild(contenidoTarjeta);

    contenido.appendChild(tarjeta);
  });
  const anterior = document.createElement('div');
  anterior.classList.add('swiper-button-next')

  const previo = document.createElement('div');
  previo.classList.add('swiper-button-prev')

  const paginacion = document.createElement('div');
  paginacion.classList.add('swiper-pagination')

  const contenedorSwiper = document.createElement('div');
  contenedorSwiper.classList.add('container', 'swiper', 'mySwiper');

  contenedorSwiper.appendChild(contenido);
  contenedorSwiper.appendChild(anterior);
  contenedorSwiper.appendChild(previo);
  contenedorSwiper.appendChild(paginacion);
  
  const seccion = document.createElement('section');
  seccion.classList.add('mostrar-todo');

  // Crea botón para cerrar la sección
  const volver = document.createElement('div');
  volver.classList.add('btnVolver');
  volver.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
  </svg>
  `
  //Se le agrega el evento para cerrar la seccion -----------------------
  volver.onclick = () => {
    reiniciar(seccion); 
  }

  seccion.appendChild(contenedorSwiper);
  seccion.appendChild(volver);

  main.appendChild(seccion);

  // inicializarSwiper()
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: false,
    loopFillGroupWithBlank: false,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "fraction",
      // type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      568: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      736: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
      1080: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
      }
    }
  });
}
// ________________________ ampliarImagen ___________________________
function ampliarImagen(e) {
  // const id = parseInt(e.target.dataset.imagenId)
  const id = e.target.dataset.imagenId

  // El id es el nombre de la foto
  // console.log('click a ', id);

  // Detectar al elemento principal que lo llamó: ------------------
  let caller;
  fueGaleria = document.querySelectorAll('.galeria_item');
  if(fueGaleria.length >=1){ // Fué galería?
    caller = galeria
    caller.classList.add('desvanecer');
  }
  const fueMostrarTodo = document.querySelectorAll('.mostrar-todo');
  if(fueMostrarTodo.length >=1){ // Fué mostrar todo?
    const seccion = document.querySelector('.mostrar-todo');
    caller = seccion;
    caller.classList.add('desvanecer');
  }

  const imagenAmpliada = document.createElement('IMG');
  imagenAmpliada.src = `img/zoomVariado/${id}.png`;
  imagenAmpliada.classList.add('imgGde');

  //El overlay es el contenedor de la imagen ampliada
  const overlay = document.createElement('DIV');
  overlay.appendChild(imagenAmpliada);
  overlay.classList.add('overlay');

  //botón para cerrar la imagen
  const cerrarImagen = document.createElement('P');
  cerrarImagen.textContent = 'X';
  cerrarImagen.classList.add('btn-cerrar');

  //Se le agrega el evento para cerrar el overlay
  cerrarImagen.onclick = () => {
    caller.classList.remove('desvanecer')
    overlay.remove();
  }

  overlay.appendChild(cerrarImagen);
  main.appendChild(overlay);
}

// Funciones para los 360°
function threeSixty(e) {
  const seccion = document.querySelector('.mostrar-todo');
  seccion.classList.add('desvanecer');
  // Crea el html para el 360
  const inputRange = document.createElement('input');
  inputRange.classList.add('rango');
  inputRange.setAttribute('id', 'rango');
  inputRange.setAttribute('type', 'range');
  inputRange.setAttribute('min', '1');
  inputRange.setAttribute('max', '37');
  inputRange.setAttribute('value', '1');
  
  const canvasElement = document.createElement('canvas');
  canvasElement.classList.add('canvas');
  canvasElement.setAttribute('id', 'canvas');
  canvasElement.setAttribute('width', '480');
  canvasElement.setAttribute('height', '640');

  const divCard = document.createElement('div');
  divCard.classList.add('card');
  divCard.appendChild(canvasElement);
  divCard.appendChild(inputRange);

  const divFiguras = document.createElement('div');
  divFiguras.classList.add('figuras');
  divFiguras.appendChild(divCard);

  const overlay = document.createElement('DIV');
  overlay.classList.add('overlay');
  overlay.appendChild(divFiguras);
  
  //botón para cerrar la imagen
  const cerrarImagen = document.createElement('P');
  cerrarImagen.textContent = 'X'
  cerrarImagen.classList.add('btn-cerrar');
  //Se le agrega el evento para cerrar el contenedor----------------
  cerrarImagen.onclick = () => {
    seccion.classList.remove('desvanecer');
    overlay.remove();
  }

  overlay.appendChild(cerrarImagen);
  //Mostrar en el HTML
  main.appendChild(overlay);
  //-------------------------------------------------

  const nombre = e.target.dataset.nombreImagen
  const ctx = canvasElement.getContext('2d');
  const fotogramas = [];
  // Listener para cada imagen
  inputRange.addEventListener('input', () => {
    handleInputSlider(inputRange, ctx, fotogramas, canvasElement)
  });
  for (let i = 1; i <= 37; i += 1) {
    const number = i.toString().padStart(2, '00');
    const image = new Image()
    if(i === 37){
      image.src = `../img/${nombre}/01.png`
    } else {
      image.src = `../img/${nombre}/${number}.png`
    }
    image.addEventListener('load', () => {
      fotogramas[i] = image
      if (i === 1) {
        loadImage(ctx, fotogramas[i], canvasElement);
      }
    })
  }
}
function loadImage(ctx, fotogramas, canvasEl) {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ctx.drawImage(fotogramas, 0, 0, canvasEl.width, canvasEl.height);
}
function handleInputSlider(inputRange, ctx, fotogramas, canvasEl) {
  loadImage(ctx, fotogramas[inputRange.value], canvasEl)
}

function mostrarLeyenda(){
  const divLeyendaOverlay = document.createElement('div');
  const divLeyendaContenedor = document.createElement('div');
  const divLeyendaContenido = document.createElement('div');
  const divLeyendaRelato = document.createElement('div');
  const imgLeyendaPortada = document.createElement('img');
  const pUno = document.createElement('p');
  const pDos = document.createElement('p');

  divLeyendaOverlay.classList.add('leyenda-overlay');
  divLeyendaContenedor.classList.add('leyenda-contenedor');
  divLeyendaContenido.classList.add('leyenda-contenido');
  divLeyendaRelato.classList.add('leyenda-relato');
  imgLeyendaPortada.classList.add('leyenda-portada');
  imgLeyendaPortada.setAttribute('src', '/img/leyenda/Portada.png');
  imgLeyendaPortada.setAttribute('alt', 'Portada leyenda amigurumis');

  divLeyendaOverlay.appendChild(divLeyendaContenedor);
  divLeyendaContenedor.appendChild(divLeyendaContenido);
  divLeyendaContenido.appendChild(divLeyendaRelato);
  divLeyendaRelato.appendChild(imgLeyendaPortada);
  divLeyendaRelato.appendChild(pUno);
  divLeyendaRelato.appendChild(pDos);

  pUno.textContent = 'un amigurumi es un muñequito tejido que tiene un gran significado, pues cuenta la leyenda, que cuando tienes uno alimentas el espíritu de niño que todos llevamos dentro. Según la tradición japonesa cada Amigurumi posee un alma, el cual nos acompaña y es nuestro amiguito y confidente de por vida, nos protege y consuela cuando nos sentimos tristes o confundidos.'

  pDos.textContent = 'dicen que cuando tienes un amigurumi se convierte en tu mejor amigo, tu confidente al cual le podrás contar tus secretos y ellos nunca los rebelan! Por eso los amigurumis originales no tienen boca.'

  //botón para cerrar la leyenda
  const cerrarLeyenda = document.createElement('div');
  cerrarLeyenda.textContent = 'X'
  cerrarLeyenda.classList.add('btn-cerrar');
  //Se le agrega el evento para cerrar el contenedor----------------
  cerrarLeyenda.onclick = () => {
    whatsApp.classList.remove('desvanecer');
    fherAlberto.classList.remove('desvanecer');
    document.querySelector('.boton').classList.remove('desvanecer');
    divLeyendaOverlay.remove();
  }

  whatsApp.classList.add('desvanecer');
  fherAlberto.classList.add('desvanecer');
  document.querySelector('.boton').classList.add('desvanecer');

  divLeyendaOverlay.appendChild(cerrarLeyenda);
  main.appendChild(divLeyendaOverlay);
  setTimeout(()=>{
    pUno.classList.add('aparecer');
    pDos.classList.add('aparecer');
  }, 500)
}

function colorearLogo(){
  const efeRoja = document.querySelector('.footer #logo .f');
  efeRoja.style.fill = '#c9002b';
  const aAzul = document.querySelector('.footer #logo .a');
  aAzul.style.fill = '#004b93';
}