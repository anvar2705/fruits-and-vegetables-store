//swiper slider
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 700,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.section-latest__button_next',
        prevEl: '.section-latest__button_prev',
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

//section-main_allDepartments burger
document.querySelector('.section-main__allDepartment')
    .addEventListener('click', (event) => {
        let menu = document.querySelector('.section-main__allDepartment-menu')
        menu.classList.toggle('section-main__allDepartment-menu_active')
    })