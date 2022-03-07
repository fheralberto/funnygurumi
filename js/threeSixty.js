// Funciones para los 360°
function threeSixty(e) {
  let nombre;
  if(e.target.classList.contains('fa-solid')){
    nombre = e.target.parentNode.dataset.nombreImagen;
    e.target.parentNode.style.pointerEvents = 'none';
  } else {
    nombre = e.target.dataset.nombreImagen;
    e.target.style.pointerEvents = 'none';
  }

  const seccion = document.querySelector('.mostrar-todo');
  seccion.classList.add('desvanecer');
  // Crea el html para el 360
  const inputRange = document.createElement('input');
  inputRange.classList.add('rango');
  inputRange.setAttribute('id', 'rango');
  inputRange.setAttribute('type', 'range');
  inputRange.setAttribute('min', '1');
  inputRange.setAttribute('max', '37');
  inputRange.setAttribute('value', '1');
  
  const canvasElement = document.createElement('canvas');
  canvasElement.classList.add('canvas');
  canvasElement.setAttribute('id', 'canvas');
  canvasElement.setAttribute('width', '480');
  canvasElement.setAttribute('height', '640');

  const divCard = document.createElement('div');
  divCard.classList.add('card');
  divCard.appendChild(canvasElement);
  divCard.appendChild(inputRange);

  const divFiguras = document.createElement('div');
  divFiguras.classList.add('figuras');
  divFiguras.appendChild(divCard);

  const overlay = document.createElement('DIV');
  overlay.classList.add('overlay');
  overlay.appendChild(divFiguras);
  
  //botón para cerrar la imagen
  const btnCerrarX = document.createElement('div');
  btnCerrarX.classList.add('btn-cerrar-x');
  const x = document.createElement('div');
  x.classList.add('x');
  btnCerrarX.appendChild(x);  

  //Se le agrega el evento para cerrar el contenedor----------------
  btnCerrarX.onclick = () => {
    seccion.classList.remove('desvanecer');
    animateCSS(overlay, 'zoomOut');
    setTimeout(()=>{
      e.target.style.pointerEvents = 'auto';
      overlay.remove();
    },500);
  }

  divCard.appendChild(btnCerrarX);
  //Mostrar en el HTML
  main.appendChild(overlay);
  animateCSS(overlay, 'zoomIn');
  //-------------------------------------------------

  
  const ctx = canvasElement.getContext('2d');
  const fotogramas = [];
  // Listener para cada imagen
  inputRange.addEventListener('input', () => {
    handleInputSlider(inputRange, ctx, fotogramas, canvasElement)
  });
  for (let i = 1; i <= 37; i += 1) {
    const number = i.toString().padStart(2, '00');
    const image = new Image()
    if(i === 37){
      image.src = `../img/${nombre}/01.png`
    } else {
      image.src = `../img/${nombre}/${number}.png`
    }
    image.addEventListener('load', () => {
      fotogramas[i] = image
      if (i === 1) {
        loadImage(ctx, fotogramas[i], canvasElement);
      }
    })
  }
}
function loadImage(ctx, fotogramas, canvasEl) {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ctx.drawImage(fotogramas, 0, 0, canvasEl.width, canvasEl.height);
}
function handleInputSlider(inputRange, ctx, fotogramas, canvasEl) {
  loadImage(ctx, fotogramas[inputRange.value], canvasEl)
}