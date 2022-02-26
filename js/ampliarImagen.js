// ________________________ ampliarImagen ___________________________
function ampliarImagen(e) {
  e.target.style.pointerEvents = 'none';

  // const id = parseInt(e.target.dataset.imagenId)
  const id = e.target.dataset.imagenId

  // Detectar al elemento principal que lo llamó: ------------------
  let caller;
  fueGaleria = document.querySelectorAll('.galeria_item');
  if(fueGaleria.length > 0){ // Fué galería?
    caller = galeria
    caller.classList.add('desvanecer');
  }
  const fueMostrarTodo = document.querySelectorAll('.mostrar-todo');
  if(fueMostrarTodo.length > 0){ // Fué mostrar todo?
    const seccion = document.querySelector('.mostrar-todo');
    caller = seccion;
    caller.classList.add('desvanecer');
  }
  // const contenedorImagen = document.createElement('div');
  // contenedorImagen.classList.add('contenedor-imagen');

  // Creando elementos________________________________
  const imagenAmpliada = document.createElement('IMG');
  imagenAmpliada.src = `img/zoomVariado/${id}.png`;
  imagenAmpliada.classList.add('imgGde');

  const divZoomContenedor = document.createElement('div');
  divZoomContenedor.classList.add('swiper-zoom-container');

  const divSwiperSlide = document.createElement('div');
  divSwiperSlide.classList.add('swiper-slide');

  const divSwiperWrapper = document.createElement('div');
  divSwiperWrapper.classList.add('swiper-wrapper');

  const divSwiper = document.createElement('div');
  divSwiper.classList.add('swiper', 'mySwiper');

  //El overlay es el contenedor de la imagen ampliada
  const overlay = document.createElement('DIV');
  overlay.classList.add('overlay');

  //botón para cerrar la imagen
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);

  // Insertando elementos_______________________
  divZoomContenedor.appendChild(imagenAmpliada);
  divSwiperSlide.appendChild(divZoomContenedor);
  divSwiperWrapper.appendChild(divSwiperSlide);
  divSwiper.appendChild(divSwiperWrapper);

  // Verifica si hay que devolver elementos
  let devolverHamburguesa;
  if(botonMenu.classList.contains('desvanecer')){
    devolverHamburguesa = false;      
  } else {
    botonMenu.classList.add('desvanecer');
    devolverHamburguesa = true;
  }
  
  let devolverFooter;
  if(footerItems.classList.contains('desvanecer')){
    devolverFooter = false;
  } else {
    footerItems.classList.add('desvanecer');
    devolverFooter = true;
  }

  const btnAzul = document.querySelector('.boton');
  let devolverBtnAzul;
  if(btnAzul.classList.contains('desvanecer')){
    devolverBtnAzul = false;
  } else {
    btnAzul.classList.add('desvanecer');
    devolverBtnAzul = true;
  }

  //Se le agrega el evento para cerrar el overlay----------
  btnCerrarX.onclick = () => {
    caller.classList.remove('desvanecer');
    if(devolverHamburguesa){
      botonMenu.classList.remove('desvanecer');
      document.querySelector('.logo-tejirumis').classList.remove('encoger');
    }
    if(devolverFooter){
      footerItems.classList.remove('desvanecer');
    }
    if(devolverBtnAzul){
      btnAzul.classList.remove('desvanecer');
    }
    animateCSS(overlay, 'zoomOut');
    iniciarMostrarTodos();
    setTimeout(()=>{
      e.target.style.pointerEvents = 'auto';
      overlay.remove();
    },500);
  }

  divSwiperSlide.appendChild(btnCerrarX);
  overlay.appendChild(divSwiper);
  main.appendChild(overlay);

  // Animación de entrada-----
  animateCSS(overlay, 'zoomIn');

  iniciarAmpliarImagen();
}