// El boton azul es mostrarTodos
function btnAzul(){
  const btnMostrarTodos = document.createElement('div');
  btnMostrarTodos.textContent = "Nuestro trabajo";
  btnMostrarTodos.classList.add('boton');
  btnMostrarTodos.setAttribute("id", "boton");
  main.appendChild(btnMostrarTodos);
  // Evento para mostrar todos --------------------------
  btnMostrarTodos.addEventListener("click", () =>{
    btnMostrarTodos.style.pointerEvents = 'none';
    ocultar();
  });
}

function ocultar() {
  // Verifica si ya se creó el menú al abrirse
  const existeContenedorMenu = document.querySelectorAll('.menu');
  if(existeContenedorMenu.length > 0){
    document.querySelector('.menu').classList.add('desvanecer');
  }
  // Verifica que el menú no esté abierto 
  if(!botonMenu.classList.contains('abierto')){ // Menú cerrado
    document.querySelector('.boton').classList.add('desvanecer');
    document.querySelector('.logo-tejirumis').classList.add('encoger');
    footerItems.classList.add('desvanecer');
    if (mostrar == true) {
      mostrar = false
      limpiaGaleria()
      hijos = galeria.childNodes.length
    }
  }
  botonMenu.classList.add('desvanecer');
  mostrarTodos();
}

function reiniciar(seccion) {
  // Verifica si ya se creó el menú
  const existeContenedorMenu = document.querySelectorAll('.menu');
  if(existeContenedorMenu.length > 0){
    document.querySelector('.menu').classList.remove('desvanecer');;
  }
  // Verifica que el menú no esté abierto
  if(!botonMenu.classList.contains('abierto')){ // Menú cerrado
    const botonAzul = document.querySelector('.boton');
    botonAzul.classList.remove('desvanecer');
    botonAzul.style.pointerEvents = 'auto';
    document.querySelector('.logo-tejirumis').classList.remove('encoger');
    footerItems.classList.remove('desvanecer');
    if (mostrar == false) {
      mostrar = true;
      queriesListeners('De regreso');
    }
  } else { // Menú abierto
    console.log('Menú abierto');
    document.querySelector('.navGaleria').style.pointerEvents = 'auto';
  }
  botonMenu.classList.remove('desvanecer');
  seccion.remove();
}