const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    loop: true,
    speed: 800
});