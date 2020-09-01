function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  // select the elements needed
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('opening modal');
    // first check if the modal is already open
    if (modal.matches('.open')) {
      console.info('modal already open');
    }
    modal.classList.add('open');

    // events listeners to be bound on opening
    window.addEventListener('keyup', handleKeyUp)
    nextButton.addEventListener('click',showNextImage)
    prevButton.addEventListener('click',showPrevImage)
  }

  function closeModal() {
    modal.classList.remove('open');
    //  add event listeners for outside clicks or escape
    window.removeEventListener('keyup', handleKeyUp)
    nextButton.removeEventListener('click',showNextImage)
    prevButton.removeEventListener('click',showPrevImage)
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape')   closeModal();    
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild)
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild)
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }

    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // event listeners

  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );

  modal.addEventListener('click', handleClickOutside);
 
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
