// Script para o lightbox (ampliação da imagem)
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightbox-img')
const closeLightbox = document.querySelector('.close')

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function () {
    lightbox.style.display = 'flex'
    lightboxImg.src = this.src
  })
})

closeLightbox.addEventListener('click', function () {
  lightbox.style.display = 'none'
})

lightbox.addEventListener('click', function (e) {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none'
  }
})
