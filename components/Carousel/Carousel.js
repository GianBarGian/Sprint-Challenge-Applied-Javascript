class Carousel {
    constructor (carousel) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img');
        this.images = Array.from(this.images);
        this.index = 0;
        console.log(this.images.length);

        this.selectImage();
        this.rightButton.addEventListener('click', () => {
            this.selectImage();
            if (this.index == this.images.length - 1) {
                this.index = 0;
                this.selectImage();
            } else {
                this.index++;
                this.selectImage();
            }
            TweenMax.from(".selected-img", 1, {xPercent: -100});
        })

        this.leftButton.addEventListener('click', () => {
            this.selectImage();
            if (this.index === 0) {
                this.index = this.images.length - 1;
                this.selectImage();
            } else {
                this.index--;
                this.selectImage();
            }
            TweenMax.from(".selected-img", 1, {xPercent: +100});
        })
       
    }
    
    selectImage() {
        this.images[this.index].classList.toggle('selected-img');
    }
}



let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/