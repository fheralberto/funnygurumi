function listaPatrones(items, resultadoBuscar){
  limpiaItems(items);
  items.classList.add('mb');
  if(resultadoBuscar.length > 0){
    resultadoBuscar.forEach(patron => {
      const item = document.createElement('div');
      item.classList.add('item');
      items.appendChild(item);

      const itemContenido = document.createElement('div');
      itemContenido.classList.add('item-contenido');
      item.appendChild(itemContenido);

      const caraFrontal = document.createElement('div');
      caraFrontal.classList.add('cara-frontal');
      itemContenido.appendChild(caraFrontal);
  
      const itemImagen = document.createElement('img');
      itemImagen.setAttribute('loading', 'lazy');
      itemImagen.setAttribute("src", `/img/miniaturas/${patron.nombre}.jpg`);
      itemImagen.setAttribute("alt", patron.descripcion);
      //Le crea atributo data-item-id
      itemImagen.dataset.itemId = patron.nombre;
      caraFrontal.appendChild(itemImagen)
      // Evento para ampliar la imagen
      itemImagen.onclick = ampliarPatron;
  
      const itemDescripcion = document.createElement('p');
      itemDescripcion.classList.add('item-descripcion');
      itemDescripcion.textContent = patron.descripcion;
      caraFrontal.appendChild(itemDescripcion);

      const reverso = document.createElement('div');
      reverso.classList.add('reverso');
      itemContenido.appendChild(reverso);

      const tituloItem = document.createElement('h3');
      tituloItem.classList.add('titulo-item');
      tituloItem.textContent = patron.descripcion
      reverso.appendChild(tituloItem);

      const linkPatron = `https://onedrive.live.com/?cid=C21D76B3A065FF4D&id=C21D76B3A065FF4D%${patron.idLink}&parId=C21D76B3A065FF4D%214605&o=OneUp`
      const enlacePatron = document.createElement('a');
      enlacePatron.setAttribute('href', linkPatron);
      enlacePatron.setAttribute('target', '_blank');
      enlacePatron.textContent = 'Patrón';
      reverso.appendChild(enlacePatron)

      const regresar = document.createElement('p');
      regresar.classList.add('regresar');
      regresar.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"/></svg> Regresar`
      reverso.appendChild(regresar);

      itemDescripcion.onclick = ()=>{
        itemDescripcion.style.pointerEvents = 'none';
        itemImagen.style.pointerEvents = 'none';
        regresar.style.pointerEvents = 'auto';
        itemContenido.classList.add('girar-item');
        itemImagen.classList.add('desvanecer');
      }
      regresar.onclick = ()=>{
        itemDescripcion.style.pointerEvents = 'auto';
        itemImagen.style.pointerEvents = 'auto';
        regresar.style.pointerEvents = 'none';
        itemContenido.classList.remove('girar-item');
        itemImagen.classList.remove('desvanecer');
      }
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