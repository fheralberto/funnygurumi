// __________________________ Mostrar Todos __________________________
function mostrarTodos() {
  const divMostrarTodo = document.createElement('section');
  divMostrarTodo.classList.add('mostrar-todo');
  main.appendChild(divMostrarTodo);

  const cssFondo = document.createElement('div');
  cssFondo.classList.add('fondo-triangulos');
  divMostrarTodo.appendChild(cssFondo);

  const divSwiper = document.createElement('div');
  divSwiper.classList.add('container', 'swiper', 'mySwiper');
  divMostrarTodo.appendChild(divSwiper);

  const divSwiperWrapper = document.createElement('div');
  divSwiperWrapper.classList.add('swiper-wrapper');
  divSwiper.appendChild(divSwiperWrapper);

  datosGaleria.forEach(imagen => {
    const divSwiperSlide = document.createElement('div');
    divSwiperSlide.classList.add('swiper-slide');
    divSwiperWrapper.appendChild(divSwiperSlide);

    const divCardContent = document.createElement('div');
    divCardContent.classList.add('card-content');
    divSwiperSlide.appendChild(divCardContent);

    const divImage = document.createElement('div');
    divImage.classList.add('image');
    divCardContent.appendChild(divImage);

    const imgEl = document.createElement('img');
    imgEl.setAttribute("src", `img/galeria/${imagen.nombre}.png`);
    imgEl.setAttribute("alt", `${imagen.alt}`);
    divImage.appendChild(imgEl);

    //Le crea atributo data-imagen-id = nombre de la foto 
    imgEl.dataset.imagenId = imagen.nombre;

    // Se le agrega el evento onclick ---------------------------
    imgEl.onclick = ampliarImagen;

    const divInfoCard = document.createElement('div');
    divInfoCard.classList.add('info-card');
    divCardContent.appendChild(divInfoCard);

    const descripcion = document.createElement('div');
    descripcion.classList.add('descripcion');
    descripcion.textContent = imagen.alt;
    divInfoCard.appendChild(descripcion);

    const divTresSesenta = document.createElement('div');
    divTresSesenta.textContent = '360° ';
    divTresSesenta.classList.add('tresSesenta');
  
    const divBotones = document.createElement('div');
    divBotones.classList.add('botones');
    divBotones.appendChild(divTresSesenta);
    divInfoCard.appendChild(divBotones);

    if(imagen.disp){
      console.log(imagen.disp)
      const arrowRotate = document.createElement('i');
      arrowRotate.classList.add('fa-solid', 'fa-arrows-rotate');
      divTresSesenta.appendChild(arrowRotate);

      //Le crea atributo data-nombre-imagen = nombre de la foto 
      divTresSesenta.dataset.nombreImagen = imagen.nombre;
      // Se le agrega el evento onclick -----------------------------
      divTresSesenta.onclick = threeSixty;
    } else {
      divTresSesenta.disabled = true;
      divTresSesenta.classList.add('deshabilitado');
    }
    const divBefore = document.createElement('div');
    if(imagen.autor == 'norma'){
      divBefore.classList.add('before', 'morado');
      divImage.classList.add('morado');
      divBotones.classList.add('rosado');
    } else {
      divBefore.classList.add('before', 'rosado');
      divImage.classList.add('rosado');
      divBotones.classList.add('morado');
    }
    divSwiperSlide.appendChild(divBefore);
  });

  const anterior = document.createElement('div');
  anterior.classList.add('swiper-button-next')
  divSwiper.appendChild(anterior);

  const previo = document.createElement('div');
  previo.classList.add('swiper-button-prev')
  divSwiper.appendChild(previo);

  const paginacion = document.createElement('div');
  paginacion.classList.add('swiper-pagination')
  divSwiper.appendChild(paginacion);

  // Crea botón para cerrar la sección
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);
  divMostrarTodo.appendChild(btnCerrarX);

  //Se le agrega el evento para cerrar divMostrarTodo -----------------------
  btnCerrarX.onclick = () => {
    animateCSS(divMostrarTodo, 'bounceOutRight');
    setTimeout(()=>{
      reiniciar(divMostrarTodo);
    }, 500);
  }
  
  // Animación de entrada-----
  animateCSS(divMostrarTodo, 'bounceInRight');
    
  // inicializarSwiper()
  iniciarMostrarTodos();
}