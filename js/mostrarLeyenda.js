function mostrarLeyenda(menu){
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

  pDos.textContent = 'dicen que cuando tienes un amigurumi se convierte en tu mejor amigo, tu confidente al cual le podrás contar tus secretos y ellos nunca los revelan! Por eso los amigurumis originales no tienen boca.'

  //botón para cerrar la leyenda
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);

  // const cerrarLeyenda = document.createElement('div');
  // cerrarLeyenda.classList.add('btn-cerrar');
  // cerrarLeyenda.textContent = 'X'

  //Se le agrega el evento para cerrar el contenedor----------------
  btnCerrarX.onclick = () => {
    // divLeyendaContenedor.classList.add('subir');
    // btnCerrarX.remove();
    animateCSS(divLeyendaOverlay, 'backOutUp');
    setTimeout(()=>{
      document.querySelector('.navLeyenda').style.pointerEvents = 'auto';
      divLeyendaOverlay.remove();
    }, 500);
    
    menu.classList.remove('desvanecer');
    botonMenu.classList.remove('desvanecer');
  }

  divLeyendaContenedor.appendChild(btnCerrarX);
  main.appendChild(divLeyendaOverlay);

  animateCSS(divLeyendaOverlay, 'backInDown');

  setTimeout(()=>{
    pUno.classList.add('aparecer');
    pDos.classList.add('aparecer');
  }, 500)
}