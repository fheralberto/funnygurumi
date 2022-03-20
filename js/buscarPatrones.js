function buscarPatrones(menu, menuBtn){
  let resultado = catalogoPatrones;
  const criterios = ['Seleccione', 'Todo', 'Princesa', 'Comic', 'Hecho', 'Yoda'];

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

  const barraSelect = document.createElement('div');
  barraSelect.classList.add('barra-select');
  elemBusqueda.appendChild(barraSelect);

  // Select de etiquetas
  const select = document.createElement('select');
  select.classList.add('select-buscar');
  barraSelect.appendChild(select);

  // Barra de búsqueda
  const barraBuscar = document.createElement('div');
  barraBuscar.classList.add('barra-buscar');
  barraSelect.appendChild(barraBuscar);

    // ícono de búsqueda
  const iconoBuscar = document.createElement('div');
  iconoBuscar.classList.add('icono-buscar');
  barraBuscar.appendChild(iconoBuscar);

  iconoBuscar.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-buscar" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>'

    // input tipo texto para buscar
  const inputBuscar = document.createElement('input');
  inputBuscar.setAttribute('type', 'text');
  inputBuscar.setAttribute('placeholder', 'Buscar...');
  inputBuscar.classList.add('input-buscar');
  barraBuscar.appendChild(inputBuscar);

  // Área para los resultados------------------
  const items = document.createElement('div');
  items.classList.add('items');
  elemBusqueda.appendChild(items);

  // Llenando el select
  actualizarSelectCriterios(criterios, select);

  // Al cambiar el valor del buscador
  inputBuscar.addEventListener('change', e =>{
    const textoBuscar = e.target.value.toLowerCase().trim();
    resultado = filtrarPatrones(textoBuscar);
    // Reemplaza el includes para minimizar cada criterio
    let existe = true;
    criterios.forEach(criterio=>{
      if(criterio.toLowerCase() === textoBuscar){
        existe = false;
      }
    });
    
    // Capitalizar la primera letra del string
    const capitalizado = capitalizarPrimeraLetra(textoBuscar);
    if(resultado.length>0 && existe){
      criterios.push(capitalizado);
      actualizarSelectCriterios(criterios, select);
    } else {
      select.value = '0';
    }
    if(inputBuscar.value == ''){
      limpiaItems(items);
      items.classList.remove('mb');
    } else {
      // inputBuscar.value = `${capitalizado} (${resultado.length})`
      listaPatrones(items, resultado);
    }
  })

  // Al dar click al buscador
  inputBuscar.addEventListener('click', ()=> inputBuscar.select());

  // Evento para que al presionar enter cambie el foco
  inputBuscar.addEventListener('keyup', e => {
    if (e.code == 'Enter') {
      select.focus();
      inputBuscar.select();
    }
  });

  // evento click al cambiar el valor del select
  select.addEventListener('change', e =>{
    const indice = e.target.selectedIndex
    const seleccionado = e.target.options[indice].textContent;
    resultado = filtrarPatrones(seleccionado.toLowerCase());
    // console.log(indice);
    // console.log(seleccionado);

    if(!resultado.length){
      resultado = catalogoPatrones;
      const itemDescripcion = document.createElement('p');
      itemDescripcion.classList.add('item-descripcion');
      itemDescripcion.textContent = 'No hay resultados';
      items.appendChild(itemDescripcion);
    }
    inputBuscar.value = seleccionado;
    listaPatrones(items, resultado);
    // mostrarCatalogo(menu, botonMenu, resultado);
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
  select.focus();
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

function actualizarSelectCriterios(criterios, select){
  while(select.firstChild){
    select.removeChild(select.firstChild);
  }
  criterios.forEach(criterio => {
    const opcion = document.createElement('option');
    opcion.value = criterios.indexOf(criterio);
    if(opcion.value == 0){
      opcion.setAttribute('disabled', '');
      opcion.setAttribute('selected', '');
    }
    opcion.textContent = criterio
    select.appendChild(opcion);
  });
}

function listaPatrones(items, resultadoBuscar){
  limpiaItems(items);
  items.classList.add('mb');
  if(resultadoBuscar.length > 0){
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
  } else {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemResultado = document.createElement('p');
    itemResultado.classList.add('item-descripcion');
    itemResultado.textContent = 'No hay resultados';
    item.appendChild(itemResultado);
    
    items.appendChild(item);
  }
}

// ___________________________________________________________
function filtrarPatrones(valorInput){
  // console.log(valorInput);
  const resultadoBuscar = catalogoPatrones.filter(patron=>
    patron.etiquetas.split(",").includes(valorInput) ? patron : ""
  );
  return resultadoBuscar;
}
// ___________________________________________________________

function capitalizarPrimeraLetra(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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