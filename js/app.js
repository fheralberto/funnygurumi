window.addEventListener('load', cargaFiguras)
function cargaFiguras() {
  // Cochinito
  slider01 = document.querySelector('#slider01');
  canvas01 = document.querySelector('#canvas01')
  ctx01 = canvas01.getContext('2d');
  const images01 = [];
  pageLoaded(slider01, canvas01, '01-cochinito', ctx01, images01);
  // Patito
  slider02 = document.querySelector('#slider02');
  canvas02 = document.querySelector('#canvas02')
  ctx02 = canvas02.getContext('2d');
  const images02 = [];
  pageLoaded(slider02, canvas02, '02-patito', ctx02, images02);
  // Reno Verde
  slider03 = document.querySelector('#slider03');
  canvas03 = document.querySelector('#canvas03')
  ctx03 = canvas03.getContext('2d');
  const images03 = [];
  pageLoaded(slider03, canvas03, '03-renoVerde', ctx03, images03);
};
function pageLoaded(sliderInput, canvas, carpeta, ctx, images) {
  sliderInput.addEventListener('input', () => {
    handleInputSlider(sliderInput, ctx, images, canvas)
  });
  for (let i = 1; i <= 36; i += 1) {
    const number = i.toString().padStart(2, '00');
    const image = new Image()
    image.src = `../img/${carpeta}/${number}.jpg`
    image.addEventListener('load', () => {
      images[i] = image
      if (i === 1) {
        loadImage(ctx, images[i], canvas);
      }
    })
  }
}
function loadImage(ctx, images, canvas) {
  ctx.drawImage(images, 0, 0, canvas.width, canvas.height);
}
function handleInputSlider(sliderInput, ctx, images, canvas) {
  loadImage(ctx, images[sliderInput.value], canvas)
}