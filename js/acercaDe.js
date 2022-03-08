function acercaDe(menu){
  const miembros = [
    { 'nombre': 'haciendoKermit.jpg', 'alt':'Tejiendo a la rana René', 'descripcion': 'Ella es Chaly, apurada a terminar a la rana René'},
    { 'nombre': 'jugandoKermit.jpg', 'alt':'Jugando con la rana René', 'descripcion': 'Pero antes a jugar un rato, dile "Holaa"'},
    { 'nombre': 'culpable.png', 'alt':'amoy culpable', 'descripcion': 'Ella es amoy y fué declarada culpable'},
    { 'nombre': 'certificadoPrincipiante.png', 'alt':'Amoy certificado amigurumis', 'descripcion': 'De terminar el curso de amigurumis'},
    { 'nombre': 'haciendoAlice.jpg', 'alt':'tejiendo a Alice', 'descripcion': 'Aquí haciendo a Alicia para el curso avanzado de amigurumis'},
    { 'nombre': 'StaffTejirumis.jpg', 'alt':'Staff Tejirumis', 'descripcion': 'Las tejirumis con el Fer, el creador del sitio web'},

  ]
  const acercaDeCubierta = document.createElement('div');
  acercaDeCubierta.classList.add('acercade-cubierta');

  const contenedorSeccion = document.createElement('div');
  contenedorSeccion.classList.add('contenedor-seccion');

  const divContenido = document.createElement('div');
  divContenido.classList.add('contenedor-contenido');
  contenedorSeccion.appendChild(divContenido);

  // Titulos
  const divTitulos = document.createElement('div');
  divTitulos.classList.add('acercade-titulos');
  divContenido.appendChild(divTitulos);

  const sobreNosotros = document.createElement('h2');
  sobreNosotros.textContent = 'Sobre Nosotros';
  divTitulos.appendChild(sobreNosotros);

  const tituloSobre = document.createElement('h3');
  tituloSobre.classList.add('encabezado-sobre');
  tituloSobre.textContent = 'Bienvenido a Tejirumis!';
  divTitulos.appendChild(tituloSobre);

  const divP = document.createElement('p')
  divP.textContent = 'donde las arañas tejen su bicho'
  divTitulos.appendChild(divP);


  const contenedorInfo = document.createElement('div');
  contenedorInfo.classList.add('contenedor-info');
  divContenido.appendChild(contenedorInfo);

  // Contenedor y fondo para imágenes
  const divImagenes = document.createElement('div');
  divImagenes.classList.add('contenedor-imagenes');
  contenedorInfo.appendChild(divImagenes);

  const cssFondo = document.createElement('css-doodle');
  cssFondo.classList.add('active');
  cssFondo.setAttribute('use', 'var(--pattern-11)');
  cssFondo.setAttribute('seed', '1608724650251');
  divImagenes.appendChild(cssFondo);

  // Crea área de swiper de imágenes
  const mySwiper = document.createElement('div');
  mySwiper.classList.add('swiper', 'mySwiper');
  divImagenes.appendChild(mySwiper);

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');
  mySwiper.appendChild(swiperWrapper);

  miembros.forEach(miembro =>{ // forEach--------------
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    swiperWrapper.appendChild(swiperSlide);

    const imagen = document.createElement('img');
    imagen.setAttribute('src', `/img/about/${miembro.nombre}`);
    imagen.setAttribute('alt', miembro.alt);
    swiperSlide.appendChild(imagen);

    const descripcionImg = document.createElement('p');
    descripcionImg.classList.add('descripcion-img');
    descripcionImg.textContent = miembro.descripcion;
    swiperSlide.appendChild(descripcionImg);

  })

  // Párrafos
  const divTextos = document.createElement('div');
  divTextos.classList.add('contenedor-textos');
  contenedorInfo.appendChild(divTextos);

  const tituloContenido = document.createElement('h3');
  tituloContenido.classList.add('titulo-contenido');
  tituloContenido.textContent = 'que alguna vez estaría tejiendo muñequitos';
  divTextos.appendChild(tituloContenido);

  const spanTitulo = document.createElement('span');
  spanTitulo.classList.add('span-titulo');
  spanTitulo.textContent = 'No me habría imaginado ';
  tituloContenido.insertBefore(spanTitulo, tituloContenido.firstChild);

  const divParrafos = document.createElement('div');
  divParrafos.classList.add('contenedor-parrafos');
  divTextos.appendChild(divParrafos);

  const parrafo1 = document.createElement('p');
  parrafo1.textContent = 'a principios del 2021 conocimos a los muñequitos tejidos llamados "Amigurumis" y casualmente nos salió la oportunidad de tomar un curso para aprender a hacerlos gracias al patrocinio del Ayuntamiento de Mérida, por cierto, nosotros radicamos en esta bella ciudad de Yucatán, México.'
  divParrafos.appendChild(parrafo1);

  const parrafo2 = document.createElement('p');
  parrafo2.textContent = 'seguimos aprendiendo, ahora estamos en un curso más avanzado. Vendemos los amigurumis que hacemos o nos hacen encargos; un amigurumi nos puede llevar de 2 a 7 días en terminarlo, pero nos emociona ver el resultado de nuestro trabajo.';
  divParrafos.appendChild(parrafo2);

  //botón para cerrar acercaDe
  const contenedorBtn = document.createElement('div');
  contenedorBtn.classList.add('contenedor-btn');
  contenedorSeccion.appendChild(contenedorBtn);

  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  contenedorBtn.appendChild(btnCerrarX);

  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);

  //Se le agrega el evento para cerrar el catalogo---------
  btnCerrarX.onclick = () => {
    animateCSS(btnCerrarX, 'fadeOutTopRight');
    contenedorSeccion.classList.remove('abierto');
    acercaDeCubierta.classList.remove('abierto');
    setTimeout(()=>{
      document.querySelector('.nav-about').style.pointerEvents = 'auto';
      contenedorSeccion.remove();
      acercaDeCubierta.remove();
    }, 500);

    menu.classList.remove('desvanecer');
    botonMenu.classList.remove('desvanecer');
  }

  main.appendChild(acercaDeCubierta);
  main.appendChild(contenedorSeccion);
  animateCSS(contenedorBtn, 'fadeInTopRight');

setTimeout(()=>{
  acercaDeCubierta.classList.add('abierto');
  contenedorSeccion.classList.add('abierto');
  iniciarAcercaDe();
},500);
}