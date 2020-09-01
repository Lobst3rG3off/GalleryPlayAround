function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found');
  }
  //select the elements needed
  const images = Array.from(gallery.querySelectorAll('img')) ;
  const modal = document.querySelector('.modal')
  console.log(images)

  
  
}

//use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));