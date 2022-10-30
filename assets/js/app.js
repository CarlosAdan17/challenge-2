let menu = document.getElementById('menuNav')
let content = document.getElementsByClassName('content')
let body = document.getElementById('body')

// icons
let iconMenu = document.getElementById('iconMenu')
let iconMenuClose = document.getElementById('iconMenuClose')

menu.addEventListener('click', () => {
    for (let index = 0; index < content.length; index++) {
        const element = content[index];
        element.classList.toggle('hidden')
    }
})

iconMenu.addEventListener('click', () => {
    (iconMenu.classList.contains == 'hidden') ? ( iconMenuClose.classList.add('hidden'), iconMenu.classList.remove('hidden')) : (iconMenuClose.classList.remove('hidden'), iconMenu.classList.add('hidden'));

    body.classList.add('overflow-hidden')
})


iconMenuClose.addEventListener('click', () => {
    (iconMenuClose.classList.contains == 'hidden') ? (iconMenuClose.classList.remove('hidden'), iconMenu.classList.add('hidden')) : (iconMenuClose.classList.add('hidden'), iconMenu.classList.remove('hidden'))

    body.classList.remove('overflow-hidden')
})