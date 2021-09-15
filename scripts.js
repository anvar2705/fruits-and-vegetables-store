let position = 0
const slidesToShow = 1
const slidesToScroll = 1
const container = document.querySelector('.section-portfolio__slider')
const track = document.querySelector('.section-portfolio__slider-track')
const btnPrev = document.querySelector('.section-portfolio__slider-button-prev')
const btnNext = document.querySelector('.section-portfolio__slider-button-next')
const items = document.querySelectorAll('.section-portfolio__slider-item')
const itemCount = items.length
const itemWidth = container.clientWidth / slidesToShow
const movePosition = slidesToScroll * itemWidth

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

    setPosition()
    checkButtons()
})
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth

    setPosition()
    checkButtons()
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

const checkButtons = () => {
    if (position === 0)
        btnPrev.style.opacity = '0.38'
    else
        btnPrev.style.opacity = '1'
    if (position <= (-(itemCount - slidesToShow) * itemWidth))
        btnNext.style.opacity = '0.38'
    else
        btnNext.style.opacity = '1'

}

checkButtons()