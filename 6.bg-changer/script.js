const btn = document.getElementById('btn')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomBg()
})

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}