const carouselSlide = document.querySelector('.carousel-slide');

const carouselImg = document.querySelectorAll('.carousel-slide img');

//buttons

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

//counter

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter) +'px)';


nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImg.length -1) return;
    

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) +'px)';
});


prevBtn.addEventListener('click', ()=>{

    if (counter <= 0) return;


    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) +'px)';
});


carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImg[counter].id === 'lastclone'){
        carouselSlide.style.transition = 'none';
        counter =  carouselImg.length-2;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out'; 
    }

    if(carouselImg[counter].id === 'firstclone'){
        carouselSlide.style.transition = 'none';
        counter =  carouselImg.length-counter;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out'; 
    }

});
