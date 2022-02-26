function mostrarGaleria(max) {
  limpiaGaleria();
  // console.log('Mostrando ', max);

  let lista = [];
  for (let i = 0; i < max; i++) {
    do{
      aleatorio = aleatorioEntero(0, 19);
    }
    while(lista.includes(aleatorio));
    lista.push(aleatorio);
  }
  // console.log(lista);
  for (let i = 0; i < max; i++) {
    const galeriaItem = document.createElement('div');
    galeriaItem.classList.add('galeria_item');

    const imagenItem = document.createElement('img');
    imagenItem.setAttribute("src", `img/galeria/${datosGaleria[lista[i]].nombre}.png`);
    imagenItem.setAttribute("alt", `${datosGaleria[lista[i]].alt}`);

    //Le crea atributo data-imagen-id = "i" 
    imagenItem.dataset.imagenId = datosGaleria[lista[i]].nombre;

    // Se le agrega el evento onclick ------------------------------------------
    imagenItem.onclick = ampliarImagen;

    galeriaItem.appendChild(imagenItem);
    galeria.appendChild(galeriaItem);
  }
}