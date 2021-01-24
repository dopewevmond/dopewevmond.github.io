document.addEventListener("DOMContentLoaded", function() {
    !(function(d){
        var itemClassName = "carousel__photo";
        items = d.getElementsByClassName(itemClassName), totalItems = items.length, slide = 0, moving = true;
    
        //to initialize the carousel
        function setInitialClasses() {
            //this function targets the last, initial and next items to give them the relevant class
            //this assumes there are three or more items in the list
    
            items[totalItems - 1].classList.add("prev");
            items[0].classList.add("active");
            items[1].classList.add("next");
        }
    
    
        //set click events to navigation buttons
        function setEventListeners() {
            var next = d.getElementsByClassName("carousel__button--next")[0],
            prev = d.getElementsByClassName("carousel__button--prev")[0];
    
            next.addEventListener("click", moveNext);
            prev.addEventListener("click", movePrev);
        }
    
        //disable interaction by setting 'moving' to true for the duration of the carousel transition
        function disableInteraction() {
            moving = true;
    
            setTimeout(function(){
                moving = false
            }, 500);
        }
    
        function moveCarouselTo(slide) {
            //check if carousel is moving. if not allow interaction
            if(!moving) {
    
                //temporarily disable interactivity
                disableInteraction();
    
                //preemptively set variables for the current, next and previous slide, as well as the potential next or previous slide
                var newPrevious = slide -1,
                    newNext = slide +1,
                    oldPrevious = slide -2,
                    oldNext = slide + 2
    
                //checking if carousel has more than 3 items
                if((totalItems - 1) > 3) {
                    if (newPrevious <= 0) {
                        oldPrevious = (totalItems -1);
                    } else if (newNext >= (totalItems - 1)) {
                        oldNext = 0;
                    }
    
                    if (slide === 0) {
                        newPrevious = (totalItems - 1);
                        oldPrevious = (totalItems - 2);
                        oldNext = (slide + 1);
                    } else if (slide === (totalItems - 1)) {
                        newPrevious = (slide - 1);
                        newNext = 0;
                        oldNext = 1;
                    }
    
                    items[newPrevious].className = itemClassName + " prev";
                    items[slide].className = itemClassName + " active";
                    items[newNext].className = itemClassName + " next";
                }
            }
        }
    
        function moveNext() {
            if(!moving) {
                if (slide === (totalItems - 1)) {
                    slide = 0;
                } else {
                    slide++;
                }
    
                //move carousel to updated slide
                moveCarouselTo(slide);
            }
        }
    
        function movePrev() {
            if (!moving) {
                //if its the first slide set as the last slide, else -1
                if(slide === 0) {
                    slide = (totalItems - 1);
                } else {
                    slide--;
                }
    
                //move the carousel
                moveCarouselTo(slide);   
            }
        }
    
        //initialize carousel
        function initCarousel() {
            setInitialClasses();
            setEventListeners();
    
            //set moving to false now that carousel is ready
            moving = false;
        }
    
        initCarousel();
    
    }(document));
});
