
// Jqueary Home page
$(document).ready(function () {
    $(".section-1-animation").waypoint(function () {
        $(".section-1-animation").addClass("animate__animated animate__slideInDown");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-2-animation").waypoint(function () {
        $(".section-2-animation").addClass("animate__animated animate__slideInLeft");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-3-animation").waypoint(function () {
        $(".section-3-animation").addClass("animate__animated animate__slideInUp");
    }, { offset: '75%' }); 
});

$(document).ready(function () {
    $(".section-4-animation").waypoint(function () {
        $(".section-4-animation").addClass("animate__animated animate__slideInUp");
    }, { offset: '75%' });
});
$(document).ready(function () {
    $(".section-5-animation").waypoint(function () {
        $(".section-5-animation").addClass("animate__animated animate__slideInUp");
    }, { offset: '75%' });
});

$(document).ready(function () {
    $(".section-6-animation").waypoint(function () {
        $(".section-6-animation").addClass("animate__animated animate__fadeInLeftBig");
    }, { offset: '75%' });
});

$(document).ready(function () {
    $(".section-7-animation").waypoint(function () {
        $(".section-7-animation").addClass("animate__animated animate__slideInUp");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-8-animation").waypoint(function () {
        $(".section-8-animation").addClass("animate__animated animate__slideInUp");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-9-animation").waypoint(function () {
        $(".section-9-animation").addClass("animate__animated animate__slideInUp");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-10-animation").waypoint(function () {
        $(".section-10-animation").addClass("animate__animated animate__slideInLeft");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-11-animation").waypoint(function () {
        $(".section-11-animation").addClass("animate__animated animate__slideInLeft");
    }, { offset: '75%' }); 
});
$(document).ready(function () {
    $(".section-12-animation").waypoint(function () {
        $(".section-12-animation").addClass("animate__animated animate__slideInRight");
    }, { offset: '75%' }); 
});

// Jqueary Shop page
// Add Slide-In-Up Animation on Scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.album-card');
    
    // Initially hide all cards
    cards.forEach((card) => {
        card.classList.add('opacity-0'); 
    });

    cards.forEach((card) => {
        new Waypoint({
            element: card,
            handler: function () {
                card.classList.remove('opacity-0'); 
                card.classList.add('animate__animated', 'animate__slideInUp'); //animation classes
                this.destroy(); // Trigger animation only once
            },
            offset: '90%', 
        });
    });
}

// Initialize animations after loading albums
window.onload = function () {
    populateFilters();
    displayAlbums();
    animateOnScroll();
};
