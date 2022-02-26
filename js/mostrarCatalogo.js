function mostrarCatalogo(menu, menuBtn){
  const seccionCatalogo = document.createElement('section');
  seccionCatalogo.classList.add('catalogo');
  // Slider de la imagen grande
  const mySwiper2 = document.createElement('div');
  mySwiper2.classList.add('swiper', 'mySwiper2');
  slider(seccionCatalogo, mySwiper2);
  // Slider de las miniaturas
  const mySwiper = document.createElement('div');
  mySwiper.classList.add('swiper', 'mySwiper');
  mySwiper.setAttribute('thumbSlider', '');
  slider(seccionCatalogo, mySwiper, menu, menuBtn);

  iniciarCatalogo();
}

function slider(seccionCatalogo, elSwiper, menu, menuBtn){
  seccionCatalogo.appendChild(elSwiper);
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');
  elSwiper.appendChild(swiperWrapper);
  // Creación de las cards
  catalogoPatrones.forEach(patron =>{
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperWrapper.appendChild(swiperSlide);

    const imagen = document.createElement('img');
    imagen.setAttribute('src', `/img/catalogo/${patron.nombre}.jpg`);
    imagen.setAttribute('alt', patron.nombre);

    if(elSwiper.classList.contains('mySwiper2')){
      const swiperZoom = document.createElement('div');
      swiperZoom.classList.add('swiper-zoom-container'); //-mySwiper2
      // Insertando elementos
      swiperZoom.appendChild(imagen);
      swiperSlide.appendChild(swiperZoom);
    } else {
      swiperSlide.appendChild(imagen);
    }
  });

  if(elSwiper.classList.contains('mySwiper2')){
    const next = document.createElement('div');
    const prev = document.createElement('div');
    next.classList.add('swiper-button-next');
    prev.classList.add('swiper-button-prev');
    elSwiper.appendChild(next);
    elSwiper.appendChild(prev);  //-mySwiper2
  }

  //botón para cerrar el catálogo
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);  

  //Se le agrega el evento para cerrar el catalogo---------
  btnCerrarX.onclick = () => {
    // seccionCatalogo.classList.add('desvanecer');
    // btnCerrarX.remove();
    animateCSS(seccionCatalogo, 'fadeOutDownBig');
    setTimeout(()=>{
      seccionCatalogo.remove();
    }, 500);

    menu.classList.remove('desvanecer');
    menuBtn.classList.remove('desvanecer');
  }

  seccionCatalogo.appendChild(btnCerrarX);
  main.appendChild(seccionCatalogo);
  animateCSS(seccionCatalogo, 'fadeIn');
}