function buscarPatrones(menu, menuBtn){
  let resultado = catalogoPatrones;
  const criterios = ['todo', 'princesa', 'comic'];

  const seccionBuscar = document.createElement('div');
  seccionBuscar.classList.add('seccion-buscar');

  const luz = document.createElement('div');
  luz.classList.add('luz');
  seccionBuscar.appendChild(luz);

  const hex = document.createElement('div');
  hex.classList.add('hex');
  seccionBuscar.appendChild(hex);

  const encabezado = document.createElement('div');
  encabezado.classList.add('encabezado-buscar');
  hex.appendChild(encabezado);

  const logo = document.createElement('div');
  logo.classList.add('logo-buscar');
  encabezado.appendChild(logo);

  const titulo = document.createElement('h2');
  titulo.textContent = 'Patrones';
  encabezado.appendChild(titulo);

  const contenido = document.createElement('div');
  contenido.classList.add('contenido-buscar');
  hex.appendChild(contenido);

  // Elementos de búsqeda
  const elemBusqueda = document.createElement('div');
  elemBusqueda.classList.add('elem-busqueda');
  contenido.appendChild(elemBusqueda);

  const barraBoton = document.createElement('div');
  barraBoton.classList.add('barra-boton');
  elemBusqueda.appendChild(barraBoton);

  // Área para los resultados------------------
  const items = document.createElement('div');
  items.classList.add('items');
  elemBusqueda.appendChild(items);

  // Barra de búsqueda
  const barraBuscar = document.createElement('div');
  barraBuscar.classList.add('barra-buscar');
  barraBoton.appendChild(barraBuscar);

    // ícono de búsqueda
  const iconoBuscar = document.createElement('form');
  iconoBuscar.classList.add('icono-buscar');
  barraBuscar.appendChild(iconoBuscar);

  iconoBuscar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-buscar" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>'

    // input tipo texto para buscar
  const inputBuscar = document.createElement('input');
  inputBuscar.setAttribute('type', 'text');
  inputBuscar.setAttribute('placeholder', 'Buscar...');
  inputBuscar.classList.add('input-buscar');
  barraBuscar.appendChild(inputBuscar);

  // Select de etiquetas
  const select = document.createElement('select');
  select.classList.add('select-buscar');
  barraBoton.appendChild(select);

  // Llenando el select
  criterios.forEach(criterio => {
    const opcion = document.createElement('option');
    opcion.value = criterios.indexOf(criterio);
    opcion.textContent = criterio
    select.appendChild(opcion)
  });

  // _________________________________________________________
  // Al cambiar el valor del buscador
  inputBuscar.addEventListener('change', e =>{
    resultado = filtrarPatrones(e.target.value.toLowerCase());
    if(!resultado.length){
      resultado = catalogoPatrones;
      inputBuscar.value = "";
    }
    listaPatrones(items, resultado);
    // select.textContent = `Ver ${resultado.length} como galería`;
  })
  // _________________________________________________________

  // evento click al cambiar el valor del select
  select.addEventListener('change', e =>{
    const indice = e.target.selectedIndex
    const seleccionado = e.target.options[indice].textContent
    console.log(indice);
    console.log(e.target.options[indice].textContent);
    resultado = filtrarPatrones(seleccionado.toLowerCase());
    console.log(resultado);

    if(!resultado.length){
      resultado = catalogoPatrones;

      const itemDescripcion = document.createElement('p');
      itemDescripcion.classList.add('item-descripcion');
      itemDescripcion.textContent = 'No hay resultados';
      items.appendChild(itemDescripcion);
    }
    listaPatrones(items, resultado);
    // mostrarCatalogo(menu, botonMenu, resultado);
  });

  // Evento para que al presionar enter se posicione el foco en el botón
  inputBuscar.addEventListener('keyup', e => {
    if (e.code == 'Enter') {
      select.focus();
    }
  });

  //botón para cerrar el catálogo
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);  

  //Se le agrega el evento para cerrar el catalogo---------
  btnCerrarX.onclick = () => {
    animateCSS(seccionBuscar, 'fadeOutDownBig');
    setTimeout(()=>{
      seccionBuscar.remove();
      document.querySelector('.patrones').style.pointerEvents = 'auto';
    }, 500);
    
    menu.classList.remove('desvanecer');
    menuBtn.classList.remove('desvanecer');
  }

  encabezado.appendChild(btnCerrarX);
  main.appendChild(seccionBuscar);
  inputBuscar.focus();
  animateCSS(seccionBuscar, 'fadeIn');

  // Mueve la luz sigiendo al cursor
  // seccionBuscar.addEventListener('mousemove', e =>{
  //   luz.style.left = `${e.clientX}px`;
  //   luz.style.top = `${e.clientY}px`;
  // });

  // Acomoda la luz de fondo en la posición y tamaño del título
  // acomodarLuz(luz, titulo);
  // window.addEventListener('resize', ()=>acomodarLuz(luz, titulo));
}

function listaPatrones(items, resultadoBuscar){
  limpiaItems(items);
  resultadoBuscar.forEach(patron => {
    const item = document.createElement('div');
    item.classList.add('item');
    items.appendChild(item);

    const itemImagen = document.createElement('img');
    itemImagen.setAttribute('loading', 'lazy');
    itemImagen.setAttribute("src", `/img/miniaturas/${patron.nombre}.jpg`);
    itemImagen.setAttribute("alt", patron.descripcion);
    //Le crea atributo data-item-id
    itemImagen.dataset.itemId = patron.nombre;
    item.appendChild(itemImagen)
    // Evento para ampliar la imagen
    itemImagen.onclick = ampliarPatron;

    const itemDescripcion = document.createElement('p');
    itemDescripcion.classList.add('item-descripcion');
    itemDescripcion.textContent = patron.descripcion;
    item.appendChild(itemDescripcion);
  });
}

// ___________________________________________________________
function filtrarPatrones(valorInput){
  // console.log(valorInput);
  const resultadoBuscar = catalogoPatrones.filter(patron=>
    patron.etiquetas.split(",").includes(valorInput) ? patron : ""
  );
  console.log(resultadoBuscar);
  return resultadoBuscar;
}
// ___________________________________________________________

function limpiaItems(items){
  while(items.firstChild){
    items.removeChild(items.firstChild);
  }
}

// function acomodarLuz(luz, elemento){
//   luz.style.left = `${elemento.offsetLeft}px`;
//   luz.style.top =  `${elemento.offsetTop}px`;
//   luz.style.width =  `${elemento.getBoundingClientRect().width}px`;
//   luz.style.height = `${elemento.getBoundingClientRect().height}px`;
//   console.log(elemento.getBoundingClientRect());
// }