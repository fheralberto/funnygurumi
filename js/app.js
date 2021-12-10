window.addEventListener('load', cargaFiguras)
function cargaFiguras() {
  // Cochinito
  const slider01 = document.querySelector('#slider01');
  const canvas01 = document.querySelector('#canvas01')
  const ctx01 = canvas01.getContext('2d');
  const images01 = [];
  const tipo01 = '.png';
  pageLoaded(slider01, canvas01, '01-cochinito', ctx01, images01, tipo01);
  // Patito
  const slider02 = document.querySelector('#slider02');
  const canvas02 = document.querySelector('#canvas02')
  const ctx02 = canvas02.getContext('2d');
  const images02 = [];
  const tipo02 = '.png';
  pageLoaded(slider02, canvas02, '02-patito', ctx02, images02, tipo02);
  // Reno Verde
  const slider03 = document.querySelector('#slider03');
  const canvas03 = document.querySelector('#canvas03')
  const ctx03 = canvas03.getContext('2d');
  const images03 = [];
  const tipo03 = '.png';
  pageLoaded(slider03, canvas03, '03-renoVerde', ctx03, images03, tipo03);
};
function pageLoaded(sliderInput, canvas, carpeta, ctx, images, tipo) {
  sliderInput.addEventListener('input', () => {
    handleInputSlider(sliderInput, ctx, images, canvas)
  });
  for (let i = 1; i <= 37; i += 1) {
    const number = i.toString().padStart(2, '00');
    const image = new Image()
    if(i === 37){
      image.src = `../img/${carpeta}/01${tipo}`  
    } else {
      image.src = `../img/${carpeta}/${number + tipo}`
    }
    image.addEventListener('load', () => {
      images[i] = image
      if (i === 1) {
        loadImage(ctx, images[i], canvas);
      }
    })
  }
}
function loadImage(ctx, images, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(images, 0, 0, canvas.width, canvas.height);
}
function handleInputSlider(sliderInput, ctx, images, canvas) {
  loadImage(ctx, images[sliderInput.value], canvas)
}