// ________________________ ampliarImagen ___________________________
function ampliarPatron(e) {
  e.target.style.pointerEvents = 'none';

  const id = e.target.dataset.itemId;

  // Detectar al elemento principal que lo llamó: ------------------
  let caller;
  fueBuscarPatron = document.querySelectorAll('.contenido-buscar');
  if(fueBuscarPatron.length > 0){ // Fué sección buscar?
    caller = fueBuscarPatron[0];
    caller.classList.add('desvanecer');
    document.querySelector('.encabezado-buscar .btn-cerrar-x').classList.add('desvanecer');
  }

  // Creando elementos________________________________
  const overlay = document.createElement('DIV');
  overlay.classList.add('overlay');

  const divSwiper = document.createElement('div');
  divSwiper.classList.add('swiper', 'mySwiper');
  overlay.appendChild(divSwiper);

  const divSwiperWrapper = document.createElement('div');
  divSwiperWrapper.classList.add('swiper-wrapper');
  divSwiper.appendChild(divSwiperWrapper);

  const divSwiperSlide = document.createElement('div');
  divSwiperSlide.classList.add('swiper-slide');
  divSwiperWrapper.appendChild(divSwiperSlide);

  const divZoomContenedor = document.createElement('div');
  divZoomContenedor.classList.add('swiper-zoom-container');
  divSwiperSlide.appendChild(divZoomContenedor);

  const imagenAmpliada = document.createElement('IMG');
  imagenAmpliada.src = `img/catalogo/${id}.jpg`;
  imagenAmpliada.classList.add('imgGde');
  divZoomContenedor.appendChild(imagenAmpliada);

  //botón para cerrar la imagen
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);

  //Se le agrega el evento para cerrar el overlay----------
  btnCerrarX.onclick = () => {
    caller.classList.remove('desvanecer');
    animateCSS(overlay, 'zoomOut');
    setTimeout(()=>{
      e.target.style.pointerEvents = 'auto';
      document.querySelector('.encabezado-buscar .btn-cerrar-x').classList.remove('desvanecer');
      overlay.remove();
    },500);
  }

  divSwiperSlide.appendChild(btnCerrarX);  
  main.appendChild(overlay);
  // Animación de entrada-----
  animateCSS(overlay, 'zoomIn');
  iniciarAmpliarImagen();
}