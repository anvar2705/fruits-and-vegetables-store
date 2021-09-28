
//swiper slider
new Swiper('.swiper-latest', {
    loop: true,
    speed: 800,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-latest',
        prevEl: '.swiper-button-prev-latest',
    },
});


//custom select for language
document.querySelectorAll('.select').item(0).onclick = function (event) {
    let selectHeader = event.target.closest('.select__header'),
        selectItem = event.target.closest('.select__item'),
        select = event.target.closest('.select'),
        currentValue = document.querySelector('.section-header-language__text'),
        currentValueIcon = document.querySelector('.section-header-language__icon')
    if (selectHeader)
        this.classList.toggle('select_is-active')

    if (selectItem) {
        currentValue.innerHTML = selectItem.children[1].innerHTML
        currentValueIcon.src = selectItem.children[0].src
        select.classList.remove('select_is-active')
    }
}

document.onclick = function (event) {
    let select = event.target.closest('.select')
    if (!select) {
        document.querySelectorAll('.select').forEach(item => {
            item.classList.remove('select_is-active')
        })
    }
}