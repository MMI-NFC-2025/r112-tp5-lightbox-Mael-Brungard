// *** LIGHTBOX ***
const lightBox = document.querySelector("#lightbox");
const images = document.querySelectorAll('.listimages');
const lbimg = lightBox.querySelector('img');

images.forEach(e => {
    const url = e.dataset.fullImg;
    e.addEventListener('click', () => {
        lbimg.src = url;
        lightBox.showModal();
    });
});

lightBox.addEventListener('click', () => {
    lightBox.close();
});

