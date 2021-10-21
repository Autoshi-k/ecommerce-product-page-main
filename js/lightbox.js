const lightbox = document.querySelector('.lightbox');
const product = document.querySelector('.lightbox.product');
const previewImg = document.querySelectorAll('.lightbox.thumbnail');
let currentImg = 1;

function closeLightbox() {
  lightbox.style.display = 'none';
}

function openLightbox(image) {
  if (window.innerWidth > 1150) {
    lightbox.style.display = 'flex';
    // currentImg = image.target.id; // not working for now
    currentImg = 1;
    chaneImage(currentImg);
  }
}

function chaneImage(currentImg) {
  product.src = `images/image-product-${currentImg}.jpg`;
  previewImg[currentImg-1].classList.add('selected-img');
}

function removeClass(imgRemoveClass) {
  previewImg[imgRemoveClass].classList.remove('selected-img');
}



function nextArrow() {
  removeClass(currentImg - 1);
  currentImg === 4 ? currentImg = 1 : currentImg++
  chaneImage(currentImg);
}

function preArrow() {
  removeClass(currentImg - 1);
  currentImg === 1 ? currentImg = 4 : currentImg--;
  chaneImage(currentImg);
}

function previewClick(image) {
  removeClass(currentImg - 1);
  chaneImage(currentImg = image.target.id);
}





previewImg.forEach(thumbnail => thumbnail.addEventListener('click', previewClick))

document.querySelector('.pre').addEventListener('click', preArrow);
document.querySelector('.next').addEventListener('click', nextArrow);
document.querySelectorAll('.section.thumbnail').forEach(thumbnail => thumbnail.addEventListener('click', openLightbox));
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
