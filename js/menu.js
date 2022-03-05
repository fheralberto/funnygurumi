// Hamburguesa
function menu(){
  // Menú
  const menuCubierta = document.createElement('div');
  menuCubierta.classList.add('menu-cubierta')

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const navegacion = document.createElement('mav');
  navegacion.classList.add('navegacion');

  // const botonMenu = document.querySelector('.menu-btn');
  // const botonMenu = document.createElement('div');
  // botonMenu.classList.add('menu-btn');

  // -----------Links---------
  const navAbout = document.createElement('div');
  navAbout.classList.add('link', 'nav-about');
  navAbout.textContent = 'Sobre nosotros';
  const bordeAbout = document.createElement('div');
  bordeAbout.classList.add('borde-ticket')
  bordeAbout.appendChild(navAbout);
  // Agregando evento------
  navAbout.addEventListener('click', ()=>{
    navAbout.style.pointerEvents = 'none';
    menu.classList.add('desvanecer');
    botonMenu.classList.add('desvanecer');
    acercaDe(menu);
  });

  const navLeyenda = document.createElement('div');
  navLeyenda.classList.add('link', 'navLeyenda');
  navLeyenda.textContent = 'Leyenda';
  const bordeLeyenda = document.createElement('div');
  bordeLeyenda.classList.add('borde-ticket')
  bordeLeyenda.appendChild(navLeyenda);
  // Agregando evento------
  navLeyenda.addEventListener('click', ()=>{
    navLeyenda.style.pointerEvents = 'none';
    menu.classList.add('desvanecer');
    botonMenu.classList.add('desvanecer');
    mostrarLeyenda(menu);
  });

  const navGaleria = document.createElement('div');
  navGaleria.classList.add('link', 'navGaleria');
  navGaleria.textContent = 'Nuestro trabajo';
  const bordeGaleria = document.createElement('div');
  bordeGaleria.classList.add('borde-ticket')
  bordeGaleria.appendChild(navGaleria);
  // Agregando evento------
  navGaleria.addEventListener('click', () =>{
    navGaleria.style.pointerEvents = 'none';
    ocultar();
  });

  const navCatalogo = document.createElement('div');
  navCatalogo.classList.add('link');
  navCatalogo.textContent = 'Ideas ';

  const iconoFoco = document.createElement('i');
  iconoFoco.classList.add('fa-solid', 'fa-lightbulb-on');
  navCatalogo.appendChild(iconoFoco);
  
  const bordeCatalogo = document.createElement('div');
  bordeCatalogo.classList.add('borde-ticket')
  bordeCatalogo.appendChild(navCatalogo);
  // Agregando evento------
  bordeCatalogo.addEventListener('click', ()=>{
    menu.classList.add('desvanecer');
    botonMenu.classList.add('desvanecer');
    mostrarCatalogo(menu, botonMenu);
  })
  
  navegacion.appendChild(bordeAbout);
  navegacion.appendChild(bordeLeyenda);
  navegacion.appendChild(bordeGaleria);
  navegacion.appendChild(bordeCatalogo);
  menu.appendChild(navegacion);

  // Agregando evento------
  botonMenu.addEventListener('click', ()=>{
    const galeria = document.querySelector('.galeria');
    const btnMostrar = document.querySelector('.boton');
    
    menuCubierta.classList.toggle('abierto');
    menu.classList.toggle('abierto');
    botonMenu.classList.toggle('abierto');
    galeria.classList.toggle('desvanecer');
    footerItems.classList.toggle('desvanecer');
    btnMostrar.classList.toggle('desvanecer');
    document.querySelector('.logo-tejirumis').classList.toggle('encoger');
  });

  const menuBtnHamburgesa = document.createElement('div');
  menuBtnHamburgesa.classList.add('hamburguesa');
  
  botonMenu.appendChild(menuBtnHamburgesa);
  main.appendChild(menuCubierta);
  main.appendChild(menu);
}

// function toggleMenu(){
//   const menu = document.querySelector('.menu');
//   const existeAbierto = document.querySelectorAll('.abierto');
//   if(existeAbierto.length < 1){
//     menu.classList.add('abierto');
//   } else {
//     menu.classList.remove('abierto')
//   }
// }
