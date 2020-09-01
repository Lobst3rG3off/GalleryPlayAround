function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  //select the elements needed
  const images = Array.from(gallery.querySelectorAll('img')) ;
  const modal = document.querySelector('.modal')
  const prevButton = modal.querySelector('.prev')
  const nextButton = modal.querySelector('.next')
  let currentTarget

  function openModal() {
    console.info('opening modal')
    // first check if the modal is already open
  }
  function showImage(el) {
    if (!el) {
      console.info('no image to show')
      return
    }
    console.log(el)
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el
    openModal()
  }
 
  images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)))
}

//use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));