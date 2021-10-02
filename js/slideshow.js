class SlideShow {
    constructor(containerId) {
        var cont = document.getElementById(containerId); // slide show container
        // throw exception if slide show container does not exist
        if (cont == null) {
            throw 'element [id=' + containerId + '] does not exist!';
        }
        var slides = cont.getElementsByClassName("slide-item"); // slides
        // throw exception if no slides were found within the container
        if (slides.lengt == 0) {
            throw 'no slides were found!';
        }

        // No errors found, both slides container and the slides were found
        // we initialize the global variables
        this.slides = slides;
        this.index = 0;

        console.log("slider is ready!");
        console.log("number of slides is: " + this.slides.length);
    }

   nextSlide() {
        var activeSlide = this.slides[this.index];
        activeSlide.setAttribute('class', 'slide-item');

        if (this.index >= this.slides.length - 1) {
            this.slides[0].setAttribute('class', 'slide-item active')
            this.index = 0 
        } else {
            this.slides[this.index + 1].setAttribute('class', 'slide-item active')
            this.index += 1
        }
    }

    previousSlide() {
        var activeSlide = this.slides[this.index]
        activeSlide.setAttribute('class' ,'slide-item')
        
        if(this.index <= 0){
            
            this.slides[this.slides.length - 1].setAttribute('class', 'slide-item active')
            this.index = this.slides.length - 1
        }else{ 
            this.slides[this.index - 1].setAttribute('class', 'slide-item active')
            this.index -= 1 
        }

    }
}
