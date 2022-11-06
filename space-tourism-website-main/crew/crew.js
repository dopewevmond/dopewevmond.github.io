const CREW = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "../assets/crew/image-douglas-hurley.png",
        "webp": "../assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "../assets/crew/image-mark-shuttleworth.png",
        "webp": "../assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "../assets/crew/image-victor-glover.png",
        "webp": "../assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "../assets/crew/image-anousheh-ansari.png",
        "webp": "../assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
];
var currentCarouselID = 1;

window.addEventListener('DOMContentLoaded', () => {
    const carouselButtons = document.querySelectorAll(".carousel-button");
    const largeCarouselButtons = document.querySelectorAll(".carousel-button-lg");

    // content dynamically changes based on the carousel
    const currentTitle = document.querySelector(".js-title");
    const currentName = document.querySelector(".js-name");
    const currentBio = document.querySelector(".js-bio");
    const currentImg = document.querySelector(".js-img");

    //for the fading animation
    const carouselContentContainer = document.querySelector(".lg-mt");

    carouselButtons.forEach(carouselBtn => {
        carouselBtn.addEventListener('click', (e) => {
            document.querySelector(".carousel-current").classList.remove("carousel-current");
            carouselBtn.classList.add("carousel-current");
            let currentCarouselData = CREW[carouselBtn.dataset.crew];

            // reducing the opacity and setting a timeout to 
            // allow the css animation display before the 
            // content of the carousel is changed
            carouselContentContainer.style.opacity = "0";
            currentImg.style.opacity = "0";
            
            setTimeout(() => {  
              currentImg.src = currentCarouselData.images.png;
              currentTitle.innerHTML = currentCarouselData.role.toUpperCase();
              currentName.innerHTML = currentCarouselData.name.toUpperCase();
              currentBio.innerHTML = currentCarouselData.bio;

              carouselContentContainer.style.opacity = "1";
              currentImg.style.opacity = "1";
            }, 300);
        });
      });

      largeCarouselButtons.forEach(lgCarouselBtn => {
        lgCarouselBtn.addEventListener('click', (e) => {
            document.querySelector(".carousel-current-lg").classList.remove("carousel-current-lg");
            lgCarouselBtn.classList.add("carousel-current-lg");
            let currentCarouselData = CREW[lgCarouselBtn.dataset.crew];

            // reducing the opacity and setting a timeout to 
            // allow the css animation display before the 
            // content of the carousel is changed
            carouselContentContainer.style.opacity = "0";
            currentImg.style.opacity = "0";
            
            setTimeout(() => {  
              currentImg.src = currentCarouselData.images.png;
              currentTitle.innerHTML = currentCarouselData.role.toUpperCase();
              currentName.innerHTML = currentCarouselData.name.toUpperCase();
              currentBio.innerHTML = currentCarouselData.bio;

              carouselContentContainer.style.opacity = "1";
              currentImg.style.opacity = "1";
            }, 300);
        });
      });

    // setInterval(() => {
    //     // dont click carousel buttons when navbar is open on
    //     // mobile devices
    //     if (!document.querySelector('.nav-open')) {
    //         carouselButtons[currentCarouselID].click();
    //         if (currentCarouselID > 2) {
    //             currentCarouselID = 0;
    //         }
    //         else {
    //             currentCarouselID++;
    //         }
    //     }
    // }, 6000);
});