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
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);
  seccion.appendChild(btnCerrarX);
  
  // const volver = document.createElement('div');
  // volver.classList.add('btnVolver');
  // volver.innerHTML = `
  // <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
  // </svg>
  // `

  //Se le agrega el evento para cerrar la seccion -----------------------
  btnCerrarX.onclick = () => {
    animateCSS(seccion, 'bounceOutRight');
    setTimeout(()=>{
      reiniciar(seccion);
    }, 500);
  }
  
  seccion.appendChild(contenedorSwiper);
  main.appendChild(seccion);
  // Animación de entrada-----
  animateCSS(seccion, 'bounceInRight');
  
  // inicializarSwiper()
  iniciarMostrarTodos();
}