document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.querySelector('.nav-hamburger');
    const nav = document.querySelector('.nav-list');
    
    navButton.addEventListener('click', function(event) {
        nav.classList.toggle('nav-list_active');
        this.classList.toggle('nav-hamburger_active');
        event.stopPropagation();
    });
    
    const headerMenuItems = document.querySelectorAll('.nav-list-item');
    
    headerMenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            nav.classList.remove('nav-list_active');
            navButton.classList.remove('nav-hamburger_active');
            event.stopPropagation();
        });
    });
    
    if (nav) {
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-list') && !event.target.classList.contains('nav__button')) {
                nav.classList.remove('nav-list_active');
                navButton.classList.remove('nav-hamburger_active');
            }
        });
    }
});



const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    items: 3,
    responsive:{
        0:{
            items:1,

        },
        700:{
            items:2,
        },
        900:{
            items:3,
        },
    }
});

$('.slider-btn-left').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider-btn-right').click(function() {
    owl.trigger('next.owl.carousel');
})
