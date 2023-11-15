// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate Header
    animateHeader();

    // Gallery Image Hover Effect
    setupGalleryHoverEffect();

    // Zoom-in Images Animation
    animateZoomInImages();

    // Zoom-out Section Animation
    animateZoomOutSection();

    // Handle quiz form submission
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Define the correct answer
        const correctAnswer = 'option3'; // Replace with the actual value of the correct answer

        // Check if the selected answer is correct
        const selectedAnswer1 = document.querySelector('input[name="quiz1"]:checked').value;
        if (selectedAnswer1 === correctAnswer) {
            showPopup('Правильно! Умничка)', 'green');
        } else {
            showPopup('Ой, попробуй еще раз :)', 'orange');
        }
    });

    document.getElementById('quiz-form2').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Define the correct answer
        const correctAnswer = 'option2'; // Replace with the actual value of the correct answer

        // Check if the selected answer is correct
        const selectedAnswer2 = document.querySelector('input[name="quiz2"]:checked').value;
        if (selectedAnswer2 === correctAnswer) {
            showPopup('Уайя! Молодееец)', 'green');
        } else {
            showPopup('Ошибочка жаным :)', 'orange');
        }
    });

    document.getElementById('quiz-form3').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Define the correct answer
        const correctAnswer = 'option1'; // Replace with the actual value of the correct answer

        // Check if the selected answer is correct
        const selectedAnswer2 = document.querySelector('input[name="quiz3"]:checked').value;
        if (selectedAnswer2 === correctAnswer) {
            showPopup('Ну конечно, хахахха', 'green');
        } else {
            showPopup('Как ты могла забыыыыть!', 'red');
        }
    });

    document.getElementById('quiz-form4').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Define the correct answer
        const correctAnswer = 'option2'; // Replace with the actual value of the correct answer

        // Check if the selected answer is correct
        const selectedAnswer2 = document.querySelector('input[name="quiz4"]:checked').value;
        if (selectedAnswer2 === correctAnswer) {
            showPopup('Даааа, сори лень было считать, их реально много', 'green');
        } else {
            showPopup('ХАХАХАХАХ, нет', 'red');
        }
    });

});

// Function to show popup
function showPopup(message, color) {
    const popup = document.createElement('div');
    popup.textContent = message;
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = color;
    popup.style.color = 'white';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.zIndex = '1000';
    popup.style.fontSize = '1.5rem';

    document.body.appendChild(popup);

    // Remove the popup after a few seconds
    setTimeout(() => {
        document.body.removeChild(popup);
    }, 2000);
}

function animateHeader() {
    const header = document.querySelector('.header h1');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 500);
}

function setupGalleryHoverEffect() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
}

function animateZoomInImages() {
    const zoomInImages = document.querySelectorAll('.zoom-in img');
    zoomInImages.forEach((image, index) => {
        image.style.opacity = 0;
        setTimeout(() => {
            image.style.opacity = 1;
            image.style.transition = 'opacity 0.6s ease';
        }, 1000 * (index + 1));
    });
}

function animateZoomOutSection() {
    const zoomOutSection = document.querySelector('.zoom-out');
    window.addEventListener('scroll', () => {
        const position = zoomOutSection.getBoundingClientRect().top;
        const windowPosition = window.innerHeight / 1.8;
        if (position < windowPosition) {
            zoomOutSection.style.opacity = 1;
            zoomOutSection.style.transform = 'scale(1)';
        } else {
            zoomOutSection.style.opacity = 0;
            zoomOutSection.style.transform = 'scale(0.5)';
        }
    });
}


//SNOW
particlesJS("particles-js", {
    particles: {
      number: { value: 400, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3.9385584875935393,
        random: true,
        anim: {
          enable: false,
          speed: 24.2987777714781,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 3.2, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
