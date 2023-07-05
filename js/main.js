  const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
        loop: true,
        margin: 30,
        items: 3,
});

$('.slider-bth-left').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider-bth-right').click(function() {
    owl.trigger('next.owl.carousel');
})
